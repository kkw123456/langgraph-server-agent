<script setup lang="ts">
// 设置页：展示运行时信息（模型、推理服务地址、技能与会话统计），
// 提供模型切换、工具权限模式切换、退出登录。
import { onMounted, ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {
  NCard, NRadioGroup, NRadioButton, NSelect, NButton, NTag, NInput, useMessage, useDialog,
} from 'naive-ui'
import { Settings, LogOut, RefreshCw, Cpu, ShieldCheck, Database, Check, X, Plus, Server } from 'lucide-vue-next'
import { state, setMode } from '../store'
import { wb, loadRuntime, setModel, addModel, removeModel, addProvider, removeProvider } from '../workbench'
import { authState, logout as doLogout } from '../auth'
import { api } from '../api'

const message = useMessage()
const dialog = useDialog()
const router = useRouter()

const modelOptions = computed(() => {
  const all = new Set<string>(wb.runtime.models)
  for (const p of wb.runtime.providers || []) for (const m of p.models || []) all.add(m)
  return [...all].filter(Boolean).map((m) => ({ label: m, value: m }))
})

// ===================== 模型管理：提供商分组 / 添加 / 设为当前 / 删除 =====================
interface ProviderGroup { name: string; label: string; sub: string; models: string[]; builtin: boolean }
const providerGroups = computed<ProviderGroup[]>(() => [
  {
    name: '', label: '默认提供商',
    sub: wb.runtime.base_url || '（使用 .env 配置的接口地址）',
    models: wb.runtime.models, builtin: true,
  },
  ...(wb.runtime.providers || []).map((p) => ({
    name: p.name,
    label: p.name,
    sub: `${p.base_url}${p.has_key ? ` · 密钥 ${p.key_hint || '已设置'}` : ' · 未设密钥'}`,
    models: p.models || [],
    builtin: false,
  })),
])

// 每个分组的「添加模型」输入框内容
const groupInputs = reactive<Record<string, string>>({})
async function onAddModelTo(group: ProviderGroup): Promise<void> {
  const name = (groupInputs[group.name] || '').trim()
  if (!name) {
    message.warning('请输入模型名称')
    return
  }
  if (await addModel(name, group.name)) groupInputs[group.name] = ''
}
function onRemoveModel(m: string, group: ProviderGroup): void {
  dialog.warning({
    title: '删除模型',
    content: `确定从 ${group.label} 删除 ${m} 吗？`,
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: () => removeModel(m, group.name),
  })
}
function onRemoveProvider(group: ProviderGroup): void {
  dialog.warning({
    title: '删除提供商',
    content: `删除 ${group.label} 将同时移除其下 ${group.models.length} 个模型，确定吗？`,
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: () => removeProvider(group.name),
  })
}

// 「添加提供商」表单
const showProviderForm = ref(false)
const pName = ref('')
const pUrl = ref('')
const pKey = ref('')
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
    if (await addProvider(name, url, pKey.value)) {
      pName.value = ''
      pUrl.value = ''
      pKey.value = ''
      showProviderForm.value = false
    }
  } finally {
    addingProvider.value = false
  }
}

async function onModel(v: string): Promise<void> {
  if (v && v !== wb.runtime.model) await setModel(v)
}

async function refresh(): Promise<void> {
  await loadRuntime()
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

onMounted(loadRuntime)
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

            <!-- 添加提供商（折叠表单） -->
            <div class="set-row set-row-top">
              <span class="set-label">模型提供商</span>
              <span class="set-val set-val-inline">
                <NButton v-if="!showProviderForm" size="small" secondary @click="showProviderForm = true">
                  <template #icon><Plus :size="14" /></template>
                  添加提供商
                </NButton>
                <template v-else>
                  <NInput v-model:value="pName" class="set-prov-input" size="small" placeholder="名称，如 DeepSeek" :disabled="addingProvider" />
                  <NInput v-model:value="pUrl" class="set-prov-input set-prov-url" size="small" placeholder="接口地址 https://…" :disabled="addingProvider" />
                  <NInput v-model:value="pKey" class="set-prov-input" size="small" type="password" show-password-on="click" placeholder="API Key（可选）" :disabled="addingProvider" @keyup.enter="submitProvider" />
                  <NButton size="small" type="primary" secondary :loading="addingProvider" @click="submitProvider">保存</NButton>
                  <NButton size="small" quaternary @click="showProviderForm = false">取消</NButton>
                </template>
              </span>
            </div>

            <!-- 各提供商分组：模型 chips + 组内添加/删除 -->
            <div v-for="g in providerGroups" :key="g.name || '__default__'" class="set-row set-row-top set-prov-group">
              <span class="set-label set-prov-label">
                <Server :size="13" />
                <span class="set-prov-name">{{ g.label }}</span>
                <span class="set-prov-sub muted">{{ g.sub }}</span>
                <NButton
                  v-if="!g.builtin"
                  quaternary
                  circle
                  size="tiny"
                  type="error"
                  title="删除提供商"
                  @click="onRemoveProvider(g)"
                >
                  <template #icon><X :size="12" /></template>
                </NButton>
              </span>
              <span class="set-val set-model-list">
                <span
                  v-for="m in g.models"
                  :key="g.name + m"
                  class="set-model-chip"
                  :class="{ current: m === wb.runtime.model }"
                >
                  <span class="set-model-name">{{ m }}</span>
                  <NTag v-if="m === wb.runtime.model" size="tiny" type="success" :bordered="false">当前</NTag>
                  <NButton quaternary circle size="tiny" class="set-model-btn" title="设为当前" @click="onModel(m)">
                    <template #icon><Check :size="13" /></template>
                  </NButton>
                  <NButton quaternary circle size="tiny" class="set-model-btn" title="删除" @click="onRemoveModel(m, g)">
                    <template #icon><X :size="13" /></template>
                  </NButton>
                </span>
                <span v-if="!g.models.length" class="muted tiny">暂无模型</span>
                <span class="set-val-inline set-prov-add">
                  <NInput
                    v-model:value="groupInputs[g.name]"
                    class="set-model-input"
                    size="tiny"
                    placeholder="添加模型名"
                    clearable
                    @keyup.enter="onAddModelTo(g)"
                  />
                  <NButton size="tiny" secondary @click="onAddModelTo(g)">添加</NButton>
                </span>
              </span>
            </div>
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
