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
  PanelRight, X, Wand2, Plus,
} from 'lucide-vue-next'
import {
  state, loadConvs, loadSkills, selectConv, newChat, deleteConv,
  sendText, createSkill, setMode, filteredConvs,
} from '../store'
import type { CreateSkillPayload } from '../types'
import ConversationList from '../components/ConversationList.vue'
import ChatWindow from '../components/ChatWindow.vue'
import FilePanel from '../components/FilePanel.vue'
import ToolConfirm from '../components/ToolConfirm.vue'
import SkillModal from '../components/SkillModal.vue'
import { api } from '../api'

const props = defineProps<{ showRight?: boolean }>()

const message = useMessage()
const dialog = useDialog()
const showModal = ref(false)

// 右侧面板三态：完全收起 / 只留图标 / 展开
type PanelState = 'full' | 'icons' | 'collapsed'
const panelState = ref<PanelState>('full')
const panelWidth = ref(380)
const resizing = ref(false)
const fullscreen = ref(false)
const tab = ref<'artifacts' | 'files' | 'diff' | 'preview'>('files')

const fileRef = ref<InstanceType<typeof FilePanel> | null>(null)
const selected = computed(() => fileRef.value?.selected ?? null)

const gridTemplate = computed(() => {
  if (!props.showRight) return '260px 1fr 0px'
  if (panelState.value === 'collapsed') return '260px 1fr 0px'
  if (panelState.value === 'icons') return '260px 1fr 52px'
  return `260px 1fr ${panelWidth.value}px`
})

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
    panelWidth.value = Math.min(820, Math.max(260, startW + (startX - ev.clientX)))
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

onMounted(async () => {
  await Promise.all([loadConvs(), loadSkills()])
})
onBeforeUnmount(() => { document.body.style.userSelect = '' })
</script>

<template>
  <div class="app-shell" :style="{ gridTemplateColumns: gridTemplate }" :class="{ resizing }">
    <!-- 列 1：会话列表 -->
    <aside class="sidebar">
      <div class="sidebar-head">
        <NButton type="primary" block @click="newChat">
          <template #icon><Plus :size="16" /></template>
          新建对话
        </NButton>
      </div>
      <ConversationList
        :convs="convsFiltered"
        :current="state.current"
        @select="selectConv"
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
          <MessageSquare :size="15" class="topic-ico" />
          <h1>{{ state.convTitle }}</h1>
        </div>
        <div class="topbar-right">
          <NRadioGroup
            :value="state.mode"
            size="small"
            @update:value="(v: string) => setMode(v as 'auto' | 'confirm')"
          >
            <NRadioButton value="auto">自动</NRadioButton>
            <NRadioButton value="confirm">确认</NRadioButton>
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
      v-if="showRight"
      class="right"
      :class="[`st-${panelState}`, { fullscreen }]"
    >
      <div
        v-if="panelState === 'full'"
        class="resize-handle"
        @mousedown.prevent="startResize"
      ></div>

      <!-- 收起态：仅图标条 -->
      <div v-if="panelState === 'icons'" class="rail-icons">
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
            <NButton quaternary circle size="small" title="收起到图标" @click="panelState = 'icons'">
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
