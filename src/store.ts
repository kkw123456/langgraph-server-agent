import { reactive } from 'vue'
import { api, fileToBase64 } from './api'
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
  searchKw: string          // 顶部工具栏的任务搜索关键字
  waiting: boolean          // 消息已发出但模型尚未开始回复（显示 loading）
  running: boolean          // 当前会话是否有正在进行的对话轮次
  filesTick: number         // 会话工作目录变化信号：创建文件类工具结束 / 会话完成时 +1，文件面板据此刷新
  sidebarOpen: boolean      // 移动端会话栏抽屉开关（由 Shell 渲染，聊天区按钮触发）
  rightOpen: boolean        // 右侧结果面板显隐（PC 消息头部 / 移动端 header 的面板开关）
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
  searchKw: '',
  waiting: false,
  running: false,
  filesTick: 0,
  sidebarOpen: false,
  rightOpen: true,
})

let ws: WebSocket | null = null

// 会产生文件变动的内置工具：结束时刷新文件列表
const FILE_TOOLS = new Set(['write_file', 'make_dir', 'delete_file', 'run_python'])
let lastToolName = ''

export function closeWs(): void {
  if (ws) { try { ws.close() } catch (e) {} ws = null }
}

function connectWs(id: string): void {
  closeWs()
  const proto = location.protocol === 'https:' ? 'wss' : 'ws'
  ws = new WebSocket(`${proto}://${location.host}/ws/${id}`)
  ws.onopen = () => {
    state.status = '● 已连接'
    // 重连后把当前权限模式同步给后端；若该会话有运行中的任务，
    // 后端会立即推送 resume 事件包，前端按原序重放即可续看流式输出
    ws!.send(JSON.stringify({ type: 'set_mode', mode: state.mode }))
  }
  ws.onclose = () => { state.status = '○ 已断开' }
  ws.onmessage = (ev: MessageEvent) => handleEvent(JSON.parse(ev.data) as WsEvent)
}

/**
 * 等待 WebSocket 就绪。新建会话后立即发消息时连接可能仍在握手中：
 * - open：resolve(true)，消息走 WS 流式；
 * - error/close 或超时：resolve(false)，调用方回退 REST。
 * 超时后若连接仍在 CONNECTING 则继续等握手结果，尽量避免首条消息落入无流式的 REST 分支。
 */
function waitWsOpen(timeoutMs = 8000): Promise<boolean> {
  return new Promise((resolve) => {
    if (!ws) return resolve(false)
    if (ws.readyState === 1) return resolve(true)
    let done = false
    let timer = 0
    const finish = (ok: boolean) => {
      if (done) return
      done = true
      clearTimeout(timer)
      ws?.removeEventListener('open', onOpen)
      ws?.removeEventListener('close', onClose)
      ws?.removeEventListener('error', onClose)
      resolve(ok)
    }
    const onOpen = () => finish(true)
    const onClose = () => finish(false)
    ws.addEventListener('open', onOpen)
    ws.addEventListener('close', onClose)
    ws.addEventListener('error', onClose)
    timer = window.setTimeout(() => {
      // 超时但仍在握手中：继续等 open/close，只有彻底没戏才回退
      if (ws && ws.readyState === 0) return
      finish(ws?.readyState === 1)
    }, timeoutMs)
  })
}

function handleEvent(msg: WsEvent): void {
  if (msg.type === 'resume') {
    // 断线重连回放：清空本地 live 状态后按原序重放该轮已发生的事件
    if (msg.mode) state.mode = msg.mode
    state.live = null
    state.pendingTool = null
    state.waiting = false
    state.running = true
    setConvRunning(state.current, true)
    for (const ev of msg.events) applyEvent(ev)
    return
  }
  applyEvent(msg)
}

// 乐观同步会话列表项的「运行中」徽标：WS 事件驱动，不等下一次 loadConvs 轮询
function setConvRunning(id: string | null, v: boolean): void {
  if (!id) return
  const c = state.convs.find((x) => x.id === id)
  if (c) c.running = v
}

