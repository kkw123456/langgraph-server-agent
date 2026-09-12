// 工作台扩展域的状态与动作：项目空间、自动化任务、资料库、运行时模型。
//
// 与 store.ts 分离：store.ts 负责「聊天会话」这条主链路，
// 本文件负责左侧导航对应的其余功能域，避免单文件继续膨胀。
import { reactive } from 'vue'
import { api } from './api'
import { message as toast } from './main'
import type {
  Project, Automation, LibraryItem, RuntimeInfo, AutoSchedule,
} from './types'

interface WorkbenchState {
  projects: Project[]
  automations: Automation[]
  library: LibraryItem[]
  runtime: RuntimeInfo
  loading: boolean
}

export const wb = reactive<WorkbenchState>({
  projects: [],
  automations: [],
  library: [],
  runtime: { model: '', models: [], skills_enabled: 0, skills_total: 0 },
  loading: false,
})

// ===================== 项目空间 =====================
export async function loadProjects(): Promise<void> {
  const r = await api.get<Project[] | { ok: false }>('/api/projects')
  wb.projects = Array.isArray(r) ? r : []
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
  const r = await api.get<Automation[] | { ok: false }>('/api/automations')
  wb.automations = Array.isArray(r) ? r : []
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
  const url = q ? `/api/library?q=${encodeURIComponent(q)}` : '/api/library'
  const r = await api.get<LibraryItem[] | { ok: false }>(url)
  wb.library = Array.isArray(r) ? r : []
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

/** 首页/工作台一次性加载：并行拉取各域数据 */
export async function loadWorkbench(): Promise<void> {
  wb.loading = true
  await Promise.all([loadProjects(), loadAutomations(), loadLibrary(), loadRuntime()])
  wb.loading = false
}
