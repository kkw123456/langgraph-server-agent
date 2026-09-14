<script setup lang="ts">
import { computed, ref, watch, onBeforeUnmount } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { NAvatar } from 'naive-ui'
import {
  BarChart3, Bot, BrainCircuit, Braces, ChevronDown, Code2, Database, Eye, FileOutput, FilePlus2,
  FileSpreadsheet, FileText, FolderClosed, Globe, Image as ImageIcon, Languages, Loader2, Mic,
  Search, Table2, Terminal, UserRound, Volume2, Wrench,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import type { Message, ToolCall } from '../types'
import { toolLabel } from '../utils/toolLabels'
import { fileIcon, extOf } from '../utils/fileicons'
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

// 外链统一新窗口打开并隔离 opener；markdown 图片标记 md-img（点击放大）
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    node.setAttribute('target', '_blank')
    node.setAttribute('rel', 'noopener noreferrer')
  }
  if (node.tagName === 'IMG') node.classList.add('md-img')
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
  // 末组边界是最后一个工具自己的 at（其后文本留给 tail），否则工具后的
  // 输出会被错误地搬到工具上面（先有文本再有工具的时间线就反了）
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
  flushGroup(group.length ? Number(group[0].at ?? content.length) : content.length)
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
// key 必须是后端工具的真实 name（见 tools/builtin_tools.py 与 skills/builtin/*.py）
const TOOL_ICONS: Record<string, Component> = {
  // 基础
  run_python: Terminal,
  run_command: Terminal,
  run_shell: Terminal,
  write_file: FilePlus2,
  edit_file: FilePlus2,
  read_file: FileText,
  list_dir: FolderClosed,
  make_dir: FolderClosed,
  search_files: Search,
  delete_file: FileOutput,
  calculator: Braces,
  get_current_datetime: Wrench,
  // 网络
  web_search: Search,
  web_fetch: Globe,
  fetch_url: Globe,
  // 数据库
  query_table: Table2,
  run_sql: Table2,
  sql_exec: Database,
  sql_schema: Database,
  // 图表
  plot_chart: BarChart3,
  update_chart: BarChart3,
  export_chart: BarChart3,
  // 文档
  parse_pdf: FileText,
  read_docx: FileText,
  excel_read: FileSpreadsheet,
  excel_write: FileSpreadsheet,
  // 图像 / 语音
  convert_image: ImageIcon,
  ocr_image: ImageIcon,
  tts_speak: Volume2,
  stt_listen: Mic,
  // 检索 / 模型
  kb_search: Search,
  call_llm: BrainCircuit,
  // 其他
  language: Languages,
}
function toolIcon(name: string): Component {
  return TOOL_ICONS[name] || Wrench
}

// ===================== 工具节点：语义化标题 + JSON 明细 =====================
/** 把工具输入 JSON 解析出来（失败返回 null，按原文展示）。 */
function parseInput(input: string): Record<string, unknown> | null {
  try {
    const obj = JSON.parse(input)
    return obj && typeof obj === 'object' ? obj : null
  } catch {
    return null
  }
}
function pick(obj: Record<string, unknown> | null, ...keys: string[]): string {
  if (!obj) return ''
  for (const k of keys) {
    const v = obj[k]
    if (typeof v === 'string' && v.trim()) return v
  }
  return ''
}

/** 工具节点的展示摘要。kind 用于区分路径是文件还是目录：
 *  目录不可在右侧面板预览，前端据此把路径渲染成静态文本而非可点链接。 */
export interface ToolSummary {
  title: string
  path?: string
  kind?: 'file' | 'dir'
}

/** 语义化标题：动作名 + 关键参数摘要（url / 搜索词 / 命令等）。
 *  文件路径不再拼进标题（与 tn-path 重复），统一由 tn-path 单独展示并可点击。 */
