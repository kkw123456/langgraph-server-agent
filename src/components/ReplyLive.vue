<script setup lang="ts">
// 「AI 回复中」指示器：文字带渐变流光变色 + 三个点依次跳动。
// 抽成组件是因为两个地方要用同一视觉：等待首个 token（ChatWindow 的
// waiting 分支）与流式输出尾部（MessageBubble 的 streaming），
// 两处若各写一份，动效节奏很容易走偏。
defineProps<{ text?: string }>()
</script>

<template>
  <span class="reply-live" role="status" aria-live="polite">
    <span class="reply-live-text">{{ text || 'AI 回复中' }}</span>
    <span class="reply-live-dots"><i></i><i></i><i></i></span>
  </span>
</template>
