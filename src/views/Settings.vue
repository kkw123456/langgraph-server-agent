<script setup lang="ts">
// 设置页：模型管理（系统模型 / 我的模型 分级）、用户管理（admin）、
// 运行时信息、工具权限模式、退出登录。
import { onMounted, ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {
  NCard, NRadioGroup, NRadioButton, NSelect, NButton, NTag, NInput, NEmpty, useMessage, useDialog,
} from 'naive-ui'
import { Settings, Settings2, LogOut, RefreshCw, Cpu, ShieldCheck, Database, Check, X, Plus, Server, Users, Lock, Globe, BarChart3 } from 'lucide-vue-next'
import { state, setMode } from '../store'
import {
  wb, loadRuntime, setModel, addModel, removeModel, addProvider, removeProvider,
  loadUsers, createUser, deleteUser,
} from '../workbench'
import { authState, logout as doLogout } from '../auth'
import { api } from '../api'

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
interface ProviderGroup {
  name: string; label: string; sub: string; models: string[]
  builtin: boolean; scope: 'system' | 'user'; canManage: boolean
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
  {
    name: '', label: '默认提供商',
    sub: wb.runtime.base_url || '（使用 .env 配置的接口地址）',
    models: scopedModels.value.system, builtin: true,
    scope: 'system', canManage: isAdmin.value,
  },
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
    })),
])

const userGroups = computed<ProviderGroup[]>(() => [
  {
    name: '', label: '默认提供商',
    sub: '私有模型（走 .env 凭据）',
    models: scopedModels.value.user, builtin: true,
    scope: 'user', canManage: true,
  },
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
    })),
])

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
// 「高级选项」：模型元数据（类型/上下文/描述/服务商侧模型名）——展开时才提交
const showModelAdv = reactive<Record<string, boolean>>({})
const modelMeta = reactive<Record<string, {
  model_type: number; context_length: string; description: string; provider_model: string
}>>({})
function advKey(g: ProviderGroup): string {
  return `adv:${g.scope}:${g.name}`
}
function metaOf(g: ProviderGroup) {
  const k = gKey(g)
  if (!modelMeta[k]) {
    modelMeta[k] = { model_type: 1, context_length: '', description: '', provider_model: '' }
  }
  return modelMeta[k]
}
function toggleAdv(g: ProviderGroup): void {
  const k = advKey(g)
  showModelAdv[k] = !showModelAdv[k]
}
async function onAddModelTo(group: ProviderGroup): Promise<void> {
  const k = gKey(group)
  const name = (groupInputs[k] || '').trim()
  if (!name) {
    message.warning('请输入模型名称')
    return
  }
  const m = metaOf(group)
  const ctx = m.context_length.trim() ? Number(m.context_length) : null
  if (ctx !== null && (!Number.isFinite(ctx) || ctx <= 0)) {
    message.warning('上下文窗口需为正整数，或留空')
    return
  }
  const meta = showModelAdv[advKey(group)]
    ? {
        model_type: m.model_type,
        context_length: ctx,
        description: m.description.trim(),
        provider_model: m.provider_model.trim(),
      }
    : undefined
  if (await addModel(name, group.name, group.scope, meta)) {
    groupInputs[k] = ''
    // 添加成功后重置高级选项，避免污染下一个模型
    modelMeta[k] = { model_type: 1, context_length: '', description: '', provider_model: '' }
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

// 「添加提供商」表单（admin 可选系统级）
const showProviderForm = ref(false)
const pName = ref('')
const pUrl = ref('')
const pKey = ref('')
const pCode = ref('')
const pScope = ref<'system' | 'user'>('user')
const addingProvider = ref(false)
async function submitProvider(): Promise<void> {
  const name = pName.value.trim()
  const url = pUrl.value.trim()
  if (!name || !url) {
    message.warning('提供商名称与接口地址不能为空')
    return
  }
  addingProvider.value = true
  try {
    if (await addProvider(name, url, pKey.value, pScope.value, pCode.value)) {
      pName.value = ''
      pUrl.value = ''
      pKey.value = ''
      pCode.value = ''
      showProviderForm.value = false
    }
  } finally {
    addingProvider.value = false
  }
}

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
  if (isAdmin.value) void loadUsers()
})
</script>

