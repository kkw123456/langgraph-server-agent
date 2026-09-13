<script setup lang="ts">
// 主界面（对话）：聊天区 + 右侧结果面板。
// 会话侧栏已提升到 Shell（全路由常驻），本组件只承载中间对话与右侧面板两列。
// 右面板：头部功能图标（产物/所有文件）+ 手写多标签文件预览（file-viewer 渲染非文本）。
// 无预览标签时功能面板常驻主体；有预览时 hover 头部图标下拉出对应面板。
// <flyfish-file-viewer> Web Component（非文本文件预览）按需加载：
// web-full 静态依赖 preset-all（全部渲染器），若在模块顶层静态 import，
// 渲染器 chunk 会全部进入构建产物预加载，弱网下首屏直接超时。
// 因此首次真正需要预览二进制文件时才动态加载，并显式指定运行时资产目录
// （vite-plugin 以 copyAssets 拷贝到 /static/file-viewer/，inject 已关闭）。
let fvReady: Promise<void> | null = null
function ensureFileViewer(): Promise<void> {
  if (!fvReady) {
    fvReady = Promise.all([
      import('@file-viewer/web-full'),
      import('@file-viewer/core/assets'),
    ]).then(([full, assets]) => {
      assets.setDefaultFileViewerAssetBaseUrl('/static/file-viewer/')
      full.setDefaultFullAssetBaseUrl('/static/file-viewer/')
      full.defineFileViewerElement()
    })
  }
  return fvReady
}
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  NButton, NScrollbar, NEmpty, NSkeleton, useMessage,
} from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import json from 'highlight.js/lib/languages/json'
import cssLang from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'
import less from 'highlight.js/lib/languages/less'
import xml from 'highlight.js/lib/languages/xml'
import markdown from 'highlight.js/lib/languages/markdown'
import sql from 'highlight.js/lib/languages/sql'
import bash from 'highlight.js/lib/languages/bash'
import yaml from 'highlight.js/lib/languages/yaml'
import iniLang from 'highlight.js/lib/languages/ini'
import goLang from 'highlight.js/lib/languages/go'
import rust from 'highlight.js/lib/languages/rust'
import java from 'highlight.js/lib/languages/java'
import cLang from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import csharp from 'highlight.js/lib/languages/csharp'
import php from 'highlight.js/lib/languages/php'
import ruby from 'highlight.js/lib/languages/ruby'
import lua from 'highlight.js/lib/languages/lua'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import diff from 'highlight.js/lib/languages/diff'
import 'highlight.js/styles/github-dark.css'
import {
  PanelRightClose, PanelRightOpen,
  FileText, FolderClosed, Maximize2, Minimize2, Plus, RotateCw, Sparkles,
  X, List,
} from 'lucide-vue-next'
import {
  state, loadConvs, loadSkills, selectConv, newChat, renameConv,
  sendText,
} from '../store'
import { toolLabel } from '../utils/toolLabels'
import { extOf } from '../utils/fileicons'
import { useBreakpoint } from '../composables/useBreakpoint'
import ChatWindow from '../components/ChatWindow.vue'
import FilePanel from '../components/FilePanel.vue'
import ToolConfirm from '../components/ToolConfirm.vue'
import { api } from '../api'

// ---- highlight.js 代码高亮（#66）：按需注册常用语言，控制 bundle 体积 ----
import type { LanguageFn } from 'highlight.js'
const HL_LANGS: Record<string, LanguageFn> = {
  python, javascript, typescript, json, css: cssLang, scss, less, xml, markdown,
  sql, bash, yaml, ini: iniLang, go: goLang, rust, java, c: cLang, cpp,
  csharp, php, ruby, lua, dockerfile, diff,
}
for (const [n, l] of Object.entries(HL_LANGS)) hljs.registerLanguage(n, l)

// 扩展名 → hljs 语言
const EXT_LANG: Record<string, string> = {
  py: 'python', js: 'javascript', mjs: 'javascript', cjs: 'javascript', jsx: 'javascript',
  ts: 'typescript', tsx: 'typescript', json: 'json', jsonc: 'json', css: 'css',
  scss: 'scss', sass: 'scss', less: 'less', html: 'xml', htm: 'xml', xml: 'xml',
  svg: 'xml', vue: 'xml', md: 'markdown', markdown: 'markdown', mdx: 'markdown',
  sql: 'sql', sh: 'bash', bash: 'bash', zsh: 'bash', yml: 'yaml', yaml: 'yaml',
  toml: 'ini', ini: 'ini', cfg: 'ini', conf: 'ini', go: 'go', rs: 'rust',
  java: 'java', c: 'c', h: 'c', cpp: 'cpp', cc: 'cpp', cxx: 'cpp', hpp: 'cpp',
  cs: 'csharp', php: 'php', rb: 'ruby', lua: 'lua', ipynb: 'json',
  dockerfile: 'dockerfile', patch: 'diff',
}
// 超过该大小不做高亮（防大文件卡顿），降级纯文本
const HL_HIGHLIGHT_MAX = 400 * 1024

