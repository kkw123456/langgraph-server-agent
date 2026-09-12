<script setup lang="ts">
import ToolCall from './ToolCall.vue'
import { Bot, User } from 'lucide-vue-next'
import type { Message } from '../types'

defineProps<{ msg: Message; streaming?: boolean }>()
</script>

<template>
  <div class="msg" :class="msg.role">
    <div class="avatar" :class="msg.role">
      <component :is="msg.role === 'user' ? User : Bot" :size="16" />
    </div>
    <div class="bubble">
      <template v-if="msg.role === 'user'">{{ msg.content }}</template>
      <template v-else>
        <span class="assistant-text">{{ msg.content }}</span>
        <span v-if="streaming" class="cursor"></span>
        <ToolCall v-for="(tc, i) in (msg.tool_calls || [])" :key="i" :tc="tc" />
      </template>
    </div>
  </div>
</template>
