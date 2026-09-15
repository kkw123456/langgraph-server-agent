<script setup lang="ts">
// 设置页：模型管理（系统模型 / 我的模型 分级）、用户管理（admin）、
// 运行时信息、工具权限模式、退出登录。
import { onMounted, ref, computed, reactive, h } from 'vue'
import type { VNodeChild } from 'vue'
import { useRouter } from 'vue-router'
import {
  NCard, NRadioGroup, NRadioButton, NSelect, NButton, NTag, NInput, NEmpty, useMessage, useDialog,
  NDataTable, NModal, NCheckbox, NCheckboxGroup, NSpin, NSpace, NAlert, NTooltip,
} from 'naive-ui'
import { Settings, Settings2, LogOut, RefreshCw, Cpu, ShieldCheck, Database, Check, X, Plus, Server, Users, Lock, Globe, BarChart3, DownloadCloud, Trash2 } from 'lucide-vue-next'
import { state, setMode } from '../store'
import {
  wb, loadRuntime, setModel, addModel, removeModel, addProvidersBatch, removeProvider,
  loadUsers, createUser, deleteUser, fetchCatalog, addModelsBatch, loadCatalogProviders,
} from '../workbench'
import type { CatalogModel, CatalogProvider, ProviderInput } from '../types'
import { authState, logout as doLogout } from '../auth'
import { api } from '../api'
import ProviderCard from '../components/ProviderCard.vue'

const message = useMessage()
const dialog = useDialog()
const router = useRouter()

// 是否管理员：认证未启用时视为 admin（本地开发模式）
const isAdmin = computed(() => authState.role === 'admin' || !authState.enabled)

const modelOptions = computed(() => {
  const all = new Set<string>(wb.runtime.models)
  for (const p of wb.runtime.providers || []) for (const m of p.models || []) all.add(m)
  return [...all].filter(Boolean).map((m) => ({ label: m, value: m }))
})

// ===================== 模型分级（#67）：系统模型（admin 管理） / 我的模型（私有） =====================
// 展示次序按用户要求调整为「以供应商为中心」：每个供应商是一张可展开的卡片，
// 模型列表收在卡片内部；默认提供商排在最后作为兜底分组。
interface ProviderGroup {
  name: string; label: string; sub: string; models: string[]
  builtin: boolean; scope: 'system' | 'user'; canManage: boolean
  code?: string          // 供应商编码，用于拉取内置模型清单
  baseUrl?: string
  hasKey?: boolean
  keyHint?: string
  status?: number
}

// 默认组模型的 scope（后端 models_scoped：[{name, scope}]）
const scopedModels = computed<Record<string, string[]>>(() => {
  const out: Record<string, string[]> = { system: [], user: [] }
  const list = (wb.runtime as unknown as { models_scoped?: { name: string; scope: string }[] }).models_scoped
  if (Array.isArray(list)) {
    for (const m of list) {
      const s = m.scope === 'user' ? 'user' : 'system'
      if (!out[s].includes(m.name)) out[s].push(m.name)
    }
  } else {
    out.system = [...wb.runtime.models]
  }
  return out
})

const systemGroups = computed<ProviderGroup[]>(() => [
  ...(wb.runtime.providers || [])
    .filter((p) => (p.scope || 'system') === 'system')
    .map((p) => ({
      name: p.name,
      label: p.name,
      sub: `${p.base_url}${p.has_key ? ` · 密钥 ${p.key_hint || '已设置'}` : ' · 未设密钥'}`,
      models: p.models || [],
      builtin: false,
      scope: 'system' as const,
      canManage: isAdmin.value,
      code: p.code || '',
      baseUrl: p.base_url,
      hasKey: p.has_key,
      keyHint: p.key_hint,
      status: p.status ?? 1,
    })),
  {
    name: '', label: '默认提供商',
    sub: wb.runtime.base_url || '（使用 .env 配置的接口地址）',
    models: scopedModels.value.system, builtin: true,
    scope: 'system', canManage: isAdmin.value,
  },
])

const userGroups = computed<ProviderGroup[]>(() => [
  ...(wb.runtime.providers || [])
    .filter((p) => p.scope === 'user')
    .map((p) => ({
      name: p.name,
      label: p.name,
      sub: `${p.base_url}${p.has_key ? ` · 密钥 ${p.key_hint || '已设置'}` : ' · 未设密钥'}`,
      models: p.models || [],
      builtin: false,
      scope: 'user' as const,
      canManage: true,
      code: p.code || '',
      baseUrl: p.base_url,
      hasKey: p.has_key,
      keyHint: p.key_hint,
      status: p.status ?? 1,
    })),
  {
    name: '', label: '默认提供商',
    sub: '私有模型（走 .env 凭据）',
    models: scopedModels.value.user, builtin: true,
    scope: 'user', canManage: true,
  },
])

/** 收起态表：记录「被手动收起」的分组，未记录即展开（新供应商默认展开，符合预期）。
 *  用 Set 而不是逐组布尔字段，是因为分组随 runtime.providers 动态增删。 */
const collapsedProviders = reactive(new Set<string>())
function groupKey(g: ProviderGroup): string {
  return `${g.scope}:${g.name || '__default__'}`
}
function toggleGroup(g: ProviderGroup): void {
  const k = groupKey(g)
  if (collapsedProviders.has(k)) collapsedProviders.delete(k)
  else collapsedProviders.add(k)
}

