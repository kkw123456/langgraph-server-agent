<script setup lang="ts">
// 左侧会话侧栏（仿 WorkBuddy），两种形态：
//   展开 sidebar：品牌区 → 收起/搜索顶栏 → 菜单导航（平铺，无「更多」）→ 按时间分组的会话卡片
//                 （图标 + 标题 + 相对时间 + 悬浮更多操作）→ 底部用户菜单。
//   收起 rail：   品牌图标 → 展开按钮 / 新建任务 / 会话列表，
//                 hover 显示 tooltip；会话列表项 hover 向右下拉出分组会话面板。
// 会话操作：点击选中、双击标题行内重命名、更多菜单里重命名/删除。
// 移动端抽屉形态：showNav=false 隐藏菜单导航，仅保留会话列表与用户菜单。
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NAvatar, NButton, NDropdown, NEmpty, NInput, NSkeleton, useDialog } from 'naive-ui'
import type { DropdownOption } from 'naive-ui'
import {
  Bell, BookMarked, Bot, Clock, Lightbulb, Loader2, MessageSquare, MoreHorizontal,
  PanelLeftClose, PanelLeftOpen, Plus, Puzzle, Search,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import type { Conversation } from '../types'
import { authState } from '../auth'
import { state } from '../store'

const props = defineProps<{ convs: Conversation[]; current: string | null; collapsed?: boolean; showNav?: boolean }>()
const emit = defineEmits<{
  select: [id: string]
  delete: [id: string]
  rename: [id: string, title: string]
  collapse: []  // 展开态顶栏：收起侧边栏
  expand: []    // 收起态 rail：展开侧边栏
  newChat: []
  nav: [key: string]
}>()

const route = useRoute()
const router = useRouter()
const dialog = useDialog()
const showNav = computed(() => props.showNav !== false)

// 是否处于首页（聊天视图）：离开首页（功能页）时侧栏里会话项取消高亮，仅菜单高亮
const isHome = computed(() => route.path === '/')

// ===================== 品牌区：logo + 名称，点击回主页 =====================
function goHome(): void {
  if (route.path !== '/') router.push('/')
}

// ===================== 顶栏搜索 =====================
const searchOpen = ref(false)
const kw = ref('')
function toggleSearch(): void {
  searchOpen.value = !searchOpen.value
  if (!searchOpen.value) kw.value = ''
}

// ===================== 时间分组（最近 / 一周内 / 更早） =====================
const DAY = 86_400_000
const groups = computed(() => {
  const k = kw.value.trim().toLowerCase()
  const list = props.convs.filter((c) => !k || (c.title || '').toLowerCase().includes(k))
  const g = [
    { label: '最近', items: [] as Conversation[] },
    { label: '一周内', items: [] as Conversation[] },
    { label: '更早', items: [] as Conversation[] },
  ]
  const now = Date.now()
  for (const c of list) {
    const age = now - (c.updated_at ? c.updated_at * 1000 : now)
    if (age < DAY) g[0].items.push(c)
    else if (age < 7 * DAY) g[1].items.push(c)
    else g[2].items.push(c)
  }
  return g.filter((x) => x.items.length > 0)
})
const hasConvs = computed(() => groups.value.length > 0)

/** 相对时间：刚刚 / N 分钟前 / N 小时前 / N 天前 / M月D日 */
function relTime(ts?: number): string {
  if (!ts) return ''
  const diff = Date.now() - ts * 1000
  if (diff < 60e3) return '刚刚'
  if (diff < 3600e3) return `${Math.floor(diff / 60e3)}分钟前`
  if (diff < 86_400e3) return `${Math.floor(diff / 3600e3)}小时前`
  if (diff < 7 * 86_400e3) return `${Math.floor(diff / 86_400e3)}天前`
  const d = new Date(ts * 1000)
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

// ===================== 菜单导航（平铺，无「更多」下拉） =====================
interface NavItem { key: string; label: string; icon: Component; primary?: boolean }
// PC 左侧菜单精简：不展示 新建技能 / 设置 / 项目（设置保留在底部用户菜单，项目移动端 header 提供）
const navItems: NavItem[] = [
  { key: 'new', label: '新建任务', icon: Plus, primary: true },
  { key: 'experts', label: '专家·技能·连接器', icon: Puzzle },
  { key: 'automation', label: '自动化', icon: Clock },
  { key: 'library', label: '资料库', icon: BookMarked },
  { key: 'inspiration', label: '灵感', icon: Lightbulb },
]
// 当前路由对应的高亮项（与 Shell 的 activeKey 规则一致）
const activeNav = computed(() => {
  const p = route.path
  if (p.startsWith('/experts')) return 'experts'
  if (p.startsWith('/automation')) return 'automation'
  if (p.startsWith('/library')) return 'library'
  if (p.startsWith('/inspiration')) return 'inspiration'
  if (p.startsWith('/settings')) return 'settings'
  return ''
})
function onNavClick(item: NavItem): void {
  if (item.key === 'new') emit('newChat')
  else emit('nav', item.key)
}

// ===================== 行内重命名（双击标题触发） =====================
const renamingId = ref<string | null>(null)
const renameText = ref('')
function startRename(c: Conversation): void {
  renamingId.value = c.id
  renameText.value = c.title
}
function confirmRename(): void {
  if (!renamingId.value) return
  const t = renameText.value.trim()
  if (t) emit('rename', renamingId.value, t)
  renamingId.value = null
}
function cancelRename(): void {
  renamingId.value = null
}

// ===================== 会话卡片「更多」菜单 =====================
const itemOptions: DropdownOption[] = [
  { label: '重命名', key: 'rename' },
  { label: '删除', key: 'delete' },
]
function onItemAction(id: string, key: string | number): void {
  if (key === 'rename') {
    const c = props.convs.find((x) => x.id === id)
    if (c) startRename(c)
  } else if (key === 'delete') {
    dialog.warning({
      title: '删除会话',
      content: '删除后无法恢复，确定删除该会话吗？',
      positiveText: '删除',
      negativeText: '取消',
      onPositiveClick: () => emit('delete', id),
    })
  }
}

// ===================== 底部用户菜单 =====================
const userOptions: DropdownOption[] = [
  { label: '设置', key: 'settings' },
  { label: '退出登录', key: 'logout' },
]
const uname = computed(() => authState.username || 'admin')
function onUser(key: string | number): void {
  emit('nav', String(key))
}
</script>

<template>
  <!-- ============ 收起态：竖向图标 rail ============ -->
  <div v-if="collapsed" class="cs-rail">
    <span class="cs-rail-item cs-rail-brand" title="LangGraph 工作台" @click="goHome">
      <span class="cs-logo"><Bot :size="15" /></span>
    </span>
    <span class="cs-rail-item" @click="$emit('expand')">
      <PanelLeftOpen :size="18" />
      <span class="cs-tip">展开侧边栏</span>
    </span>
    <span class="cs-rail-item cs-rail-primary" @click="$emit('newChat')">
      <Plus :size="18" />
      <span class="cs-tip">新建任务</span>
    </span>

    <!-- 会话列表：hover 向右下拉出分组会话面板 -->
    <div class="cs-flyout-host">
      <span class="cs-rail-item">
        <MessageSquare :size="18" />
        <span class="cs-tip">会话列表</span>
      </span>
      <div class="cs-flyout">
        <div class="cs-fly-head">会话列表</div>
      <div class="cs-fly-body">
        <!-- 首次加载骨架（#61） -->
        <div v-if="state.convsLoading" class="cs-skeleton" aria-label="加载中">
          <div v-for="i in 4" :key="i" class="cs-skel-item">
            <NSkeleton circle size="small" class="cs-skel-ico" />
            <div class="cs-skel-main">
              <NSkeleton :width="150 - i * 12" height="12px" :sharp="false" />
              <NSkeleton :width="64" height="10px" :sharp="false" />
            </div>
          </div>
        </div>
        <template v-else>
          <div v-for="g in groups" :key="g.label" class="cs-fly-group">
            <div class="cs-fly-group-title">{{ g.label }}</div>
            <div
              v-for="c in g.items"
              :key="c.id"
              class="cs-fly-item"
              :class="{ active: isHome && c.id === current }"
              @click="$emit('select', c.id)"
            >
              <MessageSquare :size="14" class="cs-fly-ico" />
              <div class="cs-fly-main">
                <div class="cs-fly-title">{{ c.title }}</div>
                <div class="cs-fly-time">{{ relTime(c.updated_at) }}</div>
              </div>
              <Loader2 v-if="c.running" :size="13" class="spin cs-run-ico" title="正在回复" />
            </div>
          </div>
          <NEmpty
            v-if="!hasConvs"
            class="cs-empty"
            size="small"
            description="暂无会话"
          />
        </template>
      </div>
      </div>
    </div>

    <!-- 底部用户 icon：hover 弹出用户菜单 -->
    <div class="cs-rail-spacer"></div>
    <NDropdown trigger="hover" placement="right-end" :options="userOptions" @select="onUser">
      <span class="cs-rail-item cs-rail-user">
        <NAvatar round :size="28" class="cs-avatar">{{ uname.slice(0, 1).toUpperCase() }}</NAvatar>
        <span class="cs-tip">{{ uname }}</span>
      </span>
    </NDropdown>
  </div>

  <!-- ============ 展开态：完整侧栏 ============ -->
  <div v-else class="cs-root">
    <!-- 品牌区：logo + 名称（位于新建任务上方），点击回主页 -->
    <div class="cs-brand" @click="goHome">
      <span class="cs-logo"><Bot :size="15" /></span>
      <b class="cs-brand-name">LangGraph 工作台</b>
    </div>

    <!-- 顶栏：收起侧边栏 / 搜索 -->
    <div class="cs-topbar">
      <NButton quaternary circle size="small" title="收起侧边栏" @click="$emit('collapse')">
        <template #icon><PanelLeftClose :size="16" /></template>
      </NButton>
      <NButton
        quaternary
        circle
        size="small"
        :title="searchOpen ? '收起搜索' : '搜索'"
        @click="toggleSearch"
      >
        <template #icon><Search :size="16" /></template>
      </NButton>
    </div>
    <div v-if="searchOpen" class="cs-search">
      <NInput v-model:value="kw" size="small" placeholder="搜索会话" clearable autofocus />
    </div>

    <!-- 菜单导航：平铺所有入口，无「更多」；移动端抽屉不展示 -->
    <nav v-if="showNav" class="cs-nav">
      <span
        v-for="item in navItems"
        :key="item.key"
        class="cs-nav-item"
        :class="{ 'cs-nav-primary': item.primary, 'cs-nav-active': item.key === activeNav }"
        @click="onNavClick(item)"
      >
        <component :is="item.icon" :size="16" />
        <span class="cs-nav-label">{{ item.label }}</span>
      </span>
    </nav>

    <!-- 分组会话列表 -->
    <div class="cs-groups">
      <!-- 首次加载骨架（#61） -->
      <div v-if="state.convsLoading" class="cs-skeleton" aria-label="加载中">
        <div v-for="i in 6" :key="i" class="cs-skel-item">
          <NSkeleton circle size="small" class="cs-skel-ico" />
          <div class="cs-skel-main">
            <NSkeleton :width="170 - (i % 3) * 28" height="12px" :sharp="false" />
            <NSkeleton :width="64" height="10px" :sharp="false" />
          </div>
        </div>
      </div>
      <template v-else>
        <div v-for="g in groups" :key="g.label" class="cs-group">
          <div class="cs-group-title">{{ g.label }}</div>
          <div
            v-for="c in g.items"
            :key="c.id"
            class="cs-item"
            :class="{ active: isHome && c.id === current }"
            @click="renamingId !== c.id && $emit('select', c.id)"
          >
            <MessageSquare :size="15" class="cs-item-ico" />
            <div class="cs-item-main">
              <NInput
                v-if="renamingId === c.id"
                v-model:value="renameText"
                size="tiny"
                class="cs-rename-input"
                placeholder="会话名称"
                autofocus
                @click.stop
                @keyup.enter="confirmRename"
                @keyup.esc="cancelRename"
                @blur="confirmRename"
              />
              <template v-else>
                <div class="cs-item-title" title="双击重命名" @dblclick.stop="startRename(c)">
                  {{ c.title }}
                </div>
                <div class="cs-item-time">{{ relTime(c.updated_at) }}</div>
              </template>
            </div>
            <Loader2 v-if="c.running" :size="14" class="spin cs-run-ico" title="正在回复" />
            <div class="cs-item-actions" @click.stop>
              <NDropdown
                trigger="click"
                :options="itemOptions"
                @select="(k: string | number) => onItemAction(c.id, k)"
              >
                <NButton quaternary circle size="tiny" title="更多操作">
                  <template #icon><MoreHorizontal :size="14" /></template>
                </NButton>
              </NDropdown>
            </div>
          </div>
        </div>
        <NEmpty
          v-if="!hasConvs"
          class="cs-empty"
          size="small"
          :description="kw.trim() ? '无匹配会话' : '暂无会话，点上方「新建任务」开始'"
        />
      </template>
    </div>

    <!-- 底部用户菜单 -->
    <div class="cs-footer">
      <NDropdown trigger="click" :options="userOptions" @select="onUser">
        <div class="cs-user" :title="uname">
          <NAvatar round :size="30" class="cs-avatar">{{ uname.slice(0, 1).toUpperCase() }}</NAvatar>
          <span class="cs-user-name">{{ uname }}</span>
        </div>
      </NDropdown>
      <NButton quaternary circle size="small" class="cs-bell" title="消息中心" @click="$emit('nav', 'bell')">
        <template #icon><Bell :size="16" /></template>
      </NButton>
    </div>
  </div>
</template>