<template>
  <div class="page">
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
      <div class="set-body">
        <NCard size="small" title="模型管理">
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

            <!-- 添加提供商（折叠表单；admin 可选系统级） -->
            <div class="set-row set-row-top">
              <span class="set-label">模型提供商</span>
              <span class="set-val set-val-inline">
                <NButton v-if="!showProviderForm" size="small" secondary @click="showProviderForm = true">
                  <template #icon><Plus :size="14" /></template>
                  添加提供商
                </NButton>
                <template v-else>
                  <NInput v-model:value="pName" class="set-prov-input" size="small" placeholder="名称，如 DeepSeek" :disabled="addingProvider" />
                  <NInput v-model:value="pCode" class="set-prov-input" size="small" placeholder="编码（可选）deepseek" :disabled="addingProvider" />
                  <NInput v-model:value="pUrl" class="set-prov-input set-prov-url" size="small" placeholder="接口地址 https://…" :disabled="addingProvider" />
                  <NInput v-model:value="pKey" class="set-prov-input" size="small" type="password" show-password-on="click" placeholder="API Key（可选）" :disabled="addingProvider" @keyup.enter="submitProvider" />
                  <NRadioGroup v-if="isAdmin" v-model:value="pScope" size="small">
                    <NRadioButton value="user">仅我自己</NRadioButton>
                    <NRadioButton value="system">系统共享</NRadioButton>
                  </NRadioGroup>
                  <NButton size="small" type="primary" secondary :loading="addingProvider" @click="submitProvider">保存</NButton>
                  <NButton size="small" quaternary @click="showProviderForm = false">取消</NButton>
                </template>
              </span>
            </div>

            <!-- 系统模型（#67：admin 管理，全员可用） -->
            <div class="set-scope-head">
              <span class="set-scope-title"><Globe :size="13" /> 系统模型</span>
              <span class="muted tiny">{{ isAdmin ? '全员可见，管理员可修改' : '全员可见，仅管理员可修改' }}</span>
            </div>
            <template v-for="g in systemGroups" :key="'sys-' + (g.name || '__default__')">
              <div class="set-row set-row-top set-prov-group">
                <span class="set-label set-prov-label">
                  <Server :size="13" />
                  <span class="set-prov-name">{{ g.label }}</span>
                  <span class="set-prov-sub muted">{{ g.sub }}</span>
                  <NButton
                    v-if="!g.builtin && g.canManage"
                    quaternary circle size="tiny" type="error" title="删除提供商"
                    @click="onRemoveProvider(g)"
                  >
                    <template #icon><X :size="12" /></template>
                  </NButton>
                </span>
                <span class="set-val set-model-list">
                  <span v-for="m in g.models" :key="'sys-' + g.name + m" class="set-model-chip" :class="{ current: m === wb.runtime.model }">
                    <span class="set-model-name">{{ m }}</span>
                    <NTag v-if="m === wb.runtime.model" size="tiny" type="success" :bordered="false">当前</NTag>
                    <NButton quaternary circle size="tiny" class="set-model-btn" title="设为当前" @click="onModel(m)">
                      <template #icon><Check :size="13" /></template>
                    </NButton>
                    <NButton v-if="g.canManage" quaternary circle size="tiny" class="set-model-btn" title="删除" @click="onRemoveModel(m, g)">
                      <template #icon><X :size="13" /></template>
                    </NButton>
                  </span>
                  <span v-if="!g.models.length" class="muted tiny">暂无模型</span>
                  <span v-if="g.canManage" class="set-val-inline set-prov-add">
                    <NInput
                      v-model:value="groupInputs[gKey(g)]"
                      class="set-model-input" size="tiny" placeholder="添加模型名" clearable
                      @keyup.enter="onAddModelTo(g)"
                    />
                    <NButton size="tiny" secondary @click="onAddModelTo(g)">添加</NButton>
                    <NButton size="tiny" quaternary :title="showModelAdv[advKey(g)] ? '收起高级选项' : '高级选项（类型/上下文/描述）'" @click="toggleAdv(g)">
                      <template #icon><Settings2 :size="13" /></template>
                    </NButton>
                  </span>
                </span>
                <div v-if="g.canManage && showModelAdv[advKey(g)]" class="set-model-adv">
                  <NSelect
                    v-model:value="metaOf(g).model_type" class="set-adv-field" size="tiny"
                    :options="MODEL_TYPE_OPTS" placeholder="模型类型"
                  />
                  <NInput
                    v-model:value="metaOf(g).context_length" class="set-adv-field" size="tiny"
                    placeholder="上下文窗口，如 128000"
                  />
                  <NInput
                    v-model:value="metaOf(g).provider_model" class="set-adv-field" size="tiny"
                    placeholder="服务商侧模型名（可选，如 gpt-4o）"
                  />
                  <NInput
                    v-model:value="metaOf(g).description" class="set-adv-field set-adv-wide" size="tiny"
                    placeholder="描述（可选）"
                  />
                </div>
              </div>
            </template>

            <!-- 我的模型（私有，#67） -->
            <div class="set-scope-head">
              <span class="set-scope-title"><Lock :size="13" /> 我的模型</span>
              <span class="muted tiny">仅自己可见与使用</span>
            </div>
            <template v-for="g in userGroups" :key="'usr-' + (g.name || '__default__')">
              <div class="set-row set-row-top set-prov-group">
                <span class="set-label set-prov-label">
                  <Server :size="13" />
                  <span class="set-prov-name">{{ g.label }}</span>
                  <span class="set-prov-sub muted">{{ g.sub }}</span>
                  <NButton
                    v-if="!g.builtin && g.canManage"
                    quaternary circle size="tiny" type="error" title="删除提供商"
                    @click="onRemoveProvider(g)"
                  >
                    <template #icon><X :size="12" /></template>
                  </NButton>
                </span>
                <span class="set-val set-model-list">
                  <span v-for="m in g.models" :key="'usr-' + g.name + m" class="set-model-chip" :class="{ current: m === wb.runtime.model }">
                    <span class="set-model-name">{{ m }}</span>
                    <NTag v-if="m === wb.runtime.model" size="tiny" type="success" :bordered="false">当前</NTag>
                    <NButton quaternary circle size="tiny" class="set-model-btn" title="设为当前" @click="onModel(m)">
                      <template #icon><Check :size="13" /></template>
                    </NButton>
                    <NButton v-if="g.canManage" quaternary circle size="tiny" class="set-model-btn" title="删除" @click="onRemoveModel(m, g)">
                      <template #icon><X :size="13" /></template>
                    </NButton>
                  </span>
                  <span v-if="!g.models.length" class="muted tiny">暂无模型</span>
                  <span v-if="g.canManage" class="set-val-inline set-prov-add">
                    <NInput
                      v-model:value="groupInputs[gKey(g)]"
                      class="set-model-input" size="tiny" placeholder="添加模型名" clearable
                      @keyup.enter="onAddModelTo(g)"
                    />
                    <NButton size="tiny" secondary @click="onAddModelTo(g)">添加</NButton>
                    <NButton size="tiny" quaternary :title="showModelAdv[advKey(g)] ? '收起高级选项' : '高级选项（类型/上下文/描述）'" @click="toggleAdv(g)">
                      <template #icon><Settings2 :size="13" /></template>
                    </NButton>
                  </span>
                </span>
                <div v-if="g.canManage && showModelAdv[advKey(g)]" class="set-model-adv">
                  <NSelect
                    v-model:value="metaOf(g).model_type" class="set-adv-field" size="tiny"
                    :options="MODEL_TYPE_OPTS" placeholder="模型类型"
                  />
                  <NInput
                    v-model:value="metaOf(g).context_length" class="set-adv-field" size="tiny"
                    placeholder="上下文窗口，如 128000"
                  />
                  <NInput
                    v-model:value="metaOf(g).provider_model" class="set-adv-field" size="tiny"
                    placeholder="服务商侧模型名（可选，如 gpt-4o）"
                  />
                  <NInput
                    v-model:value="metaOf(g).description" class="set-adv-field set-adv-wide" size="tiny"
                    placeholder="描述（可选）"
                  />
                </div>
              </div>
            </template>
          </div>
        </NCard>

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