// ===================== 模型列表（表格管理） =====================
interface ModelRow {
  name: string
  model_type: number
  status: number
  context_length: number | null
  provider_model: string
  description: string
  current: boolean
}

// 按分组构造表格行：从 runtime.providers[].model_meta 取元数据补全
function modelRows(g: ProviderGroup): ModelRow[] {
  const p = (wb.runtime.providers || []).find((x) => x.name === g.name)
  type Meta = { model_type?: number; status?: number; provider_model?: string; context_length?: number | null; description?: string }
  const metaMap = new Map<string, Meta>()
  for (const m of (p?.model_meta || []) as Meta[] & { name: string }[]) {
    metaMap.set((m as unknown as { name: string }).name, m)
  }
  return (g.models || []).map((name) => {
    const meta = metaMap.get(name)
    return {
      name,
      model_type: meta?.model_type ?? 1,
      status: meta?.status ?? 1,
      context_length: meta?.context_length ?? null,
      provider_model: meta?.provider_model || '',
      description: meta?.description || '',
      current: name === wb.runtime.model,
    }
  })
}

// 表格列：模型名 / 类型 / 服务商侧名 / 状态 / 操作
function modelColumns(g: ProviderGroup) {
  return [
    {
      title: '模型名', key: 'name', ellipsis: { tooltip: true },
      render: (row: ModelRow) => {
        const parts: VNodeChild[] = [h('span', { class: 'set-mt-name' }, row.name)]
        if (row.current) parts.push(h(NTag, { size: 'tiny', type: 'success', bordered: false }, { default: () => '当前' }))
        return h('span', { class: 'set-mt-namewrap' }, parts)
      },
    },
    {
      title: '类型', key: 'model_type', width: 88,
      render: (row: ModelRow) =>
        MODEL_TYPE_OPTS.find((o) => o.value === row.model_type)?.label.split(' ')[0] || 'LLM',
    },
    {
      title: '上下文', key: 'context_length', width: 88,
      render: (row: ModelRow) =>
        row.context_length ? `${Math.round(row.context_length / 1024)}K` : '—',
    },
    {
      title: '服务商侧模型名', key: 'provider_model', width: 180, ellipsis: { tooltip: true },
      render: (row: ModelRow) => row.provider_model || '—',
    },
    {
      title: '状态', key: 'status', width: 80,
      render: (row: ModelRow) =>
        h(NTag, { size: 'tiny', type: row.status ? 'success' : 'default', bordered: false },
          { default: () => (row.status ? '上线' : '下线') }),
    },
    {
      title: '操作', key: 'actions', width: 132, align: 'right' as const,
      render: (row: ModelRow) => {
        const btns: VNodeChild[] = []
        if (!row.current) {
          btns.push(h(NButton, {
            size: 'tiny', tertiary: true,
            onClick: () => onModel(row.name),
          }, { default: () => '设为当前' }))
        }
        if (g.canManage) {
          btns.push(h(NButton, {
            size: 'tiny', quaternary: true, circle: true, type: 'error', title: '删除',
            onClick: () => onRemoveModel(row.name, g),
          }, { icon: () => h(Trash2, { size: 13 }) }))
        }
        return h('span', { class: 'set-mt-actions' }, btns)
      },
    },
  ]
}

// ===================== 拉取供应商模型清单（内置清单，勾选批量导入） =====================
const catalogOpen = ref(false)
const catalogLoading = ref(false)
const catalogTarget = ref<ProviderGroup | null>(null)
const catalogModels = ref<CatalogModel[]>([])
const catalogChecked = ref<string[]>([])
const catalogInfo = ref<{ known: boolean; label: string; note?: string; code: string; online?: boolean }>(
  { known: false, label: '', code: '' },
)
const catalogAdding = ref(false)

// 清单表格：已添加项打标并禁止勾选（列上有勾选禁用，避免重复导入）
const catalogColumns = [
  {
    type: 'selection' as const,
    disabled: (row: CatalogModel) => !!row.added,
  },
  {
    title: '模型名', key: 'name', ellipsis: { tooltip: true },
    render: (row: CatalogModel) => {
      const parts: VNodeChild[] = [h('span', null, row.name)]
      if (row.added) {
        parts.push(h(NTag, { size: 'tiny', bordered: false, type: 'default', style: 'margin-left:6px' },
          { default: () => '已添加' }))
      }
      return h('span', { class: 'set-mt-namewrap' }, parts)
    },
  },
  {
    title: '类型', key: 'model_type', width: 96,
    render: (row: CatalogModel) =>
      MODEL_TYPE_OPTS.find((o) => o.value === row.model_type)?.label.split(' ')[0] || 'LLM',
  },
  {
    title: '上下文', key: 'context_length', width: 96,
    render: (row: CatalogModel) =>
      row.context_length ? `${Math.round(row.context_length / 1024)}K` : '—',
  },
  { title: '说明', key: 'description', ellipsis: { tooltip: true } },
]