const props = defineProps<{ showRight?: boolean }>()

const router = useRouter()
const route = useRoute()
const message = useMessage()
const bp = useBreakpoint()

// ---- 右侧面板：展开 / 收起（宽度可拖拽、可全屏） ----
type PanelState = 'full' | 'collapsed'
const panelState = ref<PanelState>('full')
const panelWidth = ref(380)
const resizing = ref(false)
const fullscreen = ref(false)

// ---- 右面板功能视图与文件预览标签 ----
type SideView = 'artifacts' | 'files'
const sideView = ref<SideView>('files')

// 已打开的文件预览标签（手写 tabs）：点击文件已存在则切换，不存在则新开
interface FileTab {
  path: string
  name: string
  size: number
  content: string
  truncated: boolean
  binary: boolean
  note?: string
}
const openTabs = ref<FileTab[]>([])
const activeTab = ref<string | null>(null)
const tabLoading = ref(false)

const activeTabData = computed(() => openTabs.value.find((t) => t.path === activeTab.value) ?? null)

/** 代码高亮视图（#66）：可高亮语言 + 内容不超阈值时返回 {html, lines, label}，否则纯文本。 */
const hlResult = computed(() => {
  const d = activeTabData.value
  if (!d || d.binary || !d.content) return null
  const lang = EXT_LANG[extOf(d.name)]
  if (!lang || d.content.length > HL_HIGHLIGHT_MAX) return null
  try {
    const html = hljs.highlight(d.content, { language: lang, ignoreIllegals: true }).value
    const n = d.content.split('\n').length
    return { html, lines: Array.from({ length: n }, (_, i) => i + 1).join('\n'), label: lang }
  } catch {
    return null
  }
})
const tabsEl = ref<HTMLElement | null>(null)
// 文件标签栏：鼠标滚轮横向滚动（标签多时不挤爆面板）
function onTabsWheel(e: WheelEvent): void {
  const el = tabsEl.value
  if (!el) return
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    el.scrollLeft += e.deltaY
    e.preventDefault()
  }
}

// 左侧功能图标（产物 / 所有文件）
const sideIcons: { key: SideView; label: string; icon: unknown }[] = [
  { key: 'artifacts', label: '产物', icon: Sparkles },
  { key: 'files', label: '所有文件', icon: FolderClosed },
]

/** 打开/切换文件预览标签：已存在直接切换，否则拉取内容后新开。
 *  打开文件时右面板自动展开并适当加宽（阅读/预览需要更多空间）。 */
async function openPreviewTab(path: string, opts?: { force?: boolean }): Promise<void> {
  if (!state.current) return
  if (!opts?.force && openTabs.value.some((t) => t.path === path)) {
    activeTab.value = path
    widenPanel()
    return
  }
  tabLoading.value = true
  try {
    // force 刷新：先移除旧标签再重新拉取
    if (opts?.force) {
      const i = openTabs.value.findIndex((t) => t.path === path)
      if (i >= 0) openTabs.value.splice(i, 1)
    }
    const d = await api.files<{ ok: boolean; name?: string; size?: number; content?: string; truncated?: boolean; binary?: boolean; note?: string; error?: string }>(
      state.current, path,
    )
    if (!d.ok) { message.error(d.error || '文件打开失败'); return }
    // 二进制文件走 <flyfish-file-viewer> 渲染：激活标签前确保组件已注册
    if (d.binary) await ensureFileViewer()
    openTabs.value.push({
      path,
      name: d.name ?? path.split('/').pop() ?? path,
      size: d.size ?? 0,
      content: d.content ?? '',
      truncated: !!d.truncated,
      binary: !!d.binary,
      note: d.note,
    })
    activeTab.value = path
    widenPanel()
  } finally {
    tabLoading.value = false
  }
}

