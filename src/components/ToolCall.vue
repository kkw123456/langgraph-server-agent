<script setup lang="ts">
import { computed } from 'vue'
import { Wrench, ChevronRight, CircleCheck, Loader2 } from 'lucide-vue-next'
import type { ToolCall as ToolCallT } from '../types'

const props = defineProps<{ tc: ToolCallT }>()

function truncate(s: string, n: number): string {
  s = String(s || '')
  return s.length > n ? s.slice(0, n) + '…' : s
}

const running = computed(() => props.tc.output === '执行中…')
const summary = computed(() => {
  const input = props.tc.input ? truncate(props.tc.input, 90) : ''
  return input
})
</script>

<template>
  <details class="tool">
    <summary>
      <ChevronRight :size="13" class="chev" />
      <Wrench :size="13" class="tool-ico" />
      <span class="tool-name">{{ tc.name || 'tool' }}</span>
      <span v-if="summary" class="tool-arg muted">{{ summary }}</span>
      <span class="tool-state">
        <Loader2 v-if="running" :size="12" class="spin" />
        <CircleCheck v-else :size="12" />
      </span>
    </summary>
    <pre>输入: {{ tc.input || '' }}

输出: {{ tc.output || '' }}</pre>
  </details>
</template>
