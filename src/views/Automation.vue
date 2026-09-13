<script setup lang="ts">
// 自动化页：定时/手动触发的智能体任务。
// 调度由后端 lifespan 中的调度循环执行（hourly / daily / weekly），
// 页面负责 CRUD 与「立即运行」——运行会新建一个会话并跳转到对话页。
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import {
  NCard, NButton, NModal, NForm, NFormItem, NInput, NSelect, NSwitch, NTimePicker,
  NEmpty, NPopconfirm, NTag, NSkeleton, useMessage,
} from 'naive-ui'
import { Clock, Plus, Pencil, Trash2, Play, Zap } from 'lucide-vue-next'
import { selectConv, loadConvs } from '../store'
import {
  wb, loadAutomations, createAutomation, updateAutomation, deleteAutomation, runAutomation,
} from '../workbench'
import type { Automation, AutoSchedule } from '../types'

const message = useMessage()
const router = useRouter()

const showEdit = ref(false)
const editing = ref<Automation | null>(null)
const running = ref<string | null>(null)

const form = ref<{
  name: string
  prompt: string
  schedule: AutoSchedule
  at_time: string
  enabled: boolean
}>({ name: '', prompt: '', schedule: 'daily', at_time: '09:00', enabled: true })

const SCHEDULES: { label: string; value: AutoSchedule }[] = [
  { label: '每天一次', value: 'daily' },
  { label: '每周一次（周一）', value: 'weekly' },
  { label: '每小时一次', value: 'hourly' },
  { label: '仅手动触发', value: 'manual' },
]
const scheduleOptions = SCHEDULES.map((s) => ({ label: s.label, value: s.value }))

// NTimePicker 用 "HH:mm" 字符串，与后端 at_time 字段一致
const atTime = computed({
  get: () => form.value.at_time,
  set: (v: string | null) => { form.value.at_time = v || '09:00' },
})

function scheduleLabel(s: AutoSchedule, at: string): string {
  if (s === 'daily') return `每天 ${at}`
  if (s === 'weekly') return `每周一 ${at}`
  if (s === 'hourly') return '每小时'
  return '仅手动'
}