/** 文件打开时把右面板加宽到更舒适的预览宽度（不超过断点上限）。 */
function widenPanel(): void {
  if (panelState.value !== 'full') panelState.value = 'full'
  const target = Math.min(panelMax.value, Math.max(panelWidth.value, 520))
  if (target > panelWidth.value) panelWidth.value = target
}

/** rp-actions 的刷新：重新拉取当前预览文件 + 刷新文件树。 */
function refreshActive(): void {
  state.filesTick++
  if (activeTab.value) void openPreviewTab(activeTab.value, { force: true })
}

/** 消息附件卡片 / 工具节点路径：打开右侧面板预览工作目录文件（面板关闭时自动唤起）。 */
function openAttachment(path: string): void {
  state.rightOpen = true
  void openPreviewTab(path)
}

function closeTab(path: string): void {
  const i = openTabs.value.findIndex((t) => t.path === path)
  if (i < 0) return
  openTabs.value.splice(i, 1)
  if (activeTab.value === path) {
    activeTab.value = openTabs.value[Math.min(i, openTabs.value.length - 1)]?.path ?? null
  }
}

function showSide(key: SideView): void {
  sideView.value = key
  activeTab.value = null
}

// ---- 头部功能图标的 hover 下拉（JS 延迟开合 + 进入坐标判定）----
// 纯 CSS :hover 会在大面板覆盖主体内容时形成死锁（鼠标落在被覆盖的
// 内容上 = 仍在 host 内，面板永不关闭、点击永远被拦截），改为定时器控制：
// 悬停 120ms 展开；离开图标/面板 120ms 后收起。
// 面板的 mouseenter 只有在「从图标方向进入」（Y 坐标接近 host 底部）时才
// 取消收起——防止鼠标从主体内容直接跳入面板深处造成永久拦截。
const flyKey = ref<SideView | null>(null)
let flyOpenTimer = 0
let flyCloseTimer = 0
function openFly(key: SideView): void {
  // 无预览标签时功能面板已常驻主体，弹出只会重复且会遮挡文件树（hover 死锁），
  // 仅在有预览标签占用主体时才启用 hover 弹出快速浏览。
  if (!activeTabData.value) return
  clearTimeout(flyCloseTimer)
  clearTimeout(flyOpenTimer)
  flyOpenTimer = window.setTimeout(() => { flyKey.value = key }, 120)
}
function scheduleCloseFly(): void {
  clearTimeout(flyOpenTimer)
  clearTimeout(flyCloseTimer)
  flyCloseTimer = window.setTimeout(() => { flyKey.value = null }, 120)
}
function onFlyEnter(e: MouseEvent): void {
  const host = (e.currentTarget as HTMLElement).closest('.ph-host') as HTMLElement | null
  const bottom = host ? host.getBoundingClientRect().bottom : 0
  // 从上方（图标/桥接区/面板顶部边缘）进入：合法悬停，取消收起
  if (e.clientY <= bottom + 28) clearTimeout(flyCloseTimer)
}
onBeforeUnmount(() => {
  clearTimeout(flyOpenTimer)
  clearTimeout(flyCloseTimer)
})

