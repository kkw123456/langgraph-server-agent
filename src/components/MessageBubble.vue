<script setup lang="ts">
import { NAvatar } from 'naive-ui'
import { Bot, User } from 'lucide-vue-next'
import ToolCall from './ToolCall.vue'
import type { Message } from '../types'

defineProps<{ msg: Message; streaming?: boolean }>()
</script>

<template>
  <div class="msg" :class="msg.role">
    <NAvatar
      class="avatar"
      :class="msg.role"
      round
      :size="30"
      :color="msg.role === 'user' ? '#2f6feb' : '#e8f0fe'"
    >
      <component :is="msg.role === 'user' ? User : Bot" :size="16" :color="msg.role === 'user' ? '#fff' : '#2f6feb'" />
    </NAvatar>
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
