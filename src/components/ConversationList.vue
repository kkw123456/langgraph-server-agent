<script setup lang="ts">
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
      <span class="conv-title">{{ c.title }}</span>
      <button class="conv-del" title="删除" @click.stop="$emit('delete', c.id)">🗑</button>
    </div>
  </div>
</template>
