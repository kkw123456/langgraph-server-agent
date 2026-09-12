<script setup lang="ts">
// 应用外壳：仿 WorkBuddy 的「顶部工具栏 + 左侧竖向图标导航 + 内容区」。
//
// 内容区由 vue-router 承载，图标导航即路由入口，因此每个入口都是真页面，
// 而不是仅做样式的占位。右侧结果面板只在对话页出现，其余页面独占内容区。
//
// 自适应策略（断点见 composables/useBreakpoint.ts）：
//   ≥768px  左侧竖向图标条常驻，悬浮显示中文标签
//   <768px  图标条变为底部 Tab 栏，顶栏出现汉堡按钮唤出抽屉导航
// 顶栏内的搜索框、模型选择器、状态文字、用户名按可用宽度逐级收起。
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NButton, NSelect, NInput, NIcon, NTooltip, useMessage, useDialog } from 'naive-ui'
import {
  Bot, Plus, Sparkles, Users, FolderClosed, Puzzle, Clock, MoreHorizontal,
  BookMarked, Lightbulb, Search, LogOut, User, Plug, Settings, Menu, X,
} from 'lucide-vue-next'
import { state, newChat } from '../store'
import { wb, loadRuntime, setModel } from '../workbench'
import { authState } from '../auth'
import { logout as doLogout } from '../auth'
import { useBreakpoint } from '../composables/useBreakpoint'

const route = useRoute()
const router = useRouter()
const message = useMessage()
const dialog = useDialog()
const bp = useBreakpoint()

// 抽屉导航：仅在窄屏（<768px）由顶栏汉堡按钮唤出
const drawer = ref(false)

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

// 抽屉里展示的完整导航项：合并主/次导航，附带图标便于扫读
const drawerNav = computed(() => [
  ...navMain,
  ...navBottom,
  { key: 'settings', icon: Settings, label: '设置' },
])

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

// 侧栏/抽屉切换时禁止内容区滚动穿透（移动端常见问题）
watch(drawer, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const kw = computed({
  get: () => state.searchKw,
  set: (v: string) => { state.searchKw = v },
})

async function onNav(key: string): Promise<void> {
  drawer.value = false
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

// 断点跨越 768px 时关闭抽屉，避免桌面端残留遮罩
watch(() => bp.isMd, (isWide) => { if (isWide) drawer.value = false })

// 视口尺寸变化时退出右侧面板的全屏态，避免残留覆盖整个屏幕
function onViewportChange(): void {
  if (bp.isXs) drawer.value = false
}

onMounted(() => {
  loadRuntime()
  window.addEventListener('lg:unauthorized', onUnauthorized)
  window.addEventListener('orientationchange', onViewportChange, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('lg:unauthorized', onUnauthorized)
  window.removeEventListener('orientationchange', onViewportChange)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="app-root">
    <!-- 顶部工具栏：品牌 / 模型切换 / 任务搜索 / 用户 -->
    <header class="toolbar">
      <!-- 窄屏：汉堡按钮唤出抽屉导航 -->
      <NButton
        v-if="!bp.isSm"
        class="tb-burger"
        quaternary
        circle
        size="small"
        title="导航菜单"
        @click="drawer = true"
      >
        <template #icon><Menu :size="17" /></template>
      </NButton>

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
      <!-- 左侧竖向图标导航（<768px 时由 CSS 转为底部 Tab 栏） -->
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
        <div class="nav-item" :title="'连接器'" @click="onNav('experts')">
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

    <!-- 窄屏抽屉导航：覆盖层 + 右侧滑入面板 -->
    <Teleport to="body">
      <div v-if="drawer" class="drawer-mask" @click="drawer = false"></div>
      <aside v-if="drawer" class="drawer-panel" role="dialog" aria-label="导航菜单">
        <div class="drawer-head">
          <span class="drawer-brand">
            <span class="tb-logo"><Bot :size="16" /></span>
            <b>导航</b>
          </span>
          <NButton quaternary circle size="small" title="关闭" @click="drawer = false">
            <template #icon><X :size="16" /></template>
          </NButton>
        </div>
        <div class="drawer-list">
          <div
            v-for="n in drawerNav"
            :key="n.key"
            class="drawer-item"
            :class="{ active: activeKey === n.key }"
            @click="onNav(n.key)"
          >
            <component :is="n.icon" :size="18" />
            <span>{{ n.label }}</span>
          </div>
        </div>
        <div class="drawer-foot">
          <NSelect
            size="small"
            :value="wb.runtime.model"
            :options="modelOptions"
            :consistent-menu-width="false"
            placeholder="选择模型"
            @update:value="onModel"
          />
        </div>
      </aside>
    </Teleport>
  </div>
</template>

<style scoped>
/* 内容区在四区布局下不再额外留白，由页内 .page / .app-shell 自行控制 */
.content > * { flex: 1; min-height: 0; }

/* ---- 抽屉导航（仅窄屏使用） ---- */
.drawer-mask {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(31, 35, 40, .42);
  animation: fade-mask .16s ease;
}
@keyframes fade-mask { from { opacity: 0; } to { opacity: 1; } }

.drawer-panel {
  position: fixed; top: 0; bottom: 0; left: 0; z-index: 201;
  width: min(78vw, 288px);
  display: flex; flex-direction: column;
  background: var(--panel); border-right: 1px solid var(--border);
  box-shadow: 0 12px 40px rgba(0, 0, 0, .18);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  animation: slide-mask .2s cubic-bezier(.2, .8, .25, 1);
}
@keyframes slide-mask {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
}

.drawer-head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 8px; padding: 12px; border-bottom: 1px solid var(--border);
}
.drawer-brand { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; }

.drawer-list { flex: 1; overflow-y: auto; padding: 8px; min-height: 0; }
.drawer-item {
  display: flex; align-items: center; gap: 10px;
  padding: 11px 12px; border-radius: 10px; cursor: pointer;
  color: var(--text); font-size: 14px; margin-bottom: 2px;
}
.drawer-item:hover { background: var(--hover); }
.drawer-item.active { background: var(--accent-weak); color: var(--accent); font-weight: 500; }

.drawer-foot { padding: 10px 12px; border-top: 1px solid var(--border); }
</style>
