<script setup lang="ts">
// 应用外壳：左侧会话侧栏（全路由常驻）+ 内容区 + 移动端底部菜单。
//
// 布局约定（v2）：
// - 顶部 header 已移除，品牌区移入会话侧栏顶部（新建任务按钮上方）；
// - 会话侧栏提升到外壳层：首页显示会话列表，切换到 专家/自动化/资料库 等
//   功能页时侧栏保留，仅内容区切换（会话项随之取消高亮，菜单项保持高亮）；
// - 移动端（<768px）：侧栏为抽屉（仅会话列表，无菜单导航），
//   页面切换由底部菜单承载（项目 / 专家·技能·连接器 / 自动化 / 资料库 / 灵感）。
import { computed, onMounted, onBeforeUnmount, watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMessage, useDialog } from 'naive-ui'
import {
  BookMarked, Clock, Lightbulb, ListChecks,
  Puzzle,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import { state, newChat, selectConv, deleteConv, renameConv, filteredConvs, closeWs, loadConvs } from '../store'
import { loadRuntime } from '../workbench'
import { logout as doLogout } from '../auth'
import { useBreakpoint } from '../composables/useBreakpoint'
import ConversationSidebar from '../components/ConversationSidebar.vue'

const route = useRoute()
const router = useRouter()
const message = useMessage()
const dialog = useDialog()
const bp = useBreakpoint()

// 桌面端「收起侧边栏」状态：收起后仅显示竖向图标 rail
const sidebarCollapsed = ref(false)
// 移动端抽屉由全局 store 驱动（聊天区顶栏的列表按钮触发）
const overlay = computed(() => bp.isXs)
// 右侧结果面板仅在对话页出现，且可由消息头部 / 移动端 header 的面板开关控制
const showRight = computed(() => route.path === '/' && state.rightOpen)
// 是否渲染侧栏：桌面常驻；移动端仅在抽屉打开时渲染
const sidebarVisible = computed(() => (overlay.value ? state.sidebarOpen : true))
// 桌面收起宽度与展开宽度一致沿用 --sidebar-w / 56px rail
const sidebarCol = computed(() => {
  if (overlay.value) return '0px'
  return sidebarCollapsed.value ? '56px' : 'var(--sidebar-w)'
})

// 跨断点收敛：变窄关抽屉；变宽恢复展开态
watch(
  () => bp.isXs,
  () => {
    state.sidebarOpen = false
    document.body.style.overflow = ''
  },
)
watch(
  () => state.sidebarOpen,
  (open) => {
    if (overlay.value) document.body.style.overflow = open ? 'hidden' : ''
  },
)

// ===================== 侧栏事件（全路由统一在此处理） =====================
function onSelectConv(id: string): void {
  state.sidebarOpen = false
  if (route.path !== '/') router.push('/')
  void selectConv(id)
}
async function onCreate(): Promise<void> {
  state.sidebarOpen = false
  await newChat()
  if (route.path !== '/') router.push('/')
}
function onCollapse(): void {
  if (overlay.value) state.sidebarOpen = false
  else sidebarCollapsed.value = true
}
function onRename(id: string, title: string): void {
  void renameConv(id, title).then(() => message.success('已重命名'))
}
function onDelete(id: string): void {
  void deleteConv(id).then(() => message.success('会话已删除'))
}
function onNav(key: string): void {
  if (key === 'logout') {
    dialog.warning({
      title: '退出登录',
      content: '确定要退出当前账号吗？',
      positiveText: '退出',
      negativeText: '取消',
      onPositiveClick: async () => {
        closeWs()
        await doLogout()
        router.replace('/login')
      },
    })
    return
  }
  const routes: Record<string, string> = {
    experts: '/experts',
    automation: '/automation',
    library: '/library',
    inspiration: '/inspiration',
    settings: '/settings',
    'skill-new': '/experts?new=1',
  }
  const path = routes[key]
  if (!path) return
  state.sidebarOpen = false
  if (route.fullPath !== path) router.push(path)
}

// ===================== 移动端底部菜单（任务 / 专家 / 自动化 / 资料库 / 灵感） =====================
const tabItems: { key: string; label: string; icon: Component; path: string }[] = [
  { key: 'home', label: '任务', icon: ListChecks, path: '/' },
  { key: 'experts', label: '专家·技能·连接器', icon: Puzzle, path: '/experts' },
  { key: 'automation', label: '自动化', icon: Clock, path: '/automation' },
  { key: 'library', label: '资料库', icon: BookMarked, path: '/library' },
  { key: 'inspiration', label: '灵感', icon: Lightbulb, path: '/inspiration' },
]
const activeTab = computed(() => {
  const p = route.path
  if (p === '/') return 'home'
  if (p.startsWith('/experts')) return 'experts'
  if (p.startsWith('/automation')) return 'automation'
  if (p.startsWith('/library')) return 'library'
  if (p.startsWith('/inspiration')) return 'inspiration'
  return ''
})
function onTab(path: string): void {
  if (route.path !== path) router.push(path)
}

// 登录态失效：api.ts 在收到 401 时广播该事件
function onUnauthorized(): void {
  message.warning('登录状态已失效，请重新登录')
  router.replace('/login')
}

onMounted(() => {
  // 会话列表由外壳层加载（#6）：侧栏全路由常驻，直接进入功能页/刷新非首页路由
  // 也要有会话数据与加载骨架，不能只在首页组件里加载（Home 内的轮询保留）
  void loadConvs()
  loadRuntime()
  window.addEventListener('lg:unauthorized', onUnauthorized)
})
onBeforeUnmount(() => {
  window.removeEventListener('lg:unauthorized', onUnauthorized)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="app-root">
    <div class="app-body" :class="{ 'as-overlay': overlay }" :style="{ gridTemplateColumns: overlay ? 'minmax(0,1fr)' : `${sidebarCol} minmax(0,1fr)` }">
      <!-- 移动端抽屉遮罩 -->
      <div v-if="overlay && state.sidebarOpen" class="shell-mask" @click="state.sidebarOpen = false"></div>

      <!-- 列 1：会话侧栏（全路由常驻；桌面可收起为 rail；移动端为抽屉） -->
      <aside v-if="sidebarVisible" class="sidebar" :class="{ 'as-drawer': overlay }">
        <ConversationSidebar
          :convs="filteredConvs()"
          :current="state.current"
          :collapsed="sidebarCollapsed && !overlay"
          :show-nav="!overlay"
          @select="onSelectConv"
          @delete="onDelete"
          @rename="onRename"
          @collapse="onCollapse"
          @expand="sidebarCollapsed = false"
          @new-chat="onCreate"
          @nav="onNav"
        />
      </aside>

      <!-- 列 2：内容区（首页聊天 / 各功能页） -->
      <main class="content">
        <RouterView v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component" :show-right="showRight" />
          </Transition>
        </RouterView>
      </main>
    </div>

    <!-- 移动端底部菜单：任务（当前会话）/ 专家·技能·连接器 / 自动化 / 资料库 / 灵感（用户入口在抽屉底部） -->
    <nav class="tabbar">
      <span
        v-for="t in tabItems"
        :key="t.key"
        class="tab-item"
        :class="{ active: activeTab === t.key }"
        @click="onTab(t.path)"
      >
        <component :is="t.icon" :size="19" class="tab-ico" />
        <span class="tab-label">{{ t.label }}</span>
      </span>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.app-root {
  height: var(--app-h);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.app-body {
  flex: 1;
  display: grid;
  min-height: 0;
  overflow: hidden;
  position: relative;
}
.content { min-width: 0; min-height: 0; overflow: hidden; display: flex; flex-direction: column; }
.content > * { flex: 1; min-height: 0; }

.sidebar {
  background: var(--panel);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
}
/* 移动端：侧栏变抽屉 */
.sidebar.as-drawer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: min(84vw, 300px);
  z-index: 30;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .14);
}
.shell-mask {
  position: absolute;
  inset: 0;
  background: rgba(31, 35, 40, .38);
  z-index: 25;
  animation: fade-in .16s ease;
}
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

/* 移动端底部菜单 */
.tabbar {
  display: none;
}

@media (max-width: 767px) {
  .app-root { height: var(--app-h); }
  .app-body { height: calc(var(--app-h) - var(--tabbar-h)); }
  .tabbar {
    display: flex;
    align-items: stretch;
    height: calc(var(--tabbar-h) + env(safe-area-inset-bottom));
    padding-bottom: env(safe-area-inset-bottom);
    background: var(--panel);
    border-top: 1px solid var(--border);
    flex: 0 0 auto;
  }
  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    color: var(--muted);
    font-size: 10px;
    cursor: pointer;
    user-select: none;
    min-width: 0;
    .tab-ico { flex: 0 0 auto; }
    .tab-label {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 2px;
    }
    &.active { color: var(--accent); }
    &.active .tab-ico { color: var(--accent); }
  }
}
</style>