function fmtSize(n: number): string {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

// 会话切换：清空预览标签（文件树由 FilePanel 自行跟随 cid）
watch(() => state.current, () => {
  openTabs.value = []
  activeTab.value = null
  sideView.value = 'files'
})

// 面板宽度上下限：中屏时收窄，避免挤压对话区
const panelMin = computed(() => (bp.isMd ? 260 : 240))
const panelMax = computed(() => (bp.isLg ? 820 : bp.isMd ? 620 : 480))

// 窄屏（<1024）下右面板改为覆盖层
const overlay = computed(() => bp.overlayPanel)
// 移动端头部仅在手机宽度（<768）出现，与 Shell 抽屉断点对齐；
// 768-1024 的 PC 窄窗口仍显示桌面消息头部 .c-head（此前误用 overlay 导致窄窗口无头部）
const isXs = computed(() => bp.isXs)

// 面板实际占据的宽度：收起为 0；全屏时面板 fixed 覆盖视口，不再占 grid 列（对话区铺满）
const panelCol = computed(() => {
  if (!props.showRight || !bp.isMd) return 0
  if (fullscreen.value) return 0
  if (panelState.value === 'collapsed') return 0
  return panelWidth.value
})

// 把面板宽度写回 CSS 变量，供 .app-shell 的覆盖层样式与拖拽时使用
watch(
  [panelCol],
  () => {
    const root = document.documentElement
    root.style.setProperty('--panel-w', `${panelCol.value || 320}px`)
  },
  { immediate: true },
)

// 两列布局：对话区 + 右侧结果面板（会话侧栏由 Shell 承载）
const gridTemplate = computed(() => {
  if (overlay.value) return 'minmax(0, 1fr)'
  if (!props.showRight) return 'minmax(0, 1fr) 0px'
  return `minmax(0, 1fr) ${panelCol.value}px`
})

// 右侧面板在窄屏仅在「展开」态渲染，收起时不占位
const panelVisible = computed(() =>
  overlay.value ? props.showRight && panelState.value === 'full' : !!props.showRight,
)

const streaming = computed(() => !!state.live)

// 「产物」标签：从会话消息里收集工具调用产生的条目，作为可下载的结果卡片
const artifacts = computed(() => {
  const out: { name: string; kind: string; output: string }[] = []
  for (const m of state.messages) {
    for (const tc of m.tool_calls || []) {
      out.push({ name: tc.name, kind: tc.input || 'tool', output: tc.output || '' })
    }
  }
  return out.reverse()
})

function togglePanel(): void {
  panelState.value = panelState.value === 'collapsed' ? 'full' : 'collapsed'
}

/** 收起面板：同时退出全屏（修复全屏态下点收起后 fixed 全屏仍覆盖导致"无法收起"）。 */
function collapsePanel(): void {
  fullscreen.value = false
  panelState.value = 'collapsed'
}

// 移动端 header 的新建会话
async function onNewChat(): Promise<void> {
  await newChat()
  if (route.path !== '/') router.push('/')
}

// ===================== PC 消息头部：会话标题就地编辑 =====================
const editingTitle = ref(false)
const titleDraft = ref('')
const titleInput = ref<HTMLInputElement | null>(null)
function startEditTitle(): void {
  if (!state.current) return
  titleDraft.value = state.convTitle
  editingTitle.value = true
  void nextTick(() => titleInput.value?.focus())
}
function cancelTitle(): void {
  editingTitle.value = false
}
async function confirmTitle(): Promise<void> {
  if (!editingTitle.value) return
  editingTitle.value = false
  const t = titleDraft.value.trim()
  if (state.current && t && t !== state.convTitle) {
    try {
      await renameConv(state.current, t)
      message.success('已重命名')
    } catch {
      message.error('重命名失败')
    }
  }
}

function startResize(e: MouseEvent): void {
  if (panelState.value !== 'full' || !props.showRight) return
  resizing.value = true
  const startX = e.clientX
  const startW = panelWidth.value
  const onMove = (ev: MouseEvent) => {
    // 上下限随断点变化：窄屏时不允许面板把对话区挤没
    panelWidth.value = Math.min(panelMax.value, Math.max(panelMin.value, startW + (startX - ev.clientX)))
  }
  const onUp = () => {
    resizing.value = false
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onUp)
    document.body.style.userSelect = ''
  }
  document.body.style.userSelect = 'none'
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}

function downloadUrl(path: string): string {
  return state.current ? api.rawFileUrl(state.current, path) : '#'
}

// 视口变化时的状态收敛：变窄后退出全屏、关抽屉
watch(
  () => [bp.isMd, bp.isXs] as const,
  () => {
    if (!bp.isMd) {
      fullscreen.value = false
    } else {
      state.sidebarOpen = false
      // 回到宽屏，避免面板仍是 collapsed 造成「什么都没有」的错觉
      if (panelState.value === 'collapsed') panelState.value = 'full'
    }
  },
)

function onKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') {
    if (state.sidebarOpen) state.sidebarOpen = false
    else if (fullscreen.value) fullscreen.value = false
  }
}

// 会话列表轮询：后台任务（自动化触发、其他端发起的对话）的「运行中」
// 状态需要定期同步；8s 一次，代价仅为一次轻量元数据查询
let pollTimer: number | undefined

