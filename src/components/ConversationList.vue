<script setup lang="ts">
import { NPopconfirm, NButton, NEmpty } from 'naive-ui'
import { MessageSquare, Trash2 } from 'lucide-vue-next'
import type { Conversation } from '../types'

defineProps<{ convs: Conversation[]; current: string | null }>()
defineEmits<{ select: [id: string]; delete: [id: string] }>()
</script>

<template>
  <div class="conv-list">
    <div
      v-for="c in convs"
      :key="c.id"
      class="conv"
      :class="{ active: c.id === current }"
      @click="$emit('select', c.id)"
    >
      <MessageSquare :size="15" class="conv-ico" />
      <span class="conv-title">{{ c.title }}</span>
      <span v-if="c.running" class="conv-running" title="正在回复">
        <span class="run-dot"></span>运行中
      </span>
      <NPopconfirm @positive-click="$emit('delete', c.id)">
        <template #trigger>
          <NButton class="conv-del" quaternary circle size="tiny" @click.stop>
            <template #icon><Trash2 :size="14" /></template>
          </NButton>
        </template>
        删除该会话？
      </NPopconfirm>
    </div>
    <NEmpty v-if="!convs.length" class="conv-empty" size="small" description="暂无匹配的会话" />
  </div>
</template>
