<script setup lang="ts">
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
      <button class="conv-del" title="删除" @click.stop="$emit('delete', c.id)">
        <Trash2 :size="14" />
      </button>
    </div>
    <div v-if="!convs.length" class="conv-empty muted">暂无会话，点击上方「新建对话」开始。</div>
  </div>
</template>
