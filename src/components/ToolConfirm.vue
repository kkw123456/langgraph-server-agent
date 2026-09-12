<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ShieldAlert, Wrench } from 'lucide-vue-next'
import { state, resolveTool } from '../store'
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
  <div class="modal">
    <div class="modal-box confirm-box">
      <h3><ShieldAlert :size="18" /> 工具调用需确认</h3>
      <p class="confirm-hint">当前为「确认模式」，下列工具将在你批准后执行。可逐条允许/拒绝，或编辑参数。</p>

      <div class="confirm-list">
        <div class="confirm-row" v-for="r in rows" :key="r.id">
          <div class="confirm-head">
            <span class="confirm-name"><Wrench :size="13" /> {{ r.name }}</span>
            <label class="switch">
              <input type="checkbox" v-model="r.allow" />
              <span class="switch-label">{{ r.allow ? '允许' : '拒绝' }}</span>
            </label>
          </div>
          <textarea
            v-if="r.allow"
            v-model="r.argsStr"
            class="args"
            spellcheck="false"
            placeholder="{}"
          ></textarea>
          <div v-if="r.error" class="args-err">{{ r.error }}</div>
        </div>
      </div>

      <div class="modal-actions">
        <button class="ghost" @click="denyAll">全部拒绝</button>
        <button class="ghost" @click="allowAll">全部允许</button>
        <button class="ghost" @click="cancel">取消本轮</button>
        <button class="primary" :disabled="submitting" @click="submit">确认执行</button>
      </div>
    </div>
  </div>
</template>