async function openCatalog(g: ProviderGroup): Promise<void> {
  catalogTarget.value = g
  catalogOpen.value = true
  catalogLoading.value = true
  catalogChecked.value = []
  catalogModels.value = []
  try {
    // 对已有 base_url 的供应商默认联网拉取：内置清单必然滞后，且自建/中转
    // 端点根本不在收录范围，不联网就是「一个模型都拉不到」。
    const cat = await fetchCatalog(g.code || '', g.name, g.scope, true)
    if (!cat) {
      catalogInfo.value = { known: false, label: '', code: '', note: '拉取失败，请重试或手动添加' }
      return
    }
    catalogModels.value = cat.models || []
    // 已添加项置灰但仍展示，让用户看到「确实拉到了，只是都加过了」
    catalogChecked.value = []
    catalogInfo.value = {
      known: cat.known, label: cat.label || '', code: cat.code || '',
      online: !!cat.online,
      note: cat.note
        || (cat.known && !catalogModels.value.length ? '该供应商的模型都已添加' : ''),
    }
  } finally {
    catalogLoading.value = false
  }
}

/** 在「拉取模型」弹窗里重新拉取（内置/联网可切换，联网失败时可换用手动）。 */
async function reloadCatalog(online: boolean): Promise<void> {
  const g = catalogTarget.value
  if (!g) return
  catalogLoading.value = true
  try {
    const cat = await fetchCatalog(g.code || '', g.name, g.scope, online)
    if (!cat) {
      catalogInfo.value = { ...catalogInfo.value, note: '拉取失败，请重试' }
      return
    }
    catalogModels.value = cat.models || []
    catalogChecked.value = catalogChecked.value.filter((n) => !(cat.models || []).find((m) => m.name === n)?.added)
    catalogInfo.value = {
      known: cat.known, label: cat.label || '', code: cat.code || '',
      online: !!cat.online,
      note: cat.note || (cat.known && !catalogModels.value.length ? '该供应商的模型都已添加' : ''),
    }
  } finally {
    catalogLoading.value = false
  }
}

async function submitCatalog(): Promise<void> {
  const g = catalogTarget.value
  if (!g || !catalogChecked.value.length) {
    message.warning('请先勾选要添加的模型')
    return
  }
  const picked = new Set(catalogChecked.value)
  const items = catalogModels.value
    .filter((m) => picked.has(m.name) && !m.added)   // 已添加项禁勾，双保险
    .map((m) => ({
      name: m.name, model_type: m.model_type,
      context_length: m.context_length ?? null, description: m.description || '',
    }))
  catalogAdding.value = true
  try {
    await addModelsBatch(items, g.name, g.scope)
    catalogOpen.value = false
  } finally {
    catalogAdding.value = false
  }
}

// 每个分组的「添加模型」输入框内容（key 带 scope 防串）
const groupInputs = reactive<Record<string, string>>({})
// 模型类型选项（对齐模型库 model_type：1LLM 2向量 3多模态）
const MODEL_TYPE_OPTS = [
  { label: '语言模型 LLM', value: 1 },
  { label: '向量模型 Embedding', value: 2 },
  { label: '多模态', value: 3 },
]
function gKey(g: ProviderGroup): string {
  return `${g.scope}:${g.name}`
}
// 手动添加模型：仅用默认元数据（类型 LLM / 上线），provider_model 回填同名，
// 后续需要调类型或上下文时可在列表中修改（避免表单越堆越复杂）。
async function onAddModelTo(group: ProviderGroup): Promise<void> {
  const k = gKey(group)
  const name = (groupInputs[k] || '').trim()
  if (!name) {
    message.warning('请输入模型名称')
    return
  }
  if (await addModel(name, group.name, group.scope, {
    model_type: 1, provider_model: name,
  })) {
    groupInputs[k] = ''
  }
}
function onRemoveModel(m: string, group: ProviderGroup): void {
  dialog.warning({
    title: '删除模型',
    content: `确定从 ${group.label}（${group.scope === 'system' ? '系统' : '我的'}）删除 ${m} 吗？`,
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: () => removeModel(m, group.name, group.scope),
  })
}
function onRemoveProvider(group: ProviderGroup): void {
  dialog.warning({
    title: '删除提供商',
    content: `删除 ${group.label} 将同时移除其下 ${group.models.length} 个模型，确定吗？`,
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: () => removeProvider(group.name, group.scope),
  })
}

// ===================== 「添加供应商」弹框（两步式：基本信息 → 勾选模型） =====================
// 表单用一行一个供应商的草稿数组：一次弹框里可以连续录入多家，
// 保存时走 /api/runtime/providers/batch 原子提交，避免「加了一半」。
interface ProviderDraft {
  name: string
  baseUrl: string
  apiKey: string
  code: string
}
const providerModal = ref(false)
const providerStep = ref<1 | 2>(1)
const providerDrafts = ref<ProviderDraft[]>([emptyDraft()])
const providerScope = ref<'system' | 'user'>('user')
const savingProviders = ref(false)
// 第 2 步：按供应商 code 拉到的可选模型清单，草稿下标 → { code, models, checked, loading, note }
interface FetchSlot {
  code: string
  models: CatalogModel[]
  checked: string[]
  loading: boolean
  note: string
  known: boolean
}
const fetchSlots = reactive<Record<number, FetchSlot>>({})

