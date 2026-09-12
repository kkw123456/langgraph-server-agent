<script setup lang="ts">
import { computed } from 'vue'
import type { ToolCall as ToolCallT } from '../types'

const props = defineProps<{ tc: ToolCallT }>()

function truncate(s: string, n: number): string {
  s = String(s || '')
  return s.length > n ? s.slice(0, n) + '…' : s
}

const summary = computed(() => {
  const name = props.tc.name || 'tool'
  const input = props.tc.input ? ' → ' + truncate(props.tc.input, 120) : ''
  return '🔧 ' + name + input
})
</script>

<template>
  <details class="tool">
    <summary>{{ summary }}</summary>
    <pre>输入: {{ tc.input || '' }}

输出: {{ tc.output || '' }}</pre>
  </details>
</template>
