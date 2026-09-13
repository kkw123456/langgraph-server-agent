<script setup lang="ts">
// 设置页：展示运行时信息（模型、推理服务地址、技能与会话统计），
// 提供模型切换、工具权限模式切换、退出登录。
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  NCard, NRadioGroup, NRadioButton, NSelect, NButton, NTag, NInput, useMessage, useDialog,
} from 'naive-ui'
import { Settings, LogOut, RefreshCw, Cpu, ShieldCheck, Database, Check, X } from 'lucide-vue-next'
import { state, setMode } from '../store'
import { wb, loadRuntime, setModel, addModel, removeModel } from '../workbench'
import { authState, logout as doLogout } from '../auth'
import { api } from '../api'
import { computed } from 'vue'

const message = useMessage()
const dialog = useDialog()
const router = useRouter()

const modelOptions = computed(() =>
  wb.runtime.models.map((m) => ({ label: m, value: m })),
)

async function onModel(v: string): Promise<void> {
  if (v && v !== wb.runtime.model) await setModel(v)
}

// ===================== 模型管理：添加 / 设为当前 / 删除 =====================
const newModel = ref('')
const adding = ref(false)
async function onAddModel(): Promise<void> {
  const name = newModel.value.trim()
  if (!name) {
    message.warning('请输入模型名称')
    return
  }
  adding.value = true
  try {
    const ok = await addModel(name)
    if (ok) newModel.value = ''
  } finally {
    adding.value = false
  }
}
function onRemoveModel(m: string): void {
  dialog.warning({
    title: '删除模型',
    content: `确定从模型列表删除 ${m} 吗？`,
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: async () => {
      await removeModel(m)
    },
  })
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
        <NCard size="small" title="模型">
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
            <div class="set-row set-row-top">
              <span class="set-label">添加模型</span>
              <span class="set-val set-val-inline">
                <NInput
                  v-model:value="newModel"
                  class="set-model-input"
                  size="small"
                  placeholder="输入模型名称，如 gpt-4o-mini"
                  :disabled="adding"
                  clearable
                  @keyup.enter="onAddModel"
                />
                <NButton size="small" type="primary" secondary :loading="adding" @click="onAddModel">
                  添加
                </NButton>
              </span>
            </div>
            <div class="set-row set-row-top">
              <span class="set-label">模型列表（{{ wb.runtime.models.length }}）</span>
              <span class="set-val set-model-list">
                <span
                  v-for="m in wb.runtime.models"
                  :key="m"
                  class="set-model-chip"
                  :class="{ current: m === wb.runtime.model }"
                >
                  <span class="set-model-name">{{ m }}</span>
                  <NTag v-if="m === wb.runtime.model" size="tiny" type="success" :bordered="false">当前</NTag>
                  <NButton
                    quaternary
                    circle
                    size="tiny"
                    class="set-model-btn"
                    title="设为当前"
                    @click="onModel(m)"
                  >
                    <template #icon><Check :size="13" /></template>
                  </NButton>
                  <NButton
                    quaternary
                    circle
                    size="tiny"
                    class="set-model-btn"
                    title="删除"
                    @click="onRemoveModel(m)"
                  >
                    <template #icon><X :size="13" /></template>
                  </NButton>
                </span>
              </span>
            </div>
            <div class="set-row">
              <span class="set-label">推理服务地址</span>
              <span class="set-val set-mono muted">{{ wb.runtime.base_url || '—' }}</span>
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
