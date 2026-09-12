<script setup lang="ts">
// 主界面（对话）：会话列表 + 聊天区 + 右侧结果面板。
// 仿 WorkBuddy：右侧面板支持 展开 / 仅图标 / 收起 三态，可拖拽调宽、可全屏。
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import {
  NButton, NRadioGroup, NRadioButton, NTabs, NTabPane, NScrollbar, NEmpty, useMessage, useDialog,
} from 'naive-ui'
import {
  MessageSquare, ChevronsRight, ChevronsLeft, PanelRightOpen,
  FileText, FolderClosed, GitCompare, Maximize2, Minimize2, Download, Sparkles,
  PanelRight, X, Wand2, Plus, PanelLeft, List,
} from 'lucide-vue-next'
import {
  state, loadConvs, loadSkills, selectConv, newChat, deleteConv,
  sendText, createSkill, setMode, filteredConvs,
} from '../store'
import type { CreateSkillPayload } from '../types'
import { useBreakpoint } from '../composables/useBreakpoint'
import ConversationList from '../components/ConversationList.vue'
import ChatWindow from '../components/ChatWindow.vue'
import FilePanel from '../components/FilePanel.vue'
import ToolConfirm from '../components/ToolConfirm.vue'
import SkillModal from '../components/SkillModal.vue'
import { api } from '../api'

const props = defineProps<{ showRight?: boolean }>()

const message = useMessage()
const dialog = useDialog()
const bp = useBreakpoint()
const showModal = ref(false)

// 右侧面板三态：完全收起 / 只留图标 / 展开
type PanelState = 'full' | 'icons' | 'collapsed'
const panelState = ref<PanelState>('full')
const panelWidth = ref(380)
const resizing = ref(false)
const fullscreen = ref(false)
const tab = ref<'artifacts' | 'files' | 'diff' | 'preview'>('files')

// 会话栏在窄屏变为抽屉：默认关闭，由顶栏/气泡按钮唤出
const sidebarOpen = ref(false)

// 会话栏宽度与右侧面板宽度的上下限：中屏时同步收窄，避免挤压对话区
const sidebarWidth = computed(() => (bp.isLg ? 260 : bp.isMd ? 224 : 208))
const panelMin = computed(() => (bp.isMd ? 260 : 240))
const panelMax = computed(() => (bp.isLg ? 820 : bp.isMd ? 620 : 480))

// 窄屏（<1024）下三列无法并排，右侧面板与会话栏都改为覆盖层
const overlay = computed(() => bp.overlayPanel)

const fileRef = ref<InstanceType<typeof FilePanel> | null>(null)
const selected = computed(() => fileRef.value?.selected ?? null)

// 面板实际占据的宽度：不展开/不在对话页时为 0，图标态为图标条宽度
const panelCol = computed(() => {
  if (!props.showRight || !bp.isMd) return 0
  if (panelState.value === 'collapsed') return 0
  if (panelState.value === 'icons') return 52
  return panelWidth.value
})

// 把面板宽度写回 CSS 变量，供 .app-shell 的覆盖层样式与拖拽时使用
watch(
  [panelCol, sidebarWidth],
  () => {
    const root = document.documentElement
    root.style.setProperty('--panel-w', `${panelCol.value || 320}px`)
    root.style.setProperty('--sidebar-w', `${sidebarWidth.value}px`)
  },
  { immediate: true },
)

const gridTemplate = computed(() => {
  // 覆盖层模式：三列塌缩为单列，两侧以绝对定位浮在内容之上
  if (overlay.value) return 'minmax(0, 1fr)'
  if (!props.showRight) return `${sidebarWidth.value}px minmax(0, 1fr) 0px`
  return `${sidebarWidth.value}px minmax(0, 1fr) ${panelCol.value}px`
})

// 会话栏在桌面端常驻；窄屏仅在抽屉打开时渲染
const sidebarVisible = computed(() => (overlay.value ? sidebarOpen.value : true))
// 右侧面板在窄屏仅在「展开」态渲染，收起时不占位
const panelVisible = computed(() =>
  overlay.value ? props.showRight && panelState.value === 'full' : !!props.showRight,
)

const streaming = computed(() => !!state.live)
const convsFiltered = computed(() => filteredConvs())

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

