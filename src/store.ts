import { reactive } from 'vue'
import { api } from './api'
import { message as toast } from './main'
import type { Conversation, Message, Skill, WsEvent, CreateSkillPayload, ToolMode, PendingToolCall } from './types'

interface AppState {
  convs: Conversation[]
  current: string | null
  messages: Message[]
  convTitle: string
  status: string
  skills: Skill[]
  live: Message | null
  mode: ToolMode            // 工具调用权限模式
  pendingTool: PendingToolCall[] | null  // 待用户审批的工具调用（确认模式）
}

// 轻量级全局 store：单一响应式 state + 动作函数。
// 组件直接 import { state, ... } 使用，避免逐层 props 透传。
export const state = reactive<AppState>({
  convs: [],
  current: null,
  messages: [],
  convTitle: '未选择会话',
  status: '○ 未连接',
  skills: [],
  live: null, // 正在流式输出的助手消息
  mode: 'auto',
  pendingTool: null,
})

let ws: WebSocket | null = null

export function closeWs(): void {
  if (ws) { try { ws.close() } catch (e) {} ws = null }
}

function connectWs(id: string): void {
  closeWs()
  const proto = location.protocol === 'https:' ? 'wss' : 'ws'
  ws = new WebSocket(`${proto}://${location.host}/ws/${id}`)
  ws.onopen = () => {
    state.status = '● 已连接'
    // 重连后把当前权限模式同步给后端，确保 conn.mode 与前端一致
    ws!.send(JSON.stringify({ type: 'set_mode', mode: state.mode }))
  }
  ws.onclose = () => { state.status = '○ 已断开' }
  ws.onmessage = (ev: MessageEvent) => handleEvent(JSON.parse(ev.data) as WsEvent)
}

function handleEvent(msg: WsEvent): void {
  switch (msg.type) {
    case 'message_start':
      state.live = { role: 'assistant', content: '', tool_calls: [] }
      break
    case 'token':
      if (state.live) state.live.content += msg.content
      break
    case 'tool_start':
      if (state.live) state.live.tool_calls!.push({ name: msg.name, input: msg.input, output: '执行中…' })
      break
    case 'tool_end':
      if (state.live && state.live.tool_calls!.length) {
        const last = state.live.tool_calls![state.live.tool_calls!.length - 1]
        last.output = msg.output
      }
      break
    case 'message_end':
      if (state.live) {
        state.messages.push({
          role: 'assistant',
          content: state.live.content,
          tool_calls: (state.live.tool_calls ?? []).map((t) => ({ ...t })),
        })
        state.live = null
      }
      loadConvs()
      break
    case 'error':
      if (state.live) state.live.content += '\n[错误] ' + msg.content
      else state.messages.push({ role: 'assistant', content: '[错误] ' + msg.content })
      break
    case 'tool_confirm':
      // 后端在「确认模式」下暂停工具执行，等待前端决策
      state.pendingTool = msg.tool_calls
      break
    case 'mode_set':
      state.mode = msg.mode
      break
    case 'warn':
      toast.warning(msg.content)
      break
  }
}

// ===================== 会话 =====================
export async function loadConvs(): Promise<void> {
  state.convs = await api.get<Conversation[]>('/api/conversations')
}

export async function selectConv(id: string): Promise<void> {
  closeWs()
  state.current = id
  state.live = null
  state.pendingTool = null
  const d = await api.get<{ meta?: Conversation; messages?: Message[] }>(`/api/conversations/${id}`)
  state.convTitle = d.meta ? d.meta.title : '未选择会话'
  state.messages = d.messages ?? []
  connectWs(id)
  await loadConvs()
}

export async function newChat(): Promise<void> {
  closeWs()
  state.current = null
  state.live = null
  state.pendingTool = null
  state.messages = []
  state.convTitle = '新对话'
  await loadConvs()
}

// ===================== 工具调用权限模式 =====================
export function setMode(mode: ToolMode): void {
  state.mode = mode
  if (ws && ws.readyState === 1) ws.send(JSON.stringify({ type: 'set_mode', mode }))
}

// 就待确认的工具调用给出决策：action=submit 带每条调用 approve/deny 与可编辑 args；action=cancel 表示取消本轮
export function resolveTool(decision: {
  action: 'submit' | 'cancel'
  calls?: { id: string; action?: 'approve' | 'deny'; args?: unknown }[]
}): void {
  if (ws && ws.readyState === 1) {
    ws.send(JSON.stringify({ type: 'tool_decision', action: decision.action, calls: decision.calls ?? [] }))
  }
  state.pendingTool = null
}

export async function deleteConv(id: string): Promise<void> {
  await api.del(`/api/conversations/${id}`)
  if (state.current === id) await newChat()
  await loadConvs()
}

export async function sendText(text: string): Promise<void> {
  const t = (text || '').trim()
  if (!t) return
  if (!state.current) {
    const c = await api.post<Conversation>('/api/conversations', { title: t.slice(0, 30) })
    state.current = c.id
    await loadConvs()
    connectWs(c.id)
  }
  state.messages.push({ role: 'user', content: t })
  if (ws && ws.readyState === 1) {
    ws.send(JSON.stringify({ type: 'message', content: t }))
  } else {
    await api.post(`/api/conversations/${state.current}/messages`, { content: t })
    const d = await api.get<{ messages?: Message[] }>(`/api/conversations/${state.current}`)
    state.messages = d.messages ?? []
    loadConvs()
  }
}

// ===================== 技能 =====================
export async function loadSkills(): Promise<void> {
  state.skills = await api.get<Skill[]>('/api/skills')
}

export async function toggleSkill(s: Skill): Promise<void> {
  await api.post(`/api/skills/${s.id}/${s.enabled ? 'disable' : 'enable'}`)
  await loadSkills()
}

export async function removeSkill(id: string): Promise<void> {
  await api.del(`/api/skills/${id}`)
  await loadSkills()
}

export async function reloadSkills(): Promise<void> {
  await api.post('/api/skills/reload')
  await loadSkills()
}

export async function createSkill(payload: CreateSkillPayload): Promise<{ ok: boolean; error?: string }> {
  const r = await api.post<{ ok: boolean; error?: string }>('/api/skills/custom', payload)
  if (r.ok) await loadSkills()
  return r
}