function applyEvent(msg: WsEvent): void {
  switch (msg.type) {
    case 'message_start':
      state.live = { role: 'assistant', content: '', tool_calls: [] }
      state.waiting = false
      state.running = true
      setConvRunning(state.current, true) // 侧栏立即转圈（结束后由 message_end 的 loadConvs 校准）
      break
    case 'token':
      if (state.live) state.live.content += msg.content
      state.waiting = false
      break
    case 'reasoning':
      if (state.live) state.live.reasoning = (state.live.reasoning || '') + msg.content
      state.waiting = false
      break
    case 'tool_start':
      if (state.live) state.live.tool_calls!.push({ name: msg.name, input: msg.input, output: '执行中…', at: msg.at })
      lastToolName = msg.name
      state.waiting = false
      break
    case 'tool_end':
      // 按 name+at 精确匹配（并行工具 end 乱序到达时不串位）；匹配不到回退最后一个
      {
        const calls = state.live?.tool_calls
        const target =
          calls?.find((t) => (msg.name ? t.name === msg.name : true) && msg.at !== undefined && t.at === msg.at && t.output === '执行中…')
          ?? (calls && msg.name
            ? calls.find((t) => t.name === msg.name && t.output === '执行中…')
            : undefined)
          ?? (calls && calls.length ? calls[calls.length - 1] : undefined)
        if (target) target.output = msg.output
      }
      // 创建文件类工具结束：文件树可能变化
      if (FILE_TOOLS.has(lastToolName)) state.filesTick++
      break
    case 'message_end':
      if (state.live) {
        // 手动停止：与后端落库行为一致，在已生成内容后补停止标记
        // （仅有工具调用而无文本时同样补，避免页面与落库不一致）
        let c = state.live.content
        if (msg.stopped && (c || (state.live.tool_calls ?? []).length)) {
          c = (c || '') + (c ? '\n\n' : '') + '（已手动停止）'
        }
        // 内容与工具调用全为空时不落空消息（如刚等待就停止）
        if (c || (state.live.tool_calls ?? []).length) {
          state.messages.push({
            role: 'assistant',
            content: c,
            tool_calls: (state.live.tool_calls ?? []).map((t) => ({ ...t })),
            reasoning: state.live.reasoning,
          })
        }
        state.live = null
      }
      state.waiting = false
      state.running = false
      setConvRunning(state.current, false)
      if (msg.stopped) toast.info('已停止，已生成的内容已保留')
      state.filesTick++ // 一轮对话结束：工作目录可能新增文件
      loadConvs()
      break
    case 'error':
      if (state.live) state.live.content += '\n[错误] ' + msg.content
      else state.messages.push({ role: 'assistant', content: '[错误] ' + msg.content })
      state.waiting = false
      setConvRunning(state.current, false)
      break
    case 'tool_confirm':
      // 后端在「确认模式」下暂停工具执行，等待前端决策
      state.pendingTool = msg.tool_calls
      state.waiting = false
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
  const cur = state.convs.find((c) => c.id === state.current)
  state.running = !!cur?.running
}

/** 按顶部工具栏的搜索关键字过滤后的会话列表。 */
export function filteredConvs(): Conversation[] {
  const kw = state.searchKw.trim().toLowerCase()
  if (!kw) return state.convs
  return state.convs.filter((c) => (c.title || '').toLowerCase().includes(kw))
}

/** 在已有会话中发送一条消息（供首页快捷卡片「带着内容新建会话」使用）。 */
export async function startWith(text: string): Promise<string | null> {
  const t = (text || '').trim()
  if (!t) return null
  await newChat()
  await sendText(t)
  return state.current
}

export async function selectConv(id: string): Promise<void> {
  closeWs()
  state.current = id
  state.live = null
  state.pendingTool = null
  state.waiting = false
  state.running = false
  localStorage.setItem('lg_last_conv', id) // 刷新后恢复到最后会话
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
  state.waiting = false
  state.running = false
  state.messages = []
  state.convTitle = '新对话'
  localStorage.removeItem('lg_last_conv')
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

/** 重命名会话：PATCH 后同步本地列表与当前标题，避免整表刷新闪烁。 */
export async function renameConv(id: string, title: string): Promise<void> {
  const t = (title || '').trim()
  if (!t) return
  await api.patch(`/api/conversations/${id}`, { title: t })
  const c = state.convs.find((x) => x.id === id)
  if (c) c.title = t
  if (state.current === id) state.convTitle = t
}

export async function sendText(text: string, files?: File[]): Promise<void> {
  const t = (text || '').trim()
  if (!t && !(files && files.length)) return
  if (!state.current) {
    const c = await api.post<Conversation>('/api/conversations', { title: (t || '文件会话').slice(0, 30) })
    state.current = c.id
    localStorage.setItem('lg_last_conv', c.id)
    await loadConvs()
    connectWs(c.id)
    // 等连接握手完成再发消息：保证第一条消息也走 WS 流式（否则落 REST 兜底，无流式与事件）
    await waitWsOpen()
  }
  // 附件上传：进入会话工作目录；正文附一行 agent 可读的提示，附件清单随消息结构化传递
  let body = t
  const attachments: { path: string; name: string; size: number }[] = []
  if (files && files.length && state.current) {
    for (const f of files) {
      try {
        const data = await fileToBase64(f)
        const r = await api.uploadFiles<{ ok: boolean; saved?: { path: string; name: string; size: number }[]; error?: string }>(
          state.current, [{ name: f.name, data }],
        )
        if (r.ok && r.saved?.length) {
          attachments.push(...r.saved)
        } else {
          toast.error(`${f.name} 上传失败: ${r.error || '未知错误'}`)
        }
      } catch {
        toast.error(`${f.name} 读取失败`)
      }
    }
    if (attachments.length) {
      state.filesTick++ // 上传完成：文件树刷新
      const list = attachments.map((s) => `${s.path} (${fmtSize(s.size)})`).join('、')
      body = (body ? body + '\n\n' : '') + `[附件已上传至工作目录：${list}，可直接读取]`
    }
  }
  if (!body.trim() && !attachments.length) return
  state.messages.push({ role: 'user', content: body, attachments: attachments.length ? attachments : undefined })
  if (ws && ws.readyState === 1) {
    state.waiting = true // 等待模型开始回复，聊天区显示 loading
    state.running = true
    setConvRunning(state.current, true) // 乐观标记：侧栏会话项立即转圈
    ws.send(JSON.stringify({ type: 'message', content: body, attachments }))
  } else {
    await api.post(`/api/conversations/${state.current}/messages`, { content: body, attachments })
    const d = await api.get<{ messages?: Message[] }>(`/api/conversations/${state.current}`)
    state.messages = d.messages ?? []
    state.waiting = false
    state.filesTick++ // REST 兜底路径无事件流，直接标记文件树刷新
    loadConvs()
  }
}

function fmtSize(n: number): string {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

// ===================== 停止对话 =====================
export async function stopChat(): Promise<void> {
  if (!state.current) return
  state.waiting = false
  // REST 端点为主，WS 消息兜底（双通道任一生效即可）
  try { await api.post(`/api/conversations/${state.current}/stop`, {}) } catch (e) { /* 已结束则忽略 */ }
  if (ws && ws.readyState === 1) ws.send(JSON.stringify({ type: 'stop' }))
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
