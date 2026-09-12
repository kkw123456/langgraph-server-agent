// 共享领域类型：会话、消息、工具调用、技能、WebSocket 事件。

export interface ToolCall {
  name: string
  input: string
  output: string
}

export interface Message {
  role: 'user' | 'assistant'
  content: string
  tool_calls?: ToolCall[]
}

export interface Conversation {
  id: string
  title: string
  updated_at?: number
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
  | { type: 'tool_start'; name: string; input: string }
  | { type: 'tool_end'; output: string }
  | { type: 'message_end' }
  | { type: 'error'; content: string }
  | { type: 'tool_confirm'; tool_calls: PendingToolCall[] }
  | { type: 'mode_set'; mode: ToolMode }
  | { type: 'warn'; content: string }

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