function toolSummary(tc: ToolCall): ToolSummary {
  const obj = parseInput(tc.input)
  const path = pick(obj, 'path', 'file', 'file_path', 'dir', 'directory')
  // 参数摘要截断：超长显示省略号，防止撑爆工具节点标题行
  const snip = (s: string, n = 48) => (s.length > n ? s.slice(0, n) + '…' : s)
  switch (tc.name) {
    case 'run_python':
      return { title: '执行脚本' }
    case 'run_command':
    case 'run_shell':
    case 'bash': {
      const cmd = pick(obj, 'command', 'cmd', 'script')
      return { title: cmd ? `运行命令 ${snip(cmd, 42)}` : '运行命令' }
    }
    case 'write_file':
      return { title: '添加文件', path: path || undefined, kind: 'file' }
    case 'edit_file':
      return { title: '修改文件', path: path || undefined, kind: 'file' }
    case 'delete_file':
      return { title: '删除文件', path: path || undefined, kind: 'file' }
    // make_dir 的目标必然是目录，不可预览
    case 'make_dir':
      return { title: '添加目录', path: path || undefined, kind: 'dir' }
    case 'read_file':
      return { title: '读取文件', path: path || undefined, kind: 'file' }
    case 'list_dir': {
      const p = (path || '').trim()
      // 浏览根目录（. / ./ / 空）时显示「浏览工作目录」，而不是突兀的 "."
      // list_dir 的 path 也一定是目录
      return !p || p === '.' || p === './'
        ? { title: '浏览工作目录' }
        : { title: '浏览目录', path: p, kind: 'dir' }
    }
    case 'search_files': {
      const kw = pick(obj, 'pattern', 'query', 'keyword', 'kw')
      return kw ? { title: `搜索 “${snip(kw, 36)}”` } : { title: '搜索' }
    }
    case 'web_search': {
      const kw = pick(obj, 'query', 'q', 'keyword', 'search')
      return kw ? { title: `联网搜索 ${snip(kw, 42)}` } : { title: '联网搜索' }
    }
    case 'web_fetch':
    case 'fetch_url': {
      const url = pick(obj, 'url', 'link', 'href')
      // 标题带上目标网址（剥掉协议头，摘要展示）
      return url ? { title: `抓取网页 ${snip(url.replace(/^https?:\/\//, ''), 54)}` } : { title: '抓取网页' }
    }
    case 'calculator': {
      const expr = pick(obj, 'expression', 'expr')
      return expr ? { title: `计算 ${snip(expr, 40)}` } : { title: '计算' }
    }
    // 技能类工具：文档/图片/表格类必然操作文件，路径可预览
    case 'parse_pdf':
    case 'read_docx':
    case 'excel_read':
    case 'excel_write':
    case 'convert_image':
    case 'ocr_image':
      return { title: toolLabel(tc.name), path: path || undefined, kind: 'file' }
    case 'plot_chart':
    case 'update_chart':
    case 'export_chart':
      // 图表工具的 path 指已有图表文件（可能为空 = 新建），可预览
      return { title: toolLabel(tc.name), path: path || undefined, kind: path ? 'file' : undefined }
    default:
      return path ? { title: toolLabel(tc.name), path } : { title: toolLabel(tc.name) }
  }
}

/**
 * toolSummary 的记忆化包装。
 *
 * 模板里每个工具节点要读 summary 的 title 与 path/kind（共 4 处），若每次都调
 * toolSummary 就会重复 JSON.parse 输入。用 WeakMap 按 ToolCall 对象缓存：
 * 消息对象的引用在流式更新时会被替换，WeakMap 不会造成泄漏。
 */
const summaryCache = new WeakMap<ToolCall, ToolSummary>()
function summaryOf(tc: ToolCall): ToolSummary {
  let s = summaryCache.get(tc)
  if (!s) {
    s = toolSummary(tc)
    summaryCache.set(tc, s)
  }
  return s
}

/** 输入/输出 JSON 美化：合法 JSON 两空格缩进，其余按原文。 */
function fmtJSON(s: string): string {
  if (!s || !s.trim()) return '（无）'
  try {
    return JSON.stringify(JSON.parse(s), null, 2)
  } catch {
    return s
  }
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

// ===================== markdown 图片点击放大（lightbox） =====================
// 事件委托：点击正文里带 md-img 标记的图片 → 全屏遮罩大图预览（点遮罩 / Esc 关闭）
const lightbox = ref<string | null>(null)
function onMdClick(e: MouseEvent): void {
  const t = e.target as HTMLElement
  if (t.tagName === 'IMG' && t.classList.contains('md-img')) {
    lightbox.value = (t as HTMLImageElement).src
  }
}
function closeLightbox(): void {
  lightbox.value = null
}
watch(lightbox, (v, old) => {
  if (v && !old) window.addEventListener('keydown', onLbKeydown)
  else if (!v && old) window.removeEventListener('keydown', onLbKeydown)
})
function onLbKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') closeLightbox()
}
onBeforeUnmount(() => window.removeEventListener('keydown', onLbKeydown))

