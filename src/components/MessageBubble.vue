<script setup lang="ts">
import { computed, ref } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { NAvatar } from 'naive-ui'
import {
  Bot, BrainCircuit, Braces, Check, Code2, Eye, File as FileIco, FileOutput, FilePlus2, FileText, FolderClosed,
  Globe, Loader2, Table2, Terminal, UserRound, Wrench,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import type { Message, ToolCall } from '../types'
import { toolLabel } from '../utils/toolLabels'
import { state } from '../store'
import { api } from '../api'

// 点击消息附件卡片 → 冒泡给 ChatWindow/Home 打开右侧面板预览工作目录文件
const emit = defineEmits<{ 'open-file': [path: string] }>()

/** 附件视图模型：剥离正文里的附件提示行后剩余的正文 + 附件清单 */
const ATTACH_LINE = /\n*\[附件已上传至工作目录：[^\]]*\]\n*/g
const userText = computed(() =>
  props.msg.role === 'user' ? (props.msg.content || '').replace(ATTACH_LINE, '').trim() : (props.msg.content || ''),
)

/** markdown 里的相对图片（tmp/…）映射为文件流 URL，聊天内直接回显 */
function withLocalImages(html: string): string {
  const cid = state.current
  if (!cid) return html
  return html.replace(/(src)="(tmp\/[^"]+)"/g, (_, a, p) =>
    `${a}="${api.rawFileUrl(cid, p)}"`,
  )
}

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
const html = computed(() => withLocalImages(DOMPurify.sanitize(marked.parse(props.msg.content || '', { async: false }))))

// ---- 思考过程折叠：流式输出中默认展开，历史消息默认收起 ----
const hasThinking = computed(() => !!(props.msg.reasoning || '').trim())
const thinkingNow = computed(
  () => !!props.streaming && !props.msg.content && !props.msg.tool_calls?.length,
)
const thinkOpen = ref<string[]>(thinkingNow.value ? ['think'] : [])

// ===================== 消息分段：按发生顺序交错展示「文本 → 工具组 → 文本」 =====================
// 后端在每个 tool_call 上记录了 at（发生时正文已输出的长度）：
// 相邻且 at 相同的工具合并为一组，文本按 at 切片，形成自然的时间线。
// 旧数据没有 at：回退为「工具组在前、正文在后」。
interface TextSeg { kind: 'text'; text: string }
interface ToolSeg { kind: 'tools'; calls: ToolCall[]; running: boolean }
type Seg = TextSeg | ToolSeg

const segments = computed<Seg[]>(() => {
  const calls = props.msg.tool_calls || []
  const content = props.msg.content || ''
  if (!calls.length) return content ? [{ kind: 'text', text: content }] : []

  // 无 at 的旧数据：整体置顶
  if (calls.some((c) => typeof c.at !== 'number')) {
    return [{ kind: 'tools', calls: mergeAdjacent(calls), running: false }, { kind: 'text', text: content }]
  }

  // 按 at 切分：每个工具组的文本前置段 = content[上一组结束, 本组 at)
  const out: Seg[] = []
  let cursor = 0
  let group: ToolCall[] = []
  const flushGroup = (at: number) => {
    if (!group.length) return
    const text = content.slice(cursor, at)
    if (text.trim()) out.push({ kind: 'text', text })
    out.push({ kind: 'tools', calls: group, running: false })
    cursor = at
    group = []
  }
  for (const tc of calls) {
    const at = typeof tc.at === 'number' ? tc.at : content.length
    if (group.length && at !== (group[0].at ?? at)) flushGroup(at)
    group.push(tc)
  }
  flushGroup(content.length)
  const tail = content.slice(cursor)
  if (tail.trim()) out.push({ kind: 'text', text: tail })
  for (const seg of out) {
    if (seg.kind === 'tools') seg.running = seg.calls.some((c) => c.output === '执行中…')
  }
  return out
})

/** 相邻同名工具合并为一组（视觉降噪，调用明细在节点内逐条展示）。 */
function mergeAdjacent(calls: ToolCall[]): ToolCall[] {
  const out: ToolCall[] = []
  for (const tc of calls) {
    const last = out[out.length - 1]
    if (last && last.name === tc.name) last.output = tc.output || last.output
    else out.push({ ...tc })
  }
  return out
}