function emptyDraft(): ProviderDraft {
  return { name: '', baseUrl: '', apiKey: '', code: '' }
}
function openProviderModal(): void {
  providerStep.value = 1
  providerDrafts.value = [emptyDraft()]
  providerScope.value = 'user'
  for (const k of Object.keys(fetchSlots)) delete fetchSlots[Number(k)]
  providerModal.value = true
}
function addDraftRow(): void {
  providerDrafts.value.push(emptyDraft())
}
function removeDraftRow(i: number): void {
  if (providerDrafts.value.length <= 1) return
  providerDrafts.value.splice(i, 1)
  // 下拉滑移：删行后把后续槽位整体前移，否则勾选状态会错位到别人身上
  const shifted: Record<number, FetchSlot> = {}
  for (const [k, v] of Object.entries(fetchSlots)) {
    const n = Number(k)
    if (n < i) shifted[n] = v
    else if (n > i) shifted[n - 1] = v
  }
  for (const k of Object.keys(fetchSlots)) delete fetchSlots[Number(k)]
  Object.assign(fetchSlots, shifted)
}
/** 在弹框里就地选中内置供应商：预填名称与地址，并记下 code 供第 2 步拉模型。 */
function pickCatalogProvider(i: number, code: string | null): void {
  const d = providerDrafts.value[i]
  const p = catalogProviders.value.find((x) => x.code === code)
  if (!d || !p) return
  d.code = p.code
  if (!d.name.trim()) d.name = p.label
  if (!d.baseUrl.trim()) d.baseUrl = p.base_url
}
/** 第 2 步：拉取该草稿对应供应商的可选模型。
 *  供应商尚未入库，因此这里不能按 provider 查权限，直接用草稿里的
 *  base_url/api_key 联网拉 /models；失败再回退内置清单（按 code 命中）。 */
async function loadDraftCatalog(i: number): Promise<void> {
  const d = providerDrafts.value[i]
  if (!d) return
  const slot: FetchSlot = { code: d.code, models: [], checked: [], loading: true, note: '', known: false }
  fetchSlots[i] = slot
  // 后端在 provider 为空时只走内置清单；这里手动带上 code 让其命中内置项，
  // 联网能力由 online=1 + 已保存的 base_url 提供（未保存的走 draft 参数）。
  const cat = await fetchCatalog(d.code, '', providerScope.value, true, d.baseUrl, d.apiKey)
  slot.loading = false
  if (!cat) {
    slot.note = '拉取失败，可在第 1 步手动输入模型名，或稍后重试'
    return
  }
  slot.models = cat.models || []
  slot.known = !!cat.known
  slot.note = cat.note
    || (!d.code && !d.baseUrl ? '未选择内置供应商，无法拉取清单，请手动添加模型'
      : cat.known && !slot.models.length ? '该供应商的模型都已添加' : '')
  // 默认全不勾，让用户明确选择；已添加项在表格里禁用
  slot.checked = []
}
function toggleSlotAll(i: number): void {
  const s = fetchSlots[i]
  if (!s) return
  s.checked = s.checked.length === s.models.length ? [] : s.models.map((m) => m.name)
}
// 每一步的必填校验：第 1 步只校验名称与地址
const stepOneValid = computed(() =>
  providerDrafts.value.length > 0
  && providerDrafts.value.every((d) => d.name.trim() && d.baseUrl.trim().startsWith('http')),
)
const stepOneError = computed(() => {
  if (!providerDrafts.value.length) return '至少需要一个供应商'
  for (const [i, d] of providerDrafts.value.entries()) {
    if (!d.name.trim()) return `第 ${i + 1} 行：供应商名称不能为空`
    if (d.name.trim().toLowerCase() === 'default') return 'default 为内置默认提供商，请换一个名称'
    const u = d.baseUrl.trim()
    if (!u) return `第 ${i + 1} 行：接口地址不能为空`
    if (!u.toLowerCase().startsWith('http://') && !u.toLowerCase().startsWith('https://')) {
      return `第 ${i + 1} 行：接口地址需以 http:// 或 https:// 开头`
    }
  }
  return ''
})
function gotoStep2(): void {
  if (stepOneError.value) {
    message.warning(stepOneError.value)
    return
  }
  providerStep.value = 2
  // 进入第 2 步即并行拉取各家的模型清单（有 code 才有意义）
  providerDrafts.value.forEach((d, i) => {
    if (d.code.trim()) void loadDraftCatalog(i)
    else fetchSlots[i] = { code: '', models: [], checked: [], loading: false, known: false, note: '未选择内置供应商，可在下方手动输入模型名' }
  })
}
async function submitProviders(): Promise<void> {
  // 先创建供应商，再逐个把勾选的模型挂上去
  const items: ProviderInput[] = providerDrafts.value.map((d) => ({
    name: d.name.trim(),
    baseUrl: d.baseUrl.trim(),
    apiKey: d.apiKey.trim(),
    code: d.code.trim(),
    status: 1,
  }))
  savingProviders.value = true
  try {
    const r = await addProvidersBatch(items)
    if (!r.ok) {
      message.error(r.error || '添加供应商失败')
      return
    }
    // 供应商建好后，逐家写入勾选的模型（沿用已有的批量模型接口，按名字挂到该供应商下）
    let modelTotal = 0
    for (const [i, d] of providerDrafts.value.entries()) {
      const slot = fetchSlots[i]
      if (!slot || !slot.checked.length) continue
      const picked = new Set(slot.checked)
      const rows = slot.models
        .filter((m) => picked.has(m.name))
        .map((m) => ({
          name: m.name, model_type: m.model_type,
          context_length: m.context_length ?? null, description: m.description || '',
        }))
      if (rows.length) {
        await addModelsBatch(rows, d.name.trim(), providerScope.value)
        modelTotal += rows.length
      }
    }
    message.success(
      modelTotal
        ? `已添加 ${r.added.length} 个供应商、${modelTotal} 个模型`
        : `已添加 ${r.added.length} 个供应商`,
    )
    providerModal.value = false
  } finally {
    savingProviders.value = false
  }
}