function fmtTime(t: number | null): string {
  if (!t) return '从未运行'
  const d = new Date(t * 1000)
  const p = (x: number) => String(x).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`
}

function openCreate(): void {
  editing.value = null
  form.value = { name: '', prompt: '', schedule: 'daily', at_time: '09:00', enabled: true }
  showEdit.value = true
}

function openEdit(a: Automation): void {
  editing.value = a
  form.value = {
    name: a.name, prompt: a.prompt, schedule: a.schedule,
    at_time: a.at_time || '09:00', enabled: a.enabled,
  }
  showEdit.value = true
}

async function submitEdit(): Promise<void> {
  const name = form.value.name.trim()
  const prompt = form.value.prompt.trim()
  if (!name || !prompt) { message.warning('任务名称与指令不能为空'); return }
  const payload = { ...form.value, name, prompt }
  const ok = editing.value
    ? await updateAutomation(editing.value.id, payload)
    : await createAutomation(payload)
  if (ok) {
    message.success(editing.value ? '任务已更新' : '任务已创建')
    showEdit.value = false
  }
}

async function onToggle(a: Automation): Promise<void> {
  await updateAutomation(a.id, { enabled: !a.enabled })
}

async function onDelete(a: Automation): Promise<void> {
  if (await deleteAutomation(a.id)) message.success('任务已删除')
}

async function onRun(a: Automation): Promise<void> {
  running.value = a.id
  try {
    const cid = await runAutomation(a.id)
    if (cid) {
      message.success('已触发，正在跳转到会话…')
      await loadConvs()
      await router.push('/')
      await selectConv(cid)
    }
  } finally {
    running.value = null
  }
}

let timer: number | null = null
onMounted(async () => {
  await loadAutomations()
  // 运行状态由后端异步推进，轮询以便状态自动刷新
  timer = window.setInterval(loadAutomations, 15000)
})
onBeforeUnmount(() => { if (timer) window.clearInterval(timer) })
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div class="page-title">
        <Clock :size="20" />
        <h1>自动化</h1>
        <span class="muted count">{{ wb.automations.length }} 个任务</span>
      </div>
      <div class="page-actions">
        <NButton type="primary" @click="openCreate">
          <template #icon><Plus :size="15" /></template>
          新建任务
        </NButton>
      </div>
    </div>

    <div class="page-body">
      <!-- 首载骨架屏 -->
      <div v-if="wb.loadingAutomations" class="grid-cards">
        <NCard v-for="i in 3" :key="'sk' + i" size="small">
          <NSkeleton text width="38%" class="sk-title" />
          <NSkeleton text :repeat="2" />
          <NSkeleton text width="60%" class="sk-line" />
        </NCard>
      </div>

      <NEmpty
        v-else-if="!wb.automations.length"
        class="page-empty"
        description="还没有自动化任务，创建一个让智能体按时替你跑"
      />

      <div v-else class="grid-cards">
        <NCard v-for="a in wb.automations" :key="a.id" class="auto-card" size="small">
          <div class="au-head">
            <span class="au-name">
              <Zap :size="15" :color="a.enabled ? '#1a7f37' : '#9aa2ad'" />
              {{ a.name }}
            </span>
            <NSwitch :value="a.enabled" size="small" @update:value="onToggle(a)" />
          </div>

          <pre class="au-prompt">{{ a.prompt }}</pre>

          <div class="au-meta">
            <NTag size="small" :bordered="false" type="info">
              {{ scheduleLabel(a.schedule, a.at_time) }}
            </NTag>
            <NTag size="small" :bordered="false">
              已运行 {{ a.run_count }} 次
            </NTag>
            <NTag
              v-if="a.last_status"
              size="small"
              :bordered="false"
              :type="a.last_status === 'failed' ? 'error' : 'success'"
            >{{ a.last_status }}</NTag>
          </div>

          <div class="muted tiny mb-10">
            上次运行：{{ fmtTime(a.last_run_at) }}
          </div>

          <div class="au-foot">
            <NButton size="tiny" type="primary" :loading="running === a.id" @click="onRun(a)">
              <template #icon><Play :size="13" /></template>
              立即运行
            </NButton>
            <span class="btn-group">
              <NButton quaternary circle size="tiny" title="编辑" @click="openEdit(a)">
                <template #icon><Pencil :size="13" /></template>
              </NButton>
              <NPopconfirm @positive-click="onDelete(a)">
                <template #trigger>
                  <NButton quaternary circle size="tiny" type="error" title="删除">
                    <template #icon><Trash2 :size="13" /></template>
                  </NButton>
                </template>
                删除该自动化任务？
              </NPopconfirm>
            </span>
          </div>
        </NCard>
      </div>
    </div>

    <NModal v-model:show="showEdit">
      <NCard
        class="modal-card modal-w-md"
        :title="editing ? '编辑自动化任务' : '新建自动化任务'"
        :bordered="false"
      >
        <NForm label-placement="top" :show-feedback="false">
          <div class="form-grid">
            <NFormItem label="任务名称">
              <NInput v-model:value="form.name" placeholder="例如：每日行情复盘" />
            </NFormItem>
            <NFormItem label="指令内容">
              <NInput
                v-model:value="form.prompt"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 10 }"
                placeholder="到点时发给智能体的指令"
              />
            </NFormItem>
            <NFormItem label="调度方式">
              <NSelect v-model:value="form.schedule" :options="scheduleOptions" />
            </NFormItem>
            <NFormItem v-if="form.schedule === 'daily' || form.schedule === 'weekly'" label="触发时刻">
              <NTimePicker v-model:formatted-value="atTime" format="HH:mm" value-format="HH:mm" />
            </NFormItem>
            <NFormItem label="创建后立即启用">
              <NSwitch v-model:value="form.enabled" />
            </NFormItem>
          </div>
        </NForm>
        <template #footer>
          <div class="modal-actions">
            <NButton @click="showEdit = false">取消</NButton>
            <NButton type="primary" @click="submitEdit">保存</NButton>
          </div>
        </template>
      </NCard>
    </NModal>
  </div>
</template>