// ===================== 工具节点：按工具类型换图标 =====================
const TOOL_ICONS: Record<string, Component> = {
  run_python: Terminal,
  run_command: Terminal,
  write_file: FilePlus2,
  edit_file: FilePlus2,
  read_file: FileText,
  list_dir: FolderClosed,
  delete_file: FileOutput,
  web_search: Globe,
  fetch_url: Globe,
  query_table: Table2,
  run_sql: Table2,
  call_llm: Braces,
}
function toolIcon(name: string): Component {
  return TOOL_ICONS[name] || Wrench
}

// ===================== 工具节点展开态（无箭头 icon，点击卡片本身切换） =====================
const expanded = ref<Set<string>>(new Set())
function keyOf(segIdx: number, ti: number): string {
  return `${segIdx}:${ti}`
}
function toggle(segIdx: number, ti: number): void {
  const k = keyOf(segIdx, ti)
  const next = new Set(expanded.value)
  if (next.has(k)) next.delete(k)
  else next.add(k)
  expanded.value = next
}

function fmtAttachSize(n: number): string {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

function truncate(s: string, n = 110): string {
  s = String(s || '').replace(/\s+/g, ' ').trim()
  return s.length > n ? s.slice(0, n) + '…' : s
}
</script>

<template>
  <div class="msg" :class="msg.role">
    <NAvatar
      class="avatar"
      :class="msg.role"
      round
      :size="32"
    >
      <component :is="msg.role === 'user' ? UserRound : Bot" :size="16" />
    </NAvatar>
    <div class="bubble">
      <template v-if="msg.role === 'user'">
        <span v-if="userText" class="user-text">{{ userText }}</span>
        <!-- 附件卡片：点击在右侧面板打开工作目录中的原文件 -->
        <div v-if="msg.attachments?.length" class="msg-attach">
          <span
            v-for="a in msg.attachments"
            :key="a.path"
            class="ma-card"
            :title="a.path"
            @click="emit('open-file', a.path)"
          >
            <FileIco :size="14" class="ma-ico" />
            <span class="ma-main">
              <span class="ma-name">{{ a.name }}</span>
              <span class="ma-meta">{{ fmtAttachSize(a.size) }} · 点击查看</span>
            </span>
            <Eye :size="13" class="ma-eye" />
          </span>
        </div>
      </template>
      <template v-else>
        <!-- 思考过程（deepseek/ark 等模型的 reasoning_content） -->
        <div v-if="hasThinking || thinkingNow" class="think-box" :class="{ open: thinkOpen.length }" @click="thinkOpen = thinkOpen.length ? [] : ['think']">
          <div class="think-head">
            <BrainCircuit :size="13" />
            <span>{{ thinkingNow ? '正在深度思考' : '思考过程' }}</span>
            <Loader2 v-if="thinkingNow" :size="12" class="spin" />
          </div>
          <div v-if="thinkOpen.length" class="think-body">{{ msg.reasoning }}</div>
        </div>

        <!-- 按发生顺序交错渲染：文本段 / 工具组段 -->
        <template v-for="(seg, si) in segments" :key="si">
          <div v-if="seg.kind === 'text'" class="md seg-text" v-html="withLocalImages(DOMPurify.sanitize(marked.parse(seg.text, { async: false })))"></div>
          <div v-else class="tool-nodes">
            <div
              v-for="(tc, ti) in seg.calls"
              :key="ti"
              class="tool-node"
              :class="{ running: seg.running, open: expanded.has(keyOf(si, ti)) }"
              @click="toggle(si, ti)"
            >
              <div class="tn-head">
                <span class="tn-ico"><component :is="toolIcon(tc.name)" :size="14" /></span>
                <span class="tn-name">{{ toolLabel(tc.name) }}</span>
                <span class="tn-arg muted">{{ truncate(tc.input) }}</span>
                <Loader2 v-if="seg.running" :size="13" class="spin tn-state" />
                <Check v-else :size="13" class="tn-state tn-done" />
              </div>
              <pre v-if="expanded.has(keyOf(si, ti))" class="tn-body">输入: {{ tc.input || '（无）' }}

输出: {{ tc.output || '' }}</pre>
            </div>
          </div>
        </template>

        <span v-if="streaming" class="cursor"></span>
      </template>
    </div>
  </div>
</template>
