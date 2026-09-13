// 工作台扩展域的状态与动作：项目空间、自动化任务、资料库、运行时模型。
//
// 与 store.ts 分离：store.ts 负责「聊天会话」这条主链路，
// 本文件负责左侧导航对应的其余功能域，避免单文件继续膨胀。
import { reactive } from 'vue'
import { api } from './api'
import { message as toast } from './main'
import type {
  Project, Automation, LibraryItem, RuntimeInfo, RuntimeProvider, AutoSchedule, UserInfo,
} from './types'

interface WorkbenchState {
  projects: Project[]
  automations: Automation[]
  library: LibraryItem[]
  runtime: RuntimeInfo
  users: UserInfo[]          // 用户列表（admin 管理，#69）
  loading: boolean
  /** 各域首载骨架屏开关：仅在列表为空时置位，避免轮询刷新闪烁 */
  loadingProjects: boolean
  loadingAutomations: boolean
  loadingLibrary: boolean
  loadingUsers: boolean
}

export const wb = reactive<WorkbenchState>({
  projects: [],
  automations: [],
  library: [],
  runtime: { model: '', models: [], skills_enabled: 0, skills_total: 0 },
  users: [],
  loading: false,
  loadingProjects: false,
  loadingAutomations: false,
  loadingLibrary: false,
  loadingUsers: false,
})

// ===================== 项目空间 =====================
export async function loadProjects(): Promise<void> {
  const first = wb.projects.length === 0
  if (first) wb.loadingProjects = true
  try {
    const r = await api.get<Project[] | { ok: false }>('/api/projects')
    wb.projects = Array.isArray(r) ? r : []
  } finally {
    wb.loadingProjects = false
  }
}

export async function createProject(
  name: string, description = '', color = '#2f6feb',
): Promise<Project | null> {
  const r = await api.post<Project & { ok?: boolean; error?: string }>('/api/projects', {
    name, description, color,
  })
  if (r.error || r.ok === false) {
    toast.error(r.error || '创建失败')
    return null
  }
  await loadProjects()
  return r
}

export async function updateProject(
  id: string, patch: { name?: string; description?: string; color?: string },
): Promise<boolean> {
  const r = await api.patch<{ ok: boolean }>(`/api/projects/${id}`, patch)
  if (r.ok) await loadProjects()
  return !!r.ok
}

export async function deleteProject(id: string): Promise<boolean> {
  const r = await api.del<{ ok: boolean }>(`/api/projects/${id}`)
  if (r.ok) await loadProjects()
  return !!r.ok
}

export async function addConvToProject(pid: string, cid: string): Promise<boolean> {
  const r = await api.post<{ ok: boolean }>(`/api/projects/${pid}/conversations`, { cid })
  if (r.ok) await loadProjects()
  return !!r.ok
}

export async function removeConvFromProject(pid: string, cid: string): Promise<boolean> {
  const r = await api.del<{ ok: boolean }>(`/api/projects/${pid}/conversations/${cid}`)
  if (r.ok) await loadProjects()
  return !!r.ok
}

// ===================== 自动化 =====================
export async function loadAutomations(): Promise<void> {
  const first = wb.automations.length === 0
  if (first) wb.loadingAutomations = true
  try {
    const r = await api.get<Automation[] | { ok: false }>('/api/automations')
    wb.automations = Array.isArray(r) ? r : []
  } finally {
    wb.loadingAutomations = false
  }
}

export interface AutomationInput {
  name: string
  prompt: string
  schedule: AutoSchedule
  at_time: string
  enabled?: boolean
}

export async function createAutomation(input: AutomationInput): Promise<boolean> {
  const r = await api.post<Automation & { ok?: boolean; error?: string }>('/api/automations', input)
  if (r.error || r.ok === false) {
    toast.error(r.error || '创建失败')
    return false
  }
  await loadAutomations()
  return true
}

export async function updateAutomation(
  id: string, patch: Partial<AutomationInput>,
): Promise<boolean> {
  const r = await api.patch<{ ok: boolean }>(`/api/automations/${id}`, patch)
  if (r.ok) await loadAutomations()
  return !!r.ok
}

export async function deleteAutomation(id: string): Promise<boolean> {
  const r = await api.del<{ ok: boolean }>(`/api/automations/${id}`)
  if (r.ok) await loadAutomations()
  return !!r.ok
}

/** 手动触发一次自动化：返回新会话 id，供页面跳转到对话 */
export async function runAutomation(id: string): Promise<string | null> {
  const r = await api.post<{ ok: boolean; cid?: string; error?: string }>(
    `/api/automations/${id}/run`,
  )
  if (!r.ok || !r.cid) {
    toast.error(r.error || '触发失败')
    return null
  }
  await loadAutomations()
  return r.cid
}

// ===================== 资料库 =====================
export async function loadLibrary(q = ''): Promise<void> {
  const first = q === '' && wb.library.length === 0
  if (first) wb.loadingLibrary = true
  try {
    const url = q ? `/api/library?q=${encodeURIComponent(q)}` : '/api/library'
    const r = await api.get<LibraryItem[] | { ok: false }>(url)
    wb.library = Array.isArray(r) ? r : []
  } finally {
    wb.loadingLibrary = false
  }
}

export interface LibraryInput {
  title: string
  content: string
  kind: LibraryItem['kind']
  tags: string
}

export async function createLibraryItem(input: LibraryInput): Promise<boolean> {
  const r = await api.post<LibraryItem & { ok?: boolean; error?: string }>('/api/library', input)
  if (r.error || r.ok === false) {
    toast.error(r.error || '保存失败')
    return false
  }
  await loadLibrary()
  return true
}