/** 附件类型标签：无扩展名显示「文件」 */
function attachType(name: string): string {
  const ext = extOf(name)
  return ext ? ext.toUpperCase() : '文件'
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
        <!-- 附件卡片（#64）：完整文件信息（图标/名称/大小/类型标签），宽度不超气泡右界 -->
        <div v-if="msg.attachments?.length" class="msg-attach">
          <span
            v-for="a in msg.attachments"
            :key="a.path"
            class="ma-card"
            :title="a.path"
            @click="emit('open-file', a.path)"
          >
            <span class="ma-ico-box" :style="{ background: fileIcon(a.name).color + '1a', color: fileIcon(a.name).color }">
              <component :is="fileIcon(a.name).icon" :size="16" />
            </span>
            <span class="ma-main">
              <span class="ma-name">{{ a.name }}</span>
              <span class="ma-meta">
                <span class="ma-type" :style="{ color: fileIcon(a.name).color, borderColor: fileIcon(a.name).color + '55' }">{{ attachType(a.name) }}</span>
                <span>{{ fmtAttachSize(a.size) }}</span>
                <span class="ma-view"><Eye :size="11" /> 点击查看</span>
              </span>
            </span>
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
          <div v-if="seg.kind === 'text'" class="md seg-text" @click="onMdClick" v-html="withLocalImages(DOMPurify.sanitize(marked.parse(seg.text, { async: false })))"></div>
          <div v-else class="tool-nodes">
            <div
              v-for="(tc, ti) in seg.calls"
              :key="ti"
              class="tool-node"
              :class="{ running: seg.running, open: expanded.has(keyOf(si, ti)) }"
            >
              <!-- 点击 header 收起/展开；文件路径单独可点（在右面板打开） -->
              <div class="tn-head" @click="toggle(si, ti)">
                <span class="tn-ico"><component :is="toolIcon(tc.name)" :size="14" /></span>
                <span class="tn-name">{{ summaryOf(tc).title }}</span>
                <!-- 目录不可预览：渲染为静态文本（带文件夹图标），不响应点击 -->
                <span
                  v-if="summaryOf(tc).path && summaryOf(tc).kind === 'dir'"
                  class="tn-path is-dir"
                  title="目录（不可预览）"
                ><FolderClosed :size="12" />{{ summaryOf(tc).path }}</span>
                <span
                  v-else-if="summaryOf(tc).path"
                  class="tn-path"
                  :title="`在右侧面板查看 ${summaryOf(tc).path}`"
                  @click.stop="emit('open-file', summaryOf(tc).path!)"
                >{{ summaryOf(tc).path }}</span>
                <Loader2 v-if="seg.running" :size="13" class="spin tn-state" />
                <ChevronDown
                  v-else
                  :size="14"
                  class="tn-state tn-chev"
                  :class="{ flip: expanded.has(keyOf(si, ti)) }"
                />
              </div>
              <div v-if="expanded.has(keyOf(si, ti))" class="tn-body">
                <div class="tn-sec">
                  <div class="tn-sec-title">输入</div>
                  <pre class="tn-json">{{ fmtJSON(tc.input) }}</pre>
                </div>
                <div class="tn-sec">
                  <div class="tn-sec-title">输出</div>
                  <pre class="tn-json">{{ fmtJSON(tc.output) }}</pre>
                </div>
              </div>
            </div>
          </div>
        </template>

        <span v-if="streaming" class="cursor"></span>
      </template>
    </div>

    <!-- markdown 图片全屏预览（#5）：点遮罩 / Esc 关闭 -->
    <Teleport to="body">
      <div v-if="lightbox" class="img-lightbox" @click="closeLightbox">
        <img :src="lightbox" alt="预览" />
      </div>
    </Teleport>
  </div>
</template>
