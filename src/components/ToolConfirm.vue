<script setup lang="ts">
import { reactive, ref } from 'vue'
import { NModal, NCard, NSwitch, NInput, NButton, NAlert, NTag } from 'naive-ui'
import { ShieldAlert, Wrench } from 'lucide-vue-next'
import { resolveTool } from '../store'
import type { PendingToolCall } from '../types'

const props = defineProps<{ calls: PendingToolCall[] }>()

interface Row {
  id: string
  name: string
  allow: boolean
  argsStr: string
  error: string
}

function initRows(calls: PendingToolCall[]): Row[] {
  return calls.map((c) => ({
    id: c.id,
    name: c.name,
    allow: true,
    argsStr: JSON.stringify(c.args ?? {}, null, 2),
    error: '',
  }))
}

const rows = reactive<Row[]>(initRows(props.calls))
const submitting = ref(false)

function allowAll(): void {
  rows.forEach((r) => (r.allow = true))
}
function denyAll(): void {
  rows.forEach((r) => (r.allow = false))
}

function submit(): void {
  // 校验所有「允许」调用的 JSON 参数
  for (const r of rows) {
    r.error = ''
    if (!r.allow) continue
    if (r.argsStr.trim() === '') continue
    try {
      JSON.parse(r.argsStr)
    } catch (e) {
      r.error = '参数不是合法 JSON：' + (e as Error).message
      return
    }
  }
  const calls = rows.map((r) => {
    const c: { id: string; action: 'approve' | 'deny'; args?: unknown } = {
      id: r.id,
      action: r.allow ? 'approve' : 'deny',
    }
    if (r.allow && r.argsStr.trim() !== '') {
      try {
        c.args = JSON.parse(r.argsStr)
      } catch {
        /* 已在上面校验，不会到达 */
      }
    }
    return c
  })
  submitting.value = true
  resolveTool({ action: 'submit', calls })
}

function cancel(): void {
  resolveTool({ action: 'cancel' })
}
</script>

<template>
  <NModal :show="true" :mask-closable="false" @update:show="() => {}">
    <NCard class="confirm-card modal-w-lg" title="工具调用需确认" :bordered="false">
      <template #header-extra><ShieldAlert :size="18" /></template>

      <NAlert type="warning" :bordered="false" class="confirm-alert">
        当前为「确认模式」，下列工具将在你批准后执行。可逐条允许/拒绝，或编辑参数。
      </NAlert>

      <div class="confirm-list">
        <div class="confirm-row" v-for="r in rows" :key="r.id">
          <div class="confirm-head">
            <span class="confirm-name"><Wrench :size="13" /> {{ r.name }}</span>
            <span class="confirm-switch">
              <NTag :type="r.allow ? 'success' : 'error'" size="small" :bordered="false">
                {{ r.allow ? '允许' : '拒绝' }}
              </NTag>
              <NSwitch v-model:value="r.allow" size="small" />
            </span>
          </div>
          <NInput
            v-if="r.allow"
            v-model:value="r.argsStr"
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 8 }"
            spellcheck="false"
            placeholder="{}"
            class="args-input"
          />
          <div v-if="r.error" class="args-err">{{ r.error }}</div>
        </div>
      </div>

      <template #footer>
        <div class="modal-actions">
          <NButton @click="denyAll">全部拒绝</NButton>
          <NButton @click="allowAll">全部允许</NButton>
          <NButton @click="cancel">取消本轮</NButton>
          <NButton type="primary" :disabled="submitting" @click="submit">确认执行</NButton>
        </div>
      </template>
    </NCard>
  </NModal>
</template>