function openPreview(): void {
  tab.value = 'preview'
  if (panelState.value !== 'full') panelState.value = 'full'
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

// 选择会话后自动收起窄屏抽屉，让对话立刻可见
async function onSelectConv(id: string): Promise<void> {
  sidebarOpen.value = false
  await selectConv(id)
}

async function onCreate(): Promise<void> {
  sidebarOpen.value = false
  await newChat()
}

async function onSubmit(payload: CreateSkillPayload): Promise<void> {
  const r = await createSkill(payload)
  if (r.ok) { showModal.value = false; message.success('技能创建成功') }
  else message.error('创建失败: ' + (r.error || '未知错误'))
}

function onDeleteConv(id: string): void {
  deleteConv(id).then(() => message.success('会话已删除'))
}

function downloadUrl(path: string): string {
  return state.current ? api.rawFileUrl(state.current, path) : '#'
}

// 面板从收起恢复展开时，回到此前停留的标签
watch(
  () => panelState.value,
  (v) => { if (v === 'full') tab.value = tab.value },
)

// 视口变化时的状态收敛：变窄后退出全屏、关抽屉；恢复宽屏后收起浮层
watch(
  () => [bp.isMd, bp.isXs] as const,
  () => {
    if (!bp.isMd) {
      fullscreen.value = false
      // 从宽屏切到窄屏：面板默认保持展开，会话栏默认收起
      sidebarOpen.value = false
    } else {
      sidebarOpen.value = false
      // 回到三栏时，避免面板仍是 collapsed 造成「什么都没有」的错觉
      if (panelState.value === 'collapsed') panelState.value = 'full'
    }
  },
)

function onKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') {
    if (sidebarOpen.value) sidebarOpen.value = false
    else if (fullscreen.value) fullscreen.value = false
  }
}

