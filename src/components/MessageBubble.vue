<script setup lang="ts">
import { computed, ref } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { NAvatar, NCollapse, NCollapseItem, NTag } from 'naive-ui'
import { Bot, User, BrainCircuit, Wrench, Loader2 } from 'lucide-vue-next'
import type { Message, ToolCall } from '../types'
import { toolLabel } from '../utils/toolLabels'

marked.setOptions({ gfm: true, breaks: true })

// 外链统一新窗口打开并隔离 opener
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    node.setAttribute('target', '_blank')
    node.setAttribute('rel', 'noopener noreferrer')
  }
})

const props = defineProps<{ msg: Message; streaming?: boolean }>()

// Markdown 渲染（先 sanitize 再注入，防 XSS）
const html = computed(() => DOMPurify.sanitize(marked.parse(props.msg.content || '', { async: false })))

// ---- 思考过程折叠：流式输出中默认展开，历史消息默认收起 ----
const hasThinking = computed(() => !!(props.msg.reasoning || '').trim())
const thinkingNow = computed(
  () => !!props.streaming && !props.msg.content && !props.msg.tool_calls?.length,
)
const thinkOpen = ref<string[]>(thinkingNow.value ? ['think'] : [])

// ---- 工具调用分组：连续同名调用合并为一组 ----
interface ToolGroup { name: string; calls: ToolCall[]; running: boolean }
const toolGroups = computed<ToolGroup[]>(() => {
  const out: ToolGroup[] = []
  for (const tc of props.msg.tool_calls || []) {
    const last = out[out.length - 1]
    if (last && last.name === tc.name) last.calls.push(tc)
    else out.push({ name: tc.name, calls: [tc], running: false })
  }
  for (const g of out) g.running = g.calls.some((c) => c.output === '执行中…')
  return out
})

function truncate(s: string, n = 90): string {
  s = String(s || '')
  return s.length > n ? s.slice(0, n) + '…' : s
}
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
      <template v-if="msg.role === 'user'">
        <span class="user-text">{{ msg.content }}</span>
      </template>
      <template v-else>
        <!-- 思考过程（deepseek/ark 等模型的 reasoning_content） -->
        <NCollapse v-if="hasThinking || thinkingNow" class="think-collapse" v-model:expanded-names="thinkOpen">
          <NCollapseItem name="think" class="think-item">
            <template #header>
              <span class="think-head">
                <BrainCircuit :size="13" />
                <span>{{ thinkingNow ? '正在深度思考…' : '思考过程' }}</span>
                <Loader2 v-if="thinkingNow" :size="12" class="spin" />
              </span>
            </template>
            <div class="think-body">{{ msg.reasoning }}</div>
          </NCollapseItem>
        </NCollapse>

        <!-- 工具调用：同类型合并折叠，运行中显示 loading 图标 -->
        <div v-if="toolGroups.length" class="tool-groups">
          <NCollapse v-for="(g, gi) in toolGroups" :key="gi" class="tool-collapse" arrow-placement="left">
            <NCollapseItem :name="String(gi)" class="tool-item">
              <template #header>
                <span class="tool-head">
                  <Wrench :size="13" class="tool-ico" />
                  <span class="tool-name">
                    {{ toolLabel(g.name) }}<template v-if="g.calls.length > 1"> ×{{ g.calls.length }}</template>
                  </span>
                  <Loader2 v-if="g.running" :size="12" class="spin" />
                  <NTag v-else size="small" :bordered="false" type="success">完成</NTag>
                </span>
              </template>
              <div v-for="(tc, ti) in g.calls" :key="ti" class="tool-call-item">
                <div v-if="g.calls.length > 1" class="tool-call-idx muted tiny">#{{ ti + 1 }}</div>
                <pre class="tool-body">输入: {{ truncate(tc.input) || '（无）' }}

输出: {{ tc.output || '' }}</pre>
              </div>
            </NCollapseItem>
          </NCollapse>
        </div>

        <!-- 正文：markdown 渲染 -->
        <div v-if="msg.content" class="md" v-html="html"></div>
        <span v-if="streaming" class="cursor"></span>
      </template>
    </div>
  </div>
</template>
