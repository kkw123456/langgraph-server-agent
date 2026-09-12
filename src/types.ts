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

// 后端 WebSocket 推送的事件联合类型
export type WsEvent =
  | { type: 'message_start' }
  | { type: 'token'; content: string }
  | { type: 'tool_start'; name: string; input: string }
  | { type: 'tool_end'; output: string }
  | { type: 'message_end' }
  | { type: 'error'; content: string }

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
