<script setup lang="ts">
import { ref, watch, nextTick, computed } from 'vue'
import { NInput, NButton } from 'naive-ui'
import { Send, Sparkles, Loader2 } from 'lucide-vue-next'
import { state } from '../store'
import MessageBubble from './MessageBubble.vue'

const emit = defineEmits<{ send: [text: string] }>()
const draft = ref('')
const box = ref<HTMLElement | null>(null)
const inputRef = ref<InstanceType<typeof NInput> | null>(null)

// 会话是否处于「进行中」：有流式消息
const streaming = computed(() => !!state.live)
const empty = computed(() => !state.messages.length && !state.live)

function submit(): void {
  const t = draft.value
  if (!t.trim()) return
  emit('send', t)
  draft.value = ''
}

function onKeydown(e: KeyboardEvent): void {
  if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
    e.preventDefault()
    submit()
  }
}

function scrollBottom(): void {
  const b = box.value
  if (b) b.scrollTop = b.scrollHeight
}

const suggestions = [
  '帮我写一个快速排序的 Python 实现',
  '读取当前工作目录的文件列表并总结',
  '解释一下 MACD 指标的计算方法',
  '用一句话介绍你能做什么',
]

function useSuggestion(s: string): void {
  draft.value = s
  nextTick(() => inputRef.value?.focus())
}

// 历史消息或流式 live 消息变化均自动滚动到底部
watch(
  () => [state.messages.length, state.live?.content, state.live?.tool_calls?.length],
  async () => { await nextTick(); scrollBottom() },
)
watch(() => state.current, () => { draft.value = '' })
</script>

<template>
  <div class="chat-view">
    <section class="messages" ref="box">
      <!-- 空状态：Hero -->
      <div v-if="empty" class="hero">
        <div class="hero-logo"><Sparkles :size="34" /></div>
        <h2>有什么可以帮你的？</h2>
        <p class="muted">基于 LangGraph 的服务端智能体，支持工具调用、技能扩展与会话隔离工作目录。</p>
        <div class="suggestions">
          <NButton
            v-for="s in suggestions"
            :key="s"
            class="suggestion"
            quaternary
            @click="useSuggestion(s)"
          >{{ s }}</NButton>
        </div>
      </div>

      <template v-else>
        <MessageBubble v-for="(m, i) in state.messages" :key="'h' + i" :msg="m" />
        <MessageBubble v-if="state.live" :msg="state.live" streaming />
      </template>
    </section>

    <footer class="composer">
      <div class="composer-inner">
        <NInput
          ref="inputRef"
          v-model:value="draft"
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 8 }"
          placeholder="给智能体发送消息…（Enter 发送，Shift+Enter 换行）"
          :bordered="false"
          class="composer-input"
          @keydown="onKeydown"
        />
        <NButton
          class="send-btn"
          type="primary"
          circle
          :disabled="!draft.trim()"
          title="发送"
          @click="submit"
        >
          <template #icon><Send :size="17" /></template>
        </NButton>
      </div>
      <div class="composer-foot">
        <span class="muted tiny">
          <component :is="streaming ? Loader2 : Sparkles" :size="12" />
          {{ streaming ? '智能体正在回复…' : '智能体可能会调用工具，请留意确认提示' }}
        </span>
      </div>
    </footer>
  </div>
</template>