onMounted(async () => {
  await Promise.all([loadConvs(), loadSkills()])
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
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
    <!-- 窄屏抽屉遮罩：点击或按 Esc 关闭 -->
    <div v-if="overlay && sidebarOpen" class="shell-mask" @click="sidebarOpen = false"></div>

    <!-- 列 1：会话列表（窄屏为抽屉） -->
    <aside v-if="sidebarVisible" class="sidebar">
      <div class="sidebar-head">
        <div class="sidebar-head-row">
          <NButton type="primary" block @click="onCreate">
            <template #icon><Plus :size="16" /></template>
            新建对话
          </NButton>
          <NButton
            v-if="overlay"
            quaternary
            circle
            size="small"
            class="sidebar-close"
            title="收起会话列表"
            @click="sidebarOpen = false"
          >
            <template #icon><X :size="16" /></template>
          </NButton>
        </div>
      </div>
      <ConversationList
        :convs="convsFiltered"
        :current="state.current"
        @select="onSelectConv"
        @delete="onDeleteConv"
      />
      <div class="sidebar-foot">
        <NButton quaternary block @click="showModal = true">
          <template #icon><Wand2 :size="16" /></template>
          新建技能
        </NButton>
      </div>
    </aside>

    <!-- 列 2：对话区 -->
    <section class="main">
      <header class="topbar">
        <div class="topic">
          <!-- 窄屏：唤出会话列表抽屉 -->
          <NButton
            v-if="overlay"
            quaternary
            circle
            size="small"
            class="topic-btn"
            title="会话列表"
            @click="sidebarOpen = true"
          >
            <template #icon><List :size="16" /></template>
          </NButton>
          <MessageSquare v-else :size="15" class="topic-ico" />
          <h1>{{ state.convTitle }}</h1>
        </div>
        <div class="topbar-right">
          <NRadioGroup
            :value="state.mode"
            size="small"
            @update:value="(v: string) => setMode(v as 'auto' | 'confirm')"
          >
            <NRadioButton value="auto">
              <!-- 窄屏只显示首字，避免单选组把标题挤没 -->
              <span class="mode-full">自动</span><span class="mode-abbr">自动</span>
            </NRadioButton>
            <NRadioButton value="confirm">
              <span class="mode-full">确认</span><span class="mode-abbr">确认</span>
            </NRadioButton>
          </NRadioGroup>
          <NButton
            v-if="showRight"
            quaternary
            circle
            size="small"
            :title="panelState === 'collapsed' ? '展开右侧面板' : '收起右侧面板'"
            @click="togglePanel"
          >
            <template #icon>
              <component :is="panelState === 'collapsed' ? ChevronsLeft : ChevronsRight" :size="16" />
            </template>
          </NButton>
        </div>
      </header>

      <ChatWindow @send="sendText" />
    </section>

    <!-- 列 3：结果面板（产物 / 所有文件 / 变更预览 / 文件预览） -->
    <aside
      v-if="panelVisible"
      class="right"
      :class="[`st-${panelState}`, { fullscreen, 'as-overlay': overlay }]"
    >
      <div
        v-if="panelState === 'full' && !overlay"
        class="resize-handle"
        @mousedown.prevent="startResize"
      ></div>

      <!-- 收起态：仅图标条 -->
      <div v-if="panelState === 'icons' && !overlay" class="rail-icons">
        <NButton quaternary circle title="展开：产物" @click="tab = 'artifacts'; panelState = 'full'">
          <template #icon><Sparkles :size="18" /></template>
        </NButton>
        <NButton quaternary circle title="展开：文件" @click="tab = 'files'; panelState = 'full'">
          <template #icon><FolderClosed :size="18" /></template>
        </NButton>
        <NButton quaternary circle title="展开：变更预览" @click="tab = 'diff'; panelState = 'full'">
          <template #icon><GitCompare :size="18" /></template>
        </NButton>
        <NButton quaternary circle title="展开：预览" @click="openPreview(); panelState = 'full'">
          <template #icon><FileText :size="18" /></template>
        </NButton>
        <NButton quaternary circle title="完全展开" @click="panelState = 'full'">
          <template #icon><PanelRightOpen :size="18" /></template>
        </NButton>
      </div>

      <template v-else>
        <div class="panel-tabs">
          <NTabs
            :value="tab"
            type="line"
            size="small"
            class="rp-tabs"
            @update:value="(v: string) => (tab = v as typeof tab)"
          >
            <NTabPane name="artifacts">
              <template #tab><span class="tab-label"><Sparkles :size="14" /> 产物</span></template>
            </NTabPane>
            <NTabPane name="files">
              <template #tab><span class="tab-label"><FolderClosed :size="14" /> 所有文件</span></template>
            </NTabPane>
            <NTabPane name="diff">
              <template #tab><span class="tab-label"><GitCompare :size="14" /> 变更预览</span></template>
            </NTabPane>
            <NTabPane name="preview">
              <template #tab><span class="tab-label"><FileText :size="14" /> 文件预览</span></template>
            </NTabPane>
          </NTabs>
          <div class="rp-actions">
            <NButton quaternary circle size="small" :title="fullscreen ? '退出全屏' : '全屏'" @click="fullscreen = !fullscreen">
              <template #icon>
                <component :is="fullscreen ? Minimize2 : Maximize2" :size="15" />
              </template>
            </NButton>
            <NButton
              v-if="!overlay"
              quaternary
              circle
              size="small"
              title="收起到图标"
              @click="panelState = 'icons'"
            >
              <template #icon><PanelRight :size="15" /></template>
            </NButton>
            <NButton quaternary circle size="small" title="关闭面板" @click="panelState = 'collapsed'">
              <template #icon><X :size="15" /></template>
            </NButton>
          </div>
        </div>

        <!-- 产物 -->
        <div v-if="tab === 'artifacts'" class="artifact-pane">
          <div class="artifact-list">
            <div
              v-for="(a, i) in artifacts"
              :key="i"
              class="artifact-card"
            >
              <span class="ac-ico"><Sparkles :size="15" /></span>
              <span class="ac-body">
                <div class="ac-name">{{ a.name }}</div>
                <div class="ac-meta muted">{{ a.kind }}</div>
              </span>
            </div>
            <NEmpty v-if="!artifacts.length" class="page-empty" description="本轮还没有产生结果" />
          </div>
        </div>

        <!-- 所有文件 -->
        <FilePanel
          v-show="tab === 'files'"
          ref="fileRef"
          @preview="tab = 'preview'"
        />

        <!-- 变更预览 -->
        <div v-if="tab === 'diff'" class="diff-pane">
          <div v-if="selected" class="file-view">
            <div class="file-view-head">
              <span class="file-name"><GitCompare :size="14" /> {{ selected.name }}</span>
              <span class="muted">{{ selected.size }} B</span>
              <NButton quaternary circle size="tiny" tag="a" :href="downloadUrl(selected.path)" target="_blank" title="下载">
                <template #icon><Download :size="14" /></template>
              </NButton>
            </div>
            <NScrollbar class="preview-scroll">
              <pre class="file-content">{{ selected.content }}</pre>
            </NScrollbar>
          </div>
          <NEmpty v-else class="page-empty" description="在「所有文件」中选择一个文本文件即可查看内容" />
        </div>

        <!-- 文件预览 -->
        <div v-if="tab === 'preview'" class="preview-pane">
          <template v-if="selected">
            <div class="file-view-head">
              <span class="file-name">{{ selected.name }}</span>
              <span class="muted">{{ selected.size }} B</span>
              <NButton quaternary circle size="tiny" tag="a" :href="downloadUrl(selected.path)" target="_blank" title="下载">
                <template #icon><Download :size="14" /></template>
              </NButton>
            </div>
            <div v-if="selected.binary" class="file-hint muted">{{ selected.note || '二进制文件，无法直接预览，请下载。' }}</div>
            <div v-else-if="selected.truncated" class="file-hint muted">{{ selected.note || '文件过大，仅显示部分内容。' }}</div>
            <NScrollbar v-else class="preview-scroll">
              <pre class="file-content">{{ selected.content }}</pre>
            </NScrollbar>
          </template>
          <NEmpty v-else class="page-empty" description="在「所有文件」中点击一个文本文件即可在此预览" />
        </div>
      </template>
    </aside>

    <SkillModal :open="showModal" @close="showModal = false" @submit="onSubmit" />
    <ToolConfirm v-if="state.pendingTool" :calls="state.pendingTool" />
  </div>
</template>