const catalogProviders = ref<CatalogProvider[]>([])
const catalogProviderOpts = computed(() =>
  catalogProviders.value.map((p) => ({
    label: `${p.label}（${p.code}，${p.model_count} 个模型）`,
    value: p.code,
  })),
)

// ===================== 模型调用统计（对齐模型库 ai_model_call_log） =====================
interface CallStat {
  model: string; provider: string; calls: number; ok_calls: number
  success_rate: number; avg_ms: number; total_tokens: number
  estimated_calls: number; total_cost: number
}
const callStats = ref<CallStat[]>([])
const loadingStats = ref(false)
const statsDays = ref(7)
const statsLoaded = ref(false)
async function loadCallStats(): Promise<void> {
  loadingStats.value = true
  try {
    const r = await api.get<{ ok: boolean; days: number; stats: CallStat[] }>(
      `/api/runtime/model-calls?days=${statsDays.value}`,
    )
    if (r && r.ok) {
      callStats.value = r.stats || []
      statsLoaded.value = true
    }
  } finally {
    loadingStats.value = false
  }
}

// ===================== 用户管理（admin 专属，#69） =====================
const newUname = ref('')
const newUpwd = ref('')
const newUrole = ref<'admin' | 'user'>('user')
const creatingUser = ref(false)
async function submitUser(): Promise<void> {
  if (!newUname.value.trim() || !newUpwd.value) {
    message.warning('用户名与密码不能为空')
    return
  }
  creatingUser.value = true
  try {
    if (await createUser(newUname.value.trim(), newUpwd.value, newUrole.value)) {
      newUname.value = ''
      newUpwd.value = ''
      newUrole.value = 'user'
    }
  } finally {
    creatingUser.value = false
  }
}
function onRemoveUser(u: string): void {
  dialog.warning({
    title: '删除用户',
    content: `删除用户 ${u} 后其将无法登录，确定吗？`,
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: () => deleteUser(u),
  })
}

async function onModel(v: string): Promise<void> {
  if (v && v !== wb.runtime.model) await setModel(v)
}

async function refresh(): Promise<void> {
  await Promise.all([loadRuntime(), isAdmin.value ? loadUsers() : Promise.resolve()])
  message.success('已刷新')
}

function onLogout(): void {
  dialog.warning({
    title: '退出登录',
    content: '确定要退出当前账号吗？',
    positiveText: '退出',
    negativeText: '取消',
    onPositiveClick: async () => {
      await doLogout()
      router.replace('/login')
    },
  })
}

onMounted(() => {
  void loadRuntime()
  void loadCallStats()
  void loadCatalogProviders().then((list) => { catalogProviders.value = list })
  if (isAdmin.value) void loadUsers()
})
</script>

