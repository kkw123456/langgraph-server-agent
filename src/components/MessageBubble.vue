<script setup lang="ts">
import ToolCall from './ToolCall.vue'
import type { Message } from '../types'

defineProps<{ msg: Message }>()
</script>

<template>
  <div class="msg" :class="msg.role">
    <div class="bubble">
      <template v-if="msg.role === 'user'">{{ msg.content }}</template>
      <template v-else>
        <span class="assistant-text">{{ msg.content }}</span>
        <ToolCall v-for="(tc, i) in (msg.tool_calls || [])" :key="i" :tc="tc" />
      </template>
    </div>
  </div>
</template>
