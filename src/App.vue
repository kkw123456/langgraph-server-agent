<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { MessageSquare, Puzzle, Settings, ChevronsRight, ChevronsLeft, FolderClosed, Eye } from 'lucide-vue-next'
import {
  state, loadConvs, loadSkills, selectConv, newChat, deleteConv,
  sendText, toggleSkill, removeSkill, reloadSkills, createSkill, setMode, resolveTool,
} from './store'
import type { CreateSkillPayload } from './types'
import ConversationList from './components/ConversationList.vue'
import ChatWindow from './components/ChatWindow.vue'
import SkillManager from './components/SkillManager.vue'
import SkillModal from './components/SkillModal.vue'
import RightPanel from './components/RightPanel.vue'
import ToolConfirm from './components/ToolConfirm.vue'

const view = ref<'chat' | 'skills'>('chat')
const showModal = ref(false)

// 右侧面板：完全收起 / 部分收起（只留图标）/ 展开；可拖拽调宽
type PanelState = 'full' | 'icons' | 'collapsed'
const panelState = ref<PanelState>('full')
const panelWidth = ref(360)
const resizing = ref(false)

const gridTemplate = computed(() => {
  if (panelState.value === 'collapsed') return '260px 1fr 0px'
  if (panelState.value === 'icons') return '260px 1fr 52px'
  return `260px 1fr ${panelWidth.value}px`
})

function togglePanel(): void {
  panelState.value = panelState.value === 'collapsed' ? 'full' : 'collapsed'
}

function startResize(e: MouseEvent): void {
  if (panelState.value !== 'full') return
  resizing.value = true
  const startX = e.clientX
  const startW = panelWidth.value
  const onMove = (ev: MouseEvent) => {
    panelWidth.value = Math.min(760, Math.max(260, startW + (startX - ev.clientX)))
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

onMounted(async () => {
  await Promise.all([loadConvs(), loadSkills()])
})
onBeforeUnmount(() => { document.body.style.userSelect = '' })

async function onSubmit(payload: CreateSkillPayload): Promise<void> {
  const r = await createSkill(payload)
  if (r.ok) showModal.value = false
  else alert('创建失败: ' + (r.error || '未知错误'))
}
</script>

<template>
  <div class="app-shell" :style="{ gridTemplateColumns: gridTemplate }" :class="{ resizing }">
    <!-- 左侧：会话列表（顶部为「新建对话」） -->
    <aside class="sidebar">
      <div class="sidebar-head">
        <button class="new-chat" @click="newChat">
          <MessageSquare :size="16" /> 新建对话
        </button>
      </div>
      <ConversationList
        :convs="state.convs"
        :current="state.current"
        @select="selectConv"
        @delete="deleteConv"
      />
      <div class="sidebar-foot">
        <button
          class="tab-btn"
          :class="{ active: view === 'skills' }"
          @click="view = 'skills'"
        >
          <Puzzle :size="16" /> 技能管理
        </button>
      </div>
    </aside>

    <!-- 中间：顶栏 + 主区域（聊天 / 技能管理页） -->
    <section class="main">
      <header class="topbar">
        <nav class="menu">
          <button class="menu-item" :class="{ active: view === 'chat' }" @click="view = 'chat'">
            <MessageSquare :size="16" /> 对话
          </button>
          <button class="menu-item" :class="{ active: view === 'skills' }" @click="view = 'skills'">
            <Puzzle :size="16" /> 技能管理
          </button>
        </nav>
        <div class="topbar-right">
          <span v-if="state.warn" class="warn-badge">{{ state.warn }}</span>
          <div class="mode-toggle" title="工具调用权限模式">
            <button :class="{ on: state.mode === 'auto' }" @click="setMode('auto')">自动</button>
            <button :class="{ on: state.mode === 'confirm' }" @click="setMode('confirm')">确认</button>
          </div>
          <span class="status" :class="{ on: state.status.includes('●') }">{{ state.status }}</span>
          <button class="ghost icon-btn" :title="panelState === 'collapsed' ? '展开右侧面板' : '收起右侧面板'" @click="togglePanel">
            <component :is="panelState === 'collapsed' ? ChevronsLeft : ChevronsRight" :size="16" />
          </button>
        </div>
      </header>

      <ChatWindow v-show="view === 'chat'" @send="sendText" />

      <SkillManager
        v-show="view === 'skills'"
        :skills="state.skills"
        @toggle="toggleSkill"
        @remove="removeSkill"
        @reload="reloadSkills"
        @add="showModal = true"
      />
    </section>

    <!-- 右侧：文件 / 预览 面板（可收起、可拖拽调宽、内部可全屏） -->
    <RightPanel
      :panel-state="panelState"
      @expand="panelState = 'full'"
      @collapse="panelState = 'collapsed'"
      @toggle-icons="panelState = panelState === 'icons' ? 'full' : 'icons'"
      @resize-start="startResize"
    />
  </div>

  <SkillModal :open="showModal" @close="showModal = false" @submit="onSubmit" />
  <ToolConfirm v-if="state.pendingTool" :calls="state.pendingTool" />
</template>
