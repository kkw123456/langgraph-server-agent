<script setup lang="ts">
// 主界面（对话）：聊天区 + 右侧结果面板。
// 会话侧栏已提升到 Shell（全路由常驻），本组件只承载中间对话与右侧面板两列。
// 右面板：左侧竖向图标（产物/所有文件/变更预览）+ 手写多标签文件预览（file-viewer 渲染非文本）。
// 无预览标签时功能面板常驻主体；有预览时 hover 左侧图标下拉出对应面板。
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
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  NButton, NScrollbar, NEmpty, useMessage,
} from 'naive-ui'
import {
  ChevronsRight, ChevronsLeft,
  FileText, FolderClosed, GitCompare, Maximize2, Minimize2, Sparkles,
  X, List,
} from 'lucide-vue-next'
import {
  state, loadConvs, loadSkills, selectConv, newChat,
  sendText,
} from '../store'
import { toolLabel } from '../utils/toolLabels'
import { useBreakpoint } from '../composables/useBreakpoint'
import ChatWindow from '../components/ChatWindow.vue'
import FilePanel from '../components/FilePanel.vue'
import ToolConfirm from '../components/ToolConfirm.vue'
import { api } from '../api'

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
type SideView = 'artifacts' | 'files' | 'diff'
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

// 左侧功能图标（产物 / 所有文件 / 变更预览）
const sideIcons: { key: SideView; label: string; icon: unknown }[] = [
  { key: 'artifacts', label: '产物', icon: Sparkles },
  { key: 'files', label: '所有文件', icon: FolderClosed },
  { key: 'diff', label: '变更预览', icon: GitCompare },
]

/** 打开/切换文件预览标签：已存在直接切换，否则拉取内容后新开。 */
async function openPreviewTab(path: string): Promise<void> {
  if (!state.current) return
  if (openTabs.value.some((t) => t.path === path)) {
    activeTab.value = path
    return
  }
  tabLoading.value = true
  try {
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
  } finally {
    tabLoading.value = false
  }
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

// 面板实际占据的宽度：收起为 0
const panelCol = computed(() => {
  if (!props.showRight || !bp.isMd) return 0
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
    <!-- 列 1：对话区（无 header；浮动按钮：移动端唤出抽屉 / 右面板切换） -->
    <section class="main">
      <NButton
        v-if="overlay"
        quaternary
        circle
        size="small"
        class="float-btn drawer-btn"
        title="会话列表"
        @click="state.sidebarOpen = true"
      >
        <template #icon><List :size="16" /></template>
      </NButton>
      <NButton
        v-if="showRight"
        quaternary
        circle
        size="small"
        class="float-btn panel-handle"
        :title="panelState === 'collapsed' ? '展开右侧面板' : '收起右侧面板'"
        @click="togglePanel"
      >
        <template #icon>
          <component :is="panelState === 'collapsed' ? ChevronsLeft : ChevronsRight" :size="16" />
        </template>
      </NButton>

      <ChatWindow @send="sendText" />
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

      <!-- 头部：有预览标签时功能图标移到头部（hover 下拉面板），中间是手写预览 tabs -->
      <div class="panel-head">
        <template v-if="activeTabData">
          <div v-for="v in sideIcons" :key="v.key" class="ph-host">
            <button class="ph-ico" :title="v.label" @click="showSide(v.key)">
              <component :is="v.icon" :size="16" />
            </button>
            <!-- hover 下拉出对应功能面板 -->
            <div class="ph-fly">
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
          <div class="pv-tabs">
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
        </template>
        <div class="rp-actions">
          <NButton quaternary circle size="small" :title="fullscreen ? '退出全屏' : '全屏'" @click="fullscreen = !fullscreen">
            <template #icon>
              <component :is="fullscreen ? Minimize2 : Maximize2" :size="15" />
            </template>
          </NButton>
          <NButton quaternary circle size="small" title="收起面板" @click="panelState = 'collapsed'">
            <template #icon><X :size="15" /></template>
          </NButton>
        </div>
      </div>

      <!-- 主体 -->
      <div class="rp-wrap">
        <!-- 无预览标签：左侧功能图标条 + 对应面板常驻（即「下拉放到面板里面」） -->
        <template v-if="!activeTabData">
          <div class="rp-side">
            <button
              v-for="v in sideIcons"
              :key="v.key"
              class="rp-side-ico"
              :class="{ active: sideView === v.key }"
              :title="v.label"
              @click="sideView = v.key"
            >
              <component :is="v.icon" :size="17" />
            </button>
          </div>
          <div class="rp-content">
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
        </template>
        <!-- 文件预览：文本直接渲染，其他格式走 file-viewer -->
        <template v-else>
          <div v-if="tabLoading" class="file-hint muted">加载中…</div>
          <template v-else-if="activeTabData">
            <div v-if="activeTabData.binary" class="pv-viewer">
              <flyfish-file-viewer
                :key="activeTabData.path"
                :src="downloadUrl(activeTabData.path)"
                :filename="activeTabData.name"
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
                <pre class="file-content">{{ activeTabData.content }}</pre>
              </NScrollbar>
            </template>
          </template>
        </template>
      </div>
    </aside>

    <ToolConfirm v-if="state.pendingTool" :calls="state.pendingTool" />
  </div>
</template>