<template>
  <div class="page set-page">
    <div class="page-head">
      <div class="page-title">
        <Settings :size="20" />
        <h1>设置</h1>
      </div>
      <div class="page-actions">
        <NButton @click="refresh">
          <template #icon><RefreshCw :size="15" /></template>
          刷新
        </NButton>
      </div>
    </div>

    <div class="page-body">
      <div class="set-grid">
        <NCard size="small" title="模型管理" class="set-span-all">
          <div class="set-body set-body-flat">
            <div class="set-row">
              <span class="set-label">当前模型</span>
              <span class="set-val">
                <NSelect
                  class="set-select"
                  :value="wb.runtime.model"
                  :options="modelOptions"
                  :consistent-menu-width="false"
                  placeholder="选择模型"
                  @update:value="onModel"
                />
              </span>
            </div>

            <!-- 添加供应商：弹框两步式（基本信息 → 勾选模型） -->
            <div class="set-row">
              <span class="set-label">模型供应商</span>
              <span class="set-val set-val-inline">
                <NButton size="small" secondary @click="openProviderModal">
                  <template #icon><Plus :size="14" /></template>
                  添加模型供应商
                </NButton>
                <span class="muted tiny">
                  添加后可展开查看其下模型，并在下方「拉取模型」勾选导入
                </span>
              </span>
            </div>

            <!-- 系统模型（#67：admin 管理，全员可用） -->
            <div class="set-scope-head">
              <span class="set-scope-title"><Globe :size="13" /> 系统模型</span>
              <span class="muted tiny">{{ isAdmin ? '全员可见，管理员可修改' : '全员可见，仅管理员可修改' }}</span>
            </div>
            <ProviderCard
              v-for="g in systemGroups" :key="'sys-' + (g.name || '__default__')" :g="g"
              :collapsed="collapsedProviders.has(groupKey(g))"
              :rows="modelRows(g)" :columns="modelColumns(g)"
              :add-input="groupInputs[gKey(g)] || ''"
              @toggle="toggleGroup(g)" @catalog="openCatalog" @add-model="onAddModelTo"
              @remove-provider="onRemoveProvider"
              @update-add-input="(v: string) => (groupInputs[gKey(g)] = v)"
            />

            <!-- 我的模型（私有，#67） -->
            <div class="set-scope-head">
              <span class="set-scope-title"><Lock :size="13" /> 我的模型</span>
              <span class="muted tiny">仅自己可见与使用</span>
            </div>
            <ProviderCard
              v-for="g in userGroups" :key="'usr-' + (g.name || '__default__')" :g="g"
              :collapsed="collapsedProviders.has(groupKey(g))"
              :rows="modelRows(g)" :columns="modelColumns(g)"
              :add-input="groupInputs[gKey(g)] || ''"
              @toggle="toggleGroup(g)" @catalog="openCatalog" @add-model="onAddModelTo"
              @remove-provider="onRemoveProvider"
              @update-add-input="(v: string) => (groupInputs[gKey(g)] = v)"
            />
          </div>
        </NCard>
        <!-- 添加模型供应商：两步式弹框（第 1 步基本信息，第 2 步勾选模型） -->
        <NModal
          v-model:show="providerModal"
          preset="card"
          class="set-provider-modal"
          :title="providerStep === 1 ? '添加模型供应商 · 基本信息' : '添加模型供应商 · 选择模型'"
          :style="{ width: '760px', maxWidth: '94vw' }"
        >
          <!-- 步骤指示 -->
          <div class="set-steps">
            <span class="set-step" :class="{ on: providerStep === 1 }">
              <b>1</b> 基本信息
            </span>
            <span class="set-step-line" />
            <span class="set-step" :class="{ on: providerStep === 2 }">
              <b>2</b> 勾选模型（可跳过）
            </span>
          </div>

          <!-- 第 1 步：名称 / 地址前缀 / sk / 内置供应商 -->
          <template v-if="providerStep === 1">
            <div v-for="(d, i) in providerDrafts" :key="i" class="set-pd-row">
              <div class="set-pd-fields">
                <NSelect
                  v-model:value="d.code" class="set-pd-field" size="small" clearable filterable
                  :options="catalogProviderOpts" placeholder="内置供应商（可选，便于一键拉取模型）"
                  @update:value="(c: string | null) => pickCatalogProvider(i, c)"
                />
                <NInput v-model:value="d.name" class="set-pd-field" size="small" placeholder="供应商名称，如 DeepSeek" />
                <NInput v-model:value="d.baseUrl" class="set-pd-field set-pd-wide" size="small" placeholder="地址前缀 https://api.deepseek.com/v1" />
                <NInput v-model:value="d.apiKey" class="set-pd-field" size="small" type="password" show-password-on="click" placeholder="sk（API Key，可选）" />
              </div>
              <NButton
                v-if="providerDrafts.length > 1"
                quaternary circle size="tiny" type="error" title="移除该行"
                @click="removeDraftRow(i)"
              >
                <template #icon><X :size="12" /></template>
              </NButton>
              <NButton
                v-if="d.code"
                size="tiny" secondary class="set-pd-fetch"
                @click="loadDraftCatalog(i)"
              >
                <template #icon><DownloadCloud :size="13" /></template>
                一键拉取
              </NButton>
            </div>
            <div class="set-pd-foot">
              <NButton size="tiny" tertiary @click="addDraftRow">
                <template #icon><Plus :size="13" /></template>
                再加一个供应商
              </NButton>
              <span v-if="stepOneError" class="set-pd-err muted tiny">{{ stepOneError }}</span>
            </div>
            <div v-if="isAdmin" class="set-pd-scope">
              <span class="muted tiny">归属</span>
              <NRadioGroup v-model:value="providerScope" size="small">
                <NRadioButton value="user">仅我自己</NRadioButton>
                <NRadioButton value="system">系统共享</NRadioButton>
              </NRadioGroup>
            </div>
          </template>

          <!-- 第 2 步：每个供应商一张勾选表 -->
          <template v-else>
            <div v-for="(d, i) in providerDrafts" :key="i" class="set-pd-cat">
              <div class="set-pd-cat-head">
                <span class="set-pd-cat-name">{{ d.name || `第 ${i + 1} 个供应商` }}</span>
                <NTag v-if="d.code" size="tiny" :bordered="false" type="info">{{ d.code }}</NTag>
                <span class="grow" />
                <span class="muted tiny">
                  已选 {{ fetchSlots[i]?.checked.length || 0 }} / 可选 {{ fetchSlots[i]?.models.length || 0 }}
                </span>
                <NButton
                  size="tiny" quaternary
                  :disabled="!fetchSlots[i]?.models.length"
                  @click="toggleSlotAll(i)"
                >
                  {{ fetchSlots[i]?.checked.length === fetchSlots[i]?.models.length && fetchSlots[i]?.models.length ? '取消全选' : '全选' }}
                </NButton>
                <NButton v-if="d.code" size="tiny" quaternary @click="loadDraftCatalog(i)">重新拉取</NButton>
              </div>
              <NAlert v-if="fetchSlots[i]?.note" type="info" :bordered="false" class="set-pd-cat-note">
                {{ fetchSlots[i]?.note }}
              </NAlert>
              <NSpin :show="!!fetchSlots[i]?.loading">
                <NDataTable
                  v-if="fetchSlots[i]?.models.length"
                  size="small"
                  :bordered="false"
                  :row-key="(r: CatalogModel) => r.name"
                  :columns="catalogColumns"
                  :data="fetchSlots[i].models"
                  :checked-row-keys="fetchSlots[i].checked"
                  :max-height="220"
                  @update:checked-row-keys="(keys: (string | number)[]) => { if (fetchSlots[i]) fetchSlots[i].checked = keys.map(String) }"
                />
                <NEmpty v-else-if="!fetchSlots[i]?.loading" size="small" description="没有可添加的模型" />
                <div v-else class="set-catalog-loading muted tiny">正在读取清单…</div>
              </NSpin>
            </div>
          </template>

          <template #footer>
            <div class="set-catalog-foot">
              <span class="muted tiny">
                模型可稍后在列表里继续添加；跳过勾选也能先建好供应商。
              </span>
              <NSpace>
                <NButton v-if="providerStep === 2" size="small" @click="providerStep = 1">上一步</NButton>
                <NButton size="small" @click="providerModal = false">取消</NButton>
                <NButton
                  v-if="providerStep === 1"
                  size="small" type="primary"
                  @click="gotoStep2"
                >
                  下一步：选择模型
                </NButton>
                <NButton
                  v-else
                  size="small" type="primary"
                  :loading="savingProviders"
                  @click="submitProviders"
                >
                  保存（{{ providerDrafts.length }} 个供应商）
                </NButton>
              </NSpace>
            </div>
          </template>
        </NModal>

        <!-- 拉取供应商模型清单：勾选批量导入 -->
        <NModal
          v-model:show="catalogOpen"
          preset="card"
          class="set-catalog-modal"
          :title="`拉取模型 · ${catalogTarget?.label || ''}`"
          :style="{ width: '720px', maxWidth: '94vw' }"
        >
          <div class="set-catalog-head">
            <span class="muted tiny">
              供应商 <b>{{ catalogInfo.label || '未识别' }}</b>
              <template v-if="catalogInfo.code">（code: {{ catalogInfo.code }}）</template>
              <NTag
                v-if="catalogInfo.online" size="tiny" :bordered="false" type="success"
                style="margin-left:6px"
              >联网拉取</NTag>
              <NTag
                v-else size="tiny" :bordered="false" type="default"
                style="margin-left:6px"
              >内置清单</NTag>
            </span>
            <span class="set-catalog-count muted tiny">
              已选 {{ catalogChecked.length }} / 共 {{ catalogModels.length }}
            </span>
          </div>
          <NAlert v-if="catalogInfo.note" type="warning" :bordered="false" class="set-catalog-alert">
            {{ catalogInfo.note }}
          </NAlert>
          <!-- 联网/内置两种口径可切换：联网失败或想核对线上真实模型时用得上 -->
          <div class="set-catalog-tools">
            <NButton size="tiny" secondary :loading="catalogLoading" @click="reloadCatalog(true)">
              <template #icon><DownloadCloud :size="12" /></template>
              联网拉取
            </NButton>
            <NButton size="tiny" quaternary :loading="catalogLoading" @click="reloadCatalog(false)">
              用内置清单
            </NButton>
          </div>
          <NSpin :show="catalogLoading">
            <NDataTable
              v-if="catalogModels.length"
              size="small"
              :bordered="false"
              :row-key="(r: CatalogModel) => r.name"
              :columns="catalogColumns"
              :data="catalogModels"
              :checked-row-keys="catalogChecked"
              :max-height="380"
              @update:checked-row-keys="(keys: (string | number)[]) => catalogChecked = keys.map(String)"
            />
            <NEmpty v-else-if="!catalogLoading" size="small" description="没有可添加的模型" />
            <div v-else class="set-catalog-loading muted tiny">正在读取清单…</div>
          </NSpin>
          <template #footer>
            <div class="set-catalog-foot">
              <span class="muted tiny">
                勾选后点击「添加」批量导入；标「已添加」的不可重复导入，也可直接手输模型名。
              </span>
              <NSpace>
                <NButton
                  size="small" quaternary
                  :disabled="!catalogModels.length"
                  @click="catalogChecked = catalogChecked.length === catalogModels.length
                    ? [] : catalogModels.map((m) => m.name)"
                >
                  {{ catalogChecked.length === catalogModels.length && catalogModels.length ? '取消全选' : '全选' }}
                </NButton>
                <NButton size="small" @click="catalogOpen = false">取消</NButton>
                <NButton
                  size="small" type="primary"
                  :loading="catalogAdding"
                  :disabled="!catalogChecked.length"
                  @click="submitCatalog"
                >
                  添加 {{ catalogChecked.length ? `(${catalogChecked.length})` : '' }}
                </NButton>
              </NSpace>
            </div>
          </template>
        </NModal>

        <!-- 模型调用统计（对齐模型库 ai_model_call_log） -->
        <NCard size="small" title="模型调用统计">
          <div class="set-body set-body-flat">
            <div class="set-row">
              <span class="set-label"><BarChart3 :size="14" /> 统计区间</span>
              <span class="set-val set-val-inline">
                <NSelect
                  v-model:value="statsDays" class="set-adv-field" size="small"
                  :options="[{label:'近 7 天',value:7},{label:'近 30 天',value:30},{label:'近 90 天',value:90}]"
                  @update:value="loadCallStats"
                />
                <NButton size="small" quaternary :loading="loadingStats" @click="loadCallStats">
                  <template #icon><RefreshCw :size="14" /></template>
                  刷新
                </NButton>
              </span>
            </div>
            <div v-if="callStats.length" class="stat-table-wrap">
              <table class="stat-table">
                <thead>
                  <tr>
                    <th>模型</th><th>提供商</th><th>调用</th><th>成功率</th>
                    <th>平均耗时</th><th>Token</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="s in callStats" :key="s.model + '|' + s.provider">
                    <td class="stat-model">{{ s.model }}</td>
                    <td class="muted">{{ s.provider || '默认' }}</td>
                    <td>{{ s.calls }}</td>
                    <td :class="{ 'stat-bad': s.success_rate < 90 }">{{ s.success_rate }}%</td>
                    <td>{{ s.avg_ms }} ms</td>
                    <td>
                      {{ s.total_tokens }}
                      <span v-if="s.estimated_calls" class="stat-est" :title="`${s.estimated_calls} 次为估算值（服务商未返回 usage）`">≈</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <NEmpty v-else size="small" description="所选区间内暂无调用记录" />
            <div v-if="callStats.some(s => s.estimated_calls)" class="muted tiny stat-note">
              ≈ 标记表示部分调用的 token 数为估算值（服务商接口未返回 usage 字段）
            </div>
          </div>
        </NCard>

        <!-- 用户管理（admin 专属，#69） -->
        <NCard v-if="isAdmin" size="small" title="用户管理">
          <div class="set-body set-body-flat">
            <div class="set-row set-row-top">
              <span class="set-label"><Plus :size="14" /> 新建用户</span>
              <span class="set-val set-val-inline">
                <NInput v-model:value="newUname" class="set-prov-input" size="small" placeholder="用户名（字母/数字/下划线）" :disabled="creatingUser" />
                <NInput v-model:value="newUpwd" class="set-prov-input" size="small" type="password" show-password-on="click" placeholder="密码（≥4 位）" :disabled="creatingUser" @keyup.enter="submitUser" />
                <NSelect
                  v-model:value="newUrole"
                  class="set-role-select" size="small"
                  :options="[{ label: '普通用户', value: 'user' }, { label: '管理员', value: 'admin' }]"
                  :disabled="creatingUser"
                />
                <NButton size="small" type="primary" secondary :loading="creatingUser" @click="submitUser">创建</NButton>
              </span>
            </div>
            <div v-for="u in wb.users" :key="u.username" class="set-row">
              <span class="set-label set-user-label">
                <span class="set-user-name">{{ u.username }}</span>
                <NTag v-if="u.username === authState.username" size="tiny" :bordered="false">我</NTag>
              </span>
              <span class="set-val set-val-inline">
                <NTag size="small" :type="u.role === 'admin' ? 'warning' : 'default'" :bordered="false">
                  {{ u.role === 'admin' ? '管理员' : '普通用户' }}
                </NTag>
                <NButton
                  v-if="u.username !== authState.username"
                  quaternary circle size="tiny" type="error" title="删除用户"
                  @click="onRemoveUser(u.username)"
                >
                  <template #icon><X :size="13" /></template>
                </NButton>
              </span>
            </div>
            <div v-if="!wb.users.length" class="muted tiny set-row">暂无用户记录</div>
          </div>
        </NCard>

        <NCard size="small" title="工具调用权限">
          <div class="set-row">
            <span class="set-label">权限模式</span>
            <span class="set-val set-val-inline">
              <NRadioGroup
                :value="state.mode"
                @update:value="(v: string) => setMode(v as 'auto' | 'confirm')"
              >
                <NRadioButton value="auto">自动执行</NRadioButton>
                <NRadioButton value="confirm">执行前确认</NRadioButton>
              </NRadioGroup>
              <span class="muted tiny">
                {{ state.mode === 'auto' ? '工具将直接执行' : '每次工具调用都会弹出确认' }}
              </span>
            </span>
          </div>
        </NCard>

        <NCard size="small" title="运行时统计">
          <div class="set-body set-body-flat">
            <div class="set-row">
              <span class="set-label"><Cpu :size="14" /> 技能</span>
              <span class="set-val">
                <NTag size="small" :bordered="false">
                  {{ wb.runtime.skills_enabled }} / {{ wb.runtime.skills_total }} 已启用
                </NTag>
              </span>
            </div>
            <div class="set-row">
              <span class="set-label"><Database :size="14" /> 数据</span>
              <span class="set-val">
                <NTag size="small" :bordered="false">会话 {{ wb.runtime.conv_count }}</NTag>
                <NTag size="small" :bordered="false" class="ml-6">项目 {{ wb.runtime.project_count }}</NTag>
                <NTag size="small" :bordered="false" class="ml-6">自动化 {{ wb.runtime.automation_count }}</NTag>
                <NTag size="small" :bordered="false" class="ml-6">资料 {{ wb.runtime.library_count }}</NTag>
              </span>
            </div>
            <div class="set-row">
              <span class="set-label"><ShieldCheck :size="14" /> 登录认证</span>
              <span class="set-val">
                <NTag size="small" :bordered="false" :type="authState.enabled ? 'success' : 'default'">
                  {{ authState.enabled ? '已启用' : '未启用' }}
                </NTag>
                <span v-if="authState.enabled" class="muted tiny ml-8">
                  当前用户：{{ authState.username }}
                </span>
              </span>
            </div>
          </div>
        </NCard>

        <NCard v-if="authState.enabled" size="small" title="账号">
          <NButton type="error" ghost @click="onLogout">
            <template #icon><LogOut :size="15" /></template>
            退出登录
          </NButton>
        </NCard>
      </div>
    </div>
  </div>
</template>
