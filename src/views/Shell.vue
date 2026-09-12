<script setup lang="ts">
// 应用外壳：仿 WorkBuddy 的「顶部工具栏 + 左侧竖向图标导航 + 内容区」。
//
// 内容区由 vue-router 承载，图标导航即路由入口，因此每个入口都是真页面，
// 而不是仅做样式的占位。右侧结果面板只在对话页出现，其余页面独占内容区。
import { computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NButton, NSelect, NInput, NIcon, NTooltip, useMessage, useDialog } from 'naive-ui'
import {
  Bot, Plus, Sparkles, Users, FolderClosed, Puzzle, Clock, MoreHorizontal,
  BookMarked, Lightbulb, Search, LogOut, User, Plug, Settings,
} from 'lucide-vue-next'
import { state, newChat } from '../store'
import { wb, loadRuntime, setModel } from '../workbench'
import { authState } from '../auth'
import { logout as doLogout } from '../auth'

const route = useRoute()
const router = useRouter()
const message = useMessage()
const dialog = useDialog()

// 左侧竖向导航：与 WorkBuddy 一致，底部单独放资料库/灵感
const navMain = [
  { key: 'new', icon: Plus, label: '新建任务' },
  { key: 'assistant', icon: Sparkles, label: '助理' },
  { key: 'projects', icon: FolderClosed, label: '项目' },
  { key: 'experts', icon: Puzzle, label: '专家 · 技能 · 连接器' },
  { key: 'automation', icon: Clock, label: '自动化' },
  { key: 'more', icon: MoreHorizontal, label: '更多' },
]
const navBottom = [
  { key: 'library', icon: BookMarked, label: '资料库' },
  { key: 'inspiration', icon: Lightbulb, label: '灵感' },
]

// 当前激活的导航项：由路由路径反查
const activeKey = computed(() => {
  const p = route.path
  if (p.startsWith('/projects')) return 'projects'
  if (p.startsWith('/experts')) return 'experts'
  if (p.startsWith('/automation')) return 'automation'
  if (p.startsWith('/library')) return 'library'
  if (p.startsWith('/settings')) return 'settings'
  if (p.startsWith('/inspiration')) return 'inspiration'
  return 'assistant'
})

const showRight = computed(() => route.path === '/')
const modelOptions = computed(() =>
  (wb.runtime.models.length ? wb.runtime.models : [wb.runtime.model]).filter(Boolean)
    .map((m) => ({ label: m, value: m })),
)

const kw = computed({
  get: () => state.searchKw,
  set: (v: string) => { state.searchKw = v },
})

async function onNav(key: string): Promise<void> {
  if (key === 'new') {
    await newChat()
    if (route.path !== '/') router.push('/')
    return
  }
  if (key === 'settings') { router.push('/settings'); return }
  if (key === 'more') { router.push('/settings'); return }
  router.push(`/${key}`)
}

async function onModel(v: string): Promise<void> {
  if (v && v !== wb.runtime.model) await setModel(v)
}

function onLogout(): void {
  dialog.warning({
    title: '退出登录',
    content: '确定要退出当前账号吗？',
    positiveText: '退出',
    negativeText: '取消',
    onPositiveClick: async () => {
      await doLogout()
      router.replace('/login')
    },
  })
}

// 登录态失效：api.ts 在收到 401 时广播该事件
function onUnauthorized(): void {
  message.warning('登录状态已失效，请重新登录')
  router.replace('/login')
}

onMounted(() => {
  loadRuntime()
  window.addEventListener('lg:unauthorized', onUnauthorized)
})
onBeforeUnmount(() => window.removeEventListener('lg:unauthorized', onUnauthorized))
</script>

<template>
  <div class="app-root">
    <!-- 顶部工具栏：品牌 / 模型切换 / 任务搜索 / 用户 -->
    <header class="toolbar">
      <div class="tb-brand">
        <span class="tb-logo"><Bot :size="16" /></span>
        <b>LangGraph 工作台</b>
      </div>

      <NSelect
        class="tb-model"
        size="small"
        :value="wb.runtime.model"
        :options="modelOptions"
        :consistent-menu-width="false"
        placeholder="选择模型"
        @update:value="onModel"
      />

      <NInput
        v-model:value="kw"
        class="tb-search"
        size="small"
        placeholder="搜索任务、项目、资料…"
        clearable
      >
        <template #prefix><NIcon :component="Search" /></template>
      </NInput>

      <div class="tb-right">
        <span class="status" :class="{ on: state.status.includes('●') }">{{ state.status }}</span>
        <NTooltip>
          <template #trigger>
            <NButton quaternary circle size="small" @click="router.push('/settings')">
              <template #icon><Settings :size="16" /></template>
            </NButton>
          </template>
          设置
        </NTooltip>
        <NButton
          v-if="authState.enabled"
          quaternary
          size="small"
          class="user-btn"
          :title="`当前用户：${authState.username || '未知'}，点击退出登录`"
          @click="onLogout"
        >
          <template #icon><User :size="15" /></template>
          <span class="uname">{{ authState.username }}</span>
          <LogOut :size="13" class="logout-glyph" />
        </NButton>
      </div>
    </header>

    <div class="app-body">
      <!-- 左侧竖向图标导航 -->
      <nav class="rail">
        <div
          v-for="n in navMain"
          :key="n.key"
          class="nav-item"
          :class="{ active: activeKey === n.key }"
          @click="onNav(n.key)"
        >
          <component :is="n.icon" :size="19" />
          <span class="nav-tip">{{ n.label }}</span>
        </div>

        <div class="rail-spacer"></div>

        <div
          v-for="n in navBottom"
          :key="n.key"
          class="nav-item"
          :class="{ active: activeKey === n.key }"
          @click="onNav(n.key)"
        >
          <component :is="n.icon" :size="19" />
          <span class="nav-tip">{{ n.label }}</span>
        </div>
        <div class="nav-item" :title="'连接器'" @click="router.push('/experts')">
          <Plug :size="19" />
          <span class="nav-tip">连接器</span>
        </div>
      </nav>

      <!-- 内容区：由路由决定 -->
      <main class="content">
        <RouterView v-slot="{ Component }">
          <component :is="Component" :show-right="showRight" />
        </RouterView>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* 内容区在四区布局下不再额外留白，由页内 .page / .app-shell 自行控制 */
.content > * { flex: 1; min-height: 0; }
</style>