export async function updateLibraryItem(
  id: string, patch: Partial<LibraryInput>,
): Promise<boolean> {
  const r = await api.patch<{ ok: boolean }>(`/api/library/${id}`, patch)
  if (r.ok) await loadLibrary()
  return !!r.ok
}

export async function deleteLibraryItem(id: string): Promise<boolean> {
  const r = await api.del<{ ok: boolean }>(`/api/library/${id}`)
  if (r.ok) await loadLibrary()
  return !!r.ok
}

// ===================== 运行时 =====================
export async function loadRuntime(): Promise<void> {
  const r = await api.get<RuntimeInfo>('/api/runtime')
  if (r && r.model !== undefined) wb.runtime = r
}

export async function setModel(name: string): Promise<boolean> {
  const r = await api.post<{ ok: boolean; model?: string; error?: string }>(
    '/api/runtime/model', { model: name },
  )
  if (!r.ok) {
    toast.error(r.error || '切换模型失败')
    return false
  }
  wb.runtime.model = r.model || name
  toast.success(`已切换到 ${wb.runtime.model}`)
  return true
}

/** 添加模型到可用列表（持久化到服务端）；provider 非空时挂到该自定义提供商下。
 *  scope: 'system'（admin 可管理，全员可见）/ 'user'（私有，默认）。 */
export async function addModel(name: string, provider = '', scope: 'system' | 'user' = 'user'): Promise<boolean> {
  const n = (name || '').trim()
  if (!n) return false
  const r = await api.post<{
    ok: boolean; models?: string[]; providers?: RuntimeProvider[]; error?: string
  }>('/api/runtime/models', { name: n, provider, scope })
  if (!r.ok) {
    toast.error(r.error || '添加失败')
    return false
  }
  if (r.providers) wb.runtime.providers = r.providers
  if (r.models) wb.runtime.models = r.models
  toast.success(`已添加模型 ${n}`)
  return true
}

/** 从可用列表移除模型；provider 非空时从该自定义提供商下移除。 */
export async function removeModel(name: string, provider = '', scope: 'system' | 'user' = 'user'): Promise<boolean> {
  const url = provider
    ? `/api/runtime/providers/${encodeURIComponent(provider)}/models/${encodeURIComponent(name)}?scope=${scope}`
    : `/api/runtime/models/${encodeURIComponent(name)}?scope=${scope}`
  const r = await api.del<{
    ok: boolean; models?: string[]; providers?: RuntimeProvider[]; model?: string; error?: string
  }>(url)
  if (!r.ok) {
    toast.error(r.error || '删除失败')
    return false
  }
  if (r.providers) wb.runtime.providers = r.providers
  if (r.models) wb.runtime.models = r.models
  if (r.model) wb.runtime.model = r.model
  return true
}

/** 添加模型提供商（OpenAI 兼容接口：名称 + 地址 + 密钥）。
 *  scope: 'system'（admin 专属）/ 'user'（私有，默认）。 */
export async function addProvider(
  name: string, baseUrl: string, apiKey = '', scope: 'system' | 'user' = 'user',
): Promise<boolean> {
  const r = await api.post<{ ok: boolean; providers?: RuntimeProvider[]; error?: string }>(
    '/api/runtime/providers',
    { name: (name || '').trim(), base_url: (baseUrl || '').trim(), api_key: (apiKey || '').trim(), scope },
  )
  if (!r.ok) {
    toast.error(r.error || '添加提供商失败')
    return false
  }
  wb.runtime.providers = r.providers || []
  toast.success(`已添加提供商 ${name}`)
  return true
}

/** 删除模型提供商（其下模型一并移除；正用的模型会回退到默认表）。 */
export async function removeProvider(name: string, scope: 'system' | 'user' = 'user'): Promise<boolean> {
  const r = await api.del<{
    ok: boolean; providers?: RuntimeProvider[]; model?: string; error?: string
  }>(`/api/runtime/providers/${encodeURIComponent(name)}?scope=${scope}`)
  if (!r.ok) {
    toast.error(r.error || '删除失败')
    return false
  }
  wb.runtime.providers = r.providers || []
  if (r.model) wb.runtime.model = r.model
  return true
}

// ===================== 用户管理（admin 专属，#69） =====================
export async function loadUsers(): Promise<void> {
  const first = wb.users.length === 0
  if (first) wb.loadingUsers = true
  try {
    const r = await api.get<UserInfo[] | { ok: false }>('/api/users')
    wb.users = Array.isArray(r) ? r : []
  } catch { /* 非 admin 会 403，静默 */ } finally {
    wb.loadingUsers = false
  }
}

export async function createUser(
  username: string, password: string, role: 'admin' | 'user' = 'user',
): Promise<boolean> {
  const r = await api.post<{ ok: boolean; error?: string }>('/api/users', { username, password, role })
  if (!r.ok) {
    toast.error(r.error || '创建失败')
    return false
  }
  await loadUsers()
  toast.success(`已创建用户 ${username}`)
  return true
}

export async function deleteUser(username: string): Promise<boolean> {
  const r = await api.del<{ ok: boolean; error?: string }>(
    `/api/users/${encodeURIComponent(username)}`,
  )
  if (!r.ok) {
    toast.error(r.error || '删除失败')
    return false
  }
  await loadUsers()
  return true
}

/** 首页/工作台一次性加载：并行拉取各域数据 */
export async function loadWorkbench(): Promise<void> {
  wb.loading = true
  await Promise.all([loadProjects(), loadAutomations(), loadLibrary(), loadRuntime()])
  wb.loading = false
}