onMounted(async () => {
  await Promise.all([loadConvs(), loadSkills()])
  // 刷新后恢复到最后一次使用的会话（若它仍在列表中），
  // 这样运行中的会话刷新后能立即通过 resume 回放继续围观流式输出
  const last = localStorage.getItem('lg_last_conv')
  if (!state.current && last && state.convs.some((c) => c.id === last)) {
    await selectConv(last)
  }
  window.addEventListener('keydown', onKeydown)
  pollTimer = window.setInterval(loadConvs, 8000)
})
onBeforeUnmount(() => {
  if (pollTimer) window.clearInterval(pollTimer)
  document.body.style.userSelect = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div
    class="app-shell"
    :class="{ resizing, 'as-overlay': overlay }"
    :style="{ gridTemplateColumns: gridTemplate }"
  >
    <!-- 列 1：对话区（移动端顶部 header：会话列表 / 标题 / 新建 / 项目；右面板开关联动） -->
    <section class="main">
      <header v-if="isXs" class="m-header">
        <NButton quaternary circle size="small" title="会话列表" @click="state.sidebarOpen = true">
          <template #icon><List :size="18" /></template>
        </NButton>
        <b class="m-title">{{ state.convTitle }}</b>
        <NButton quaternary circle size="small" title="新建会话" @click="onNewChat">
          <template #icon><Plus :size="18" /></template>
        </NButton>
        <NButton
          quaternary
          circle
          size="small"
          :title="state.rightOpen ? '收起面板' : '打开面板'"
          @click="state.rightOpen = !state.rightOpen"
        >
          <template #icon>
            <PanelRightClose v-if="state.rightOpen" :size="18" />
            <PanelRightOpen v-else :size="18" />
          </template>
        </NButton>
      </header>
      <!-- PC 消息列表头部：可编辑会话标题 + 右面板开关 -->
      <header v-else class="c-head">
        <template v-if="state.current">
          <input
            v-if="editingTitle"
            ref="titleInput"
            v-model="titleDraft"
            class="c-title-input"
            @keyup.enter="confirmTitle"
            @keyup.esc="cancelTitle"
            @blur="confirmTitle"
          />
          <b v-else class="c-title" title="点击修改会话标题" @click="startEditTitle">{{ state.convTitle }}</b>
        </template>
        <b v-else class="c-title muted">新对话</b>
        <span class="c-head-grow"></span>
        <NButton
          quaternary
          circle
          size="small"
          :title="state.rightOpen ? '收起右侧面板' : '打开右侧面板'"
          @click="state.rightOpen = !state.rightOpen"
        >
          <template #icon>
            <PanelRightClose v-if="state.rightOpen" :size="16" />
            <PanelRightOpen v-else :size="16" />
          </template>
        </NButton>
      </header>
      <!-- 折叠态浮动把手：仅在面板被折叠后显示，用于恢复宽态（避免与头部开关重叠） -->
      <NButton
        v-if="showRight && !overlay && panelState === 'collapsed'"
        quaternary
        circle
        size="small"
        class="float-btn panel-handle"
        title="展开右侧面板"
        @click="togglePanel"
      >
        <template #icon>
          <PanelRightOpen :size="16" />
        </template>
      </NButton>

      <ChatWindow @open-file="openAttachment" />
    </section>

    <!-- 列 3：结果面板（左侧功能图标 + 手写多标签文件预览） -->
    <aside
      v-if="panelVisible"
      class="right"
      :class="{ fullscreen, 'as-overlay': overlay }"
    >
      <div
        v-if="panelState === 'full' && !overlay"
        class="resize-handle"
        @mousedown.prevent="startResize"
      ></div>

      <!-- 头部：功能图标常驻（#62），中间是手写预览 tabs（有预览标签时显示） -->
      <div class="panel-head">
        <div
          v-for="v in sideIcons"
          :key="v.key"
          class="ph-host"
          :class="{ open: flyKey === v.key }"
          @mouseenter="openFly(v.key)"
          @mouseleave="scheduleCloseFly"
        >
          <button
            class="ph-ico"
            :class="{ active: !activeTabData && sideView === v.key }"
            :title="v.label"
            @click="showSide(v.key)"
          >
            <component :is="v.icon" :size="16" />
          </button>
          <!-- hover 下拉出对应功能面板（JS 延迟开合，防大面板误触遮挡主体） -->
          <div class="ph-fly" @mouseenter="onFlyEnter" @mouseleave="scheduleCloseFly">
            <div class="ph-fly-body">
              <div v-if="v.key === 'artifacts'" class="artifact-list ph-fly-list">
                <template v-if="artifacts.length">
                  <div v-for="(a, i) in artifacts" :key="i" class="artifact-card">
                    <span class="ac-ico"><Sparkles :size="15" /></span>
                    <span class="ac-body">
                      <div class="ac-name">{{ toolLabel(a.name) }}</div>
                      <div class="ac-meta muted">{{ a.name }}</div>
                    </span>
                  </div>
                </template>
                <NEmpty v-else class="page-empty" description="本轮还没有产生结果" />
              </div>
              <FilePanel v-else @open="openPreviewTab" />
            </div>
          </div>
        </div>
        <div v-if="activeTabData" ref="tabsEl" class="pv-tabs" @wheel="onTabsWheel">
          <span
            v-for="t in openTabs"
            :key="t.path"
            class="pv-tab"
            :class="{ active: t.path === activeTab }"
            :title="t.path"
            @click="activeTab = t.path"
          >
            <FileText :size="12" />
            <span class="pv-tab-name">{{ t.name }}</span>
            <X :size="11" class="pv-tab-x" @click.stop="closeTab(t.path)" />
          </span>
        </div>
        <div class="rp-actions">
          <!-- 覆盖层模式下头部开关被面板盖住，提供面板内关闭入口 -->
          <NButton v-if="overlay" quaternary circle size="small" title="关闭面板" @click="state.rightOpen = false">
            <template #icon><X :size="15" /></template>
          </NButton>
          <NButton quaternary circle size="small" title="刷新" @click="refreshActive">
            <template #icon><RotateCw :size="15" /></template>
          </NButton>
          <NButton quaternary circle size="small" :title="fullscreen ? '退出全屏' : '全屏'" @click="fullscreen = !fullscreen">
            <template #icon>
              <component :is="fullscreen ? Minimize2 : Maximize2" :size="15" />
            </template>
          </NButton>
          <NButton quaternary circle size="small" title="收起面板" @click="collapsePanel">
            <template #icon><PanelRightClose :size="15" /></template>
          </NButton>
        </div>
      </div>

      <!-- 主体：功能面板常驻（图标条已移至头部 #62）；有预览标签时显示文件预览 -->
      <div class="rp-wrap">
        <!-- 功能面板：产物 / 所有文件 -->
        <div v-if="!activeTabData" class="rp-content">
          <!-- 产物 -->
          <div v-if="sideView === 'artifacts'" class="artifact-pane">
            <div v-if="artifacts.length" class="artifact-list">
              <div v-for="(a, i) in artifacts" :key="i" class="artifact-card">
                <span class="ac-ico"><Sparkles :size="15" /></span>
                <span class="ac-body">
                  <div class="ac-name">{{ toolLabel(a.name) }}</div>
                  <div class="ac-meta muted">{{ a.name }}</div>
                </span>
              </div>
            </div>
            <NEmpty v-else class="page-empty" description="本轮还没有产生结果" />
          </div>
          <!-- 所有文件 / 变更预览：文件树，点击文件打开预览标签 -->
          <FilePanel v-else @open="openPreviewTab" />
        </div>
        <!-- 文件预览：文本直接渲染，其他格式走 file-viewer -->
        <template v-else>
          <!-- 预览加载骨架（#65） -->
          <div v-if="tabLoading" class="pv-skeleton" aria-label="加载中">
            <NSkeleton width="38%" height="13px" :sharp="false" />
            <NSkeleton v-for="i in 7" :key="i" :width="i % 3 === 0 ? '62%' : i % 3 === 1 ? '92%' : '78%'" height="12px" :sharp="false" />
          </div>
          <template v-else-if="activeTabData">
            <div v-if="activeTabData.binary" class="pv-viewer">
              <flyfish-file-viewer
                :key="activeTabData.path"
                :src="downloadUrl(activeTabData.path)"
                :filename="activeTabData.name"
                :options="{ toolbar: false }"
                locale="zh-CN"
                theme="light"
              />
            </div>
            <template v-else>
              <div v-if="activeTabData.truncated" class="file-hint muted">
                {{ activeTabData.note || '文件过大，仅显示部分内容。' }}
                <a :href="downloadUrl(activeTabData.path)" target="_blank" rel="noopener">下载完整文件</a>
              </div>
              <NScrollbar class="pv-scroll">
                <!-- 代码高亮视图（#66）：行号列 + 语言标签；不可高亮时降级纯文本 -->
                <div v-if="hlResult" class="code-view">
                  <span class="code-lang">{{ hlResult.label }}</span>
                  <div class="code-flex">
                    <pre class="code-gutter"><code>{{ hlResult.lines }}</code></pre>
                    <pre class="code-body"><code class="hljs" v-html="hlResult.html"></code></pre>
                  </div>
                </div>
                <pre v-else class="file-content">{{ activeTabData.content }}</pre>
              </NScrollbar>
            </template>
          </template>
        </template>
      </div>
    </aside>

    <ToolConfirm v-if="state.pendingTool" :calls="state.pendingTool" />
  </div>
</template>
