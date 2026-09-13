// 共享领域类型：会话、消息、工具调用、技能、WebSocket 事件，
// 以及工作台扩展域（项目空间 / 自动化 / 资料库 / 运行时）。

export interface ToolCall {
  name: string
  input: string
  output: string
  /** 工具调用发生时正文已输出的长度：用于把消息还原为「文本→工具组→文本」交错序列 */
  at?: number
}

export interface Message {
  role: 'user' | 'assistant'
  content: string
  tool_calls?: ToolCall[]
  reasoning?: string // 思考链（deepseek/ark 等模型），历史消息一并返回
  /** 用户消息携带的附件（已上传到会话工作目录），消息下方以卡片回显 */
  attachments?: { path: string; name: string; size: number }[]
}

export interface Conversation {
  id: string
  title: string
  updated_at?: number
  running?: boolean // 后端标记：该会话是否有正在进行的对话轮次
}

export interface Skill {
  id: string
  name: string
  description: string
  category?: string
  tools: string[]
  builtin: boolean
  enabled: boolean
}

// 工具调用权限模式：auto 自动执行 / confirm 执行前需用户确认
export type ToolMode = 'auto' | 'confirm'

// 等待用户审批的单个工具调用（后端 tool_confirm 事件携带）
export interface PendingToolCall {
  id: string
  name: string
  args: unknown
}

// 后端 WebSocket 推送的事件联合类型
export type WsEvent =
  | { type: 'message_start' }
  | { type: 'token'; content: string }
  | { type: 'reasoning'; content: string }
  | { type: 'tool_start'; name: string; input: string; at?: number }
  | { type: 'tool_end'; output: string; name?: string; at?: number }
  | { type: 'message_end'; stopped?: boolean }
  | { type: 'error'; content: string }
  | { type: 'tool_confirm'; tool_calls: PendingToolCall[] }
  | { type: 'mode_set'; mode: ToolMode }
  | { type: 'warn'; content: string }
  // 断线重连回放：events 为该轮已发生的事件，前端按原序重放即可续看
  | { type: 'resume'; events: WsEvent[]; mode?: ToolMode }

export interface CreateSkillPayload {
  name: string
  description: string
  code: string
}

// 会话隔离工作目录的文件浏览
export interface FileEntry {
  name: string
  type: 'file' | 'dir'
  size: number
  mtime: number
  is_text: boolean
}
export interface FileDirResponse {
  ok: boolean
  type: 'dir'
  path: string
  entries: FileEntry[]
  error?: string
}
export interface FileContentResponse {
  ok: boolean
  type: 'file'
  path: string
  name: string
  size: number
  content: string
  truncated: boolean
  binary: boolean
  note?: string
  error?: string
}
export type FileResponse = FileDirResponse | FileContentResponse

// ===================== 工作台扩展域 =====================

// 项目空间：把多个会话组织在一起
export interface Project {
  id: string
  name: string
  description: string
  color: string
  created_at: number
  updated_at: number
  conv_count: number
  conv_ids: string[]
}

// 自动化任务：定时或手动触发的指令
export type AutoSchedule = 'daily' | 'weekly' | 'hourly' | 'manual'

export interface Automation {
  id: string
  name: string
  prompt: string
  schedule: AutoSchedule
  at_time: string
  enabled: boolean
  last_run_at: number | null
  last_status: string | null
  run_count: number
  created_at: number
}

// 资料库条目：笔记 / 链接 / 文件引用
export type LibraryKind = 'note' | 'link' | 'file'

export interface LibraryItem {
  id: string
  title: string
  kind: LibraryKind
  content: string
  tags: string
  created_at: number
  updated_at: number
}

// 运行时信息：可选模型与当前模型，以及各域统计（用于设置页展示）
/** 模型提供商（OpenAI 兼容），api_key 服务端只回传脱敏提示；
 *  scope: system 全员可见（admin 管理）/ user 用户私有 */
export interface RuntimeProvider {
  name: string
  scope?: 'system' | 'user'
  owner?: string
  base_url: string
  has_key?: boolean
  key_hint?: string
  models: string[]
}

/** 用户（admin 管理页用，不含密码字段） */
export interface UserInfo {
  username: string
  role: string
  created_at: number
}

export interface RuntimeInfo {
  model: string
  role?: string
  base_url?: string
  models: string[]
  providers?: RuntimeProvider[]
  temperature?: number
  skills_enabled: number
  skills_total: number
  conv_count?: number
  project_count?: number
  automation_count?: number
  library_count?: number
}
