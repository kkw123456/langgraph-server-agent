<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { state } from '../store'
import MessageBubble from './MessageBubble.vue'

const emit = defineEmits<{ send: [text: string] }>()
const draft = ref('')
const box = ref<HTMLElement | null>(null)

function submit(): void {
  const t = draft.value
  if (!t.trim()) return
  emit('send', t)
  draft.value = ''
}

function scrollBottom(): void {
  const b = box.value
  if (b) b.scrollTop = b.scrollHeight
}

// 历史消息或流式 live 消息变化均自动滚动到底部
watch(
  () => [state.messages, state.live],
  async () => { await nextTick(); scrollBottom() },
  { deep: true },
)
</script>

<template>
  <div class="topbar">
    <span>{{ state.convTitle }}</span>
    <span class="status">{{ state.status }}</span>
  </div>

  <section class="messages" ref="box">
    <MessageBubble v-for="(m, i) in state.messages" :key="'h' + i" :msg="m" />
    <MessageBubble v-if="state.live" :msg="state.live" />
  </section>

  <footer class="composer">
    <textarea
      ref="input"
      class="input"
      v-model="draft"
      @keydown.enter.exact.prevent="submit"
      placeholder="输入消息，Enter 发送，Shift+Enter 换行"
    ></textarea>
    <button class="primary" @click="submit">发送</button>
  </footer>
</template>
