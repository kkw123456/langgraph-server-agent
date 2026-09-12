<script setup lang="ts">
import { computed, ref } from 'vue'
import { NCollapse, NCollapseItem, NTag } from 'naive-ui'
import { Wrench, Loader2 } from 'lucide-vue-next'
import type { ToolCall as ToolCallT } from '../types'

const props = defineProps<{ tc: ToolCallT }>()
const expanded = ref<string[]>([])

function truncate(s: string, n: number): string {
  s = String(s || '')
  return s.length > n ? s.slice(0, n) + '…' : s
}

const running = computed(() => props.tc.output === '执行中…')
const summary = computed(() => (props.tc.input ? truncate(props.tc.input, 90) : ''))
const name = computed(() => props.tc.name || 'tool')
</script>

<template>
  <NCollapse v-model:expanded-names="expanded" class="tool-collapse" :arrow-placement="'left'">
    <NCollapseItem :name="name + (tc.input || '')" class="tool-item">
      <template #header>
        <span class="tool-head">
          <Wrench :size="13" class="tool-ico" />
          <span class="tool-name">{{ name }}</span>
          <span v-if="summary" class="tool-arg muted">{{ summary }}</span>
          <Loader2 v-if="running" :size="12" class="spin" />
          <NTag v-else size="small" :bordered="false" type="success">完成</NTag>
        </span>
      </template>
      <pre class="tool-body">输入: {{ tc.input || '' }}

输出: {{ tc.output || '' }}</pre>
    </NCollapseItem>
  </NCollapse>
</template>
