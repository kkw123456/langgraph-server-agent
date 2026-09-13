<script setup lang="ts">
// 左侧会话侧栏（仿 WorkBuddy 布局）：
//   顶栏（收起/搜索）→ 品牌行 → 导航 tabs（新建任务/项目/专家·技能·连接器/更多）
//   → 按时间分组的会话卡片（图标 + 标题 + 相对时间 + 悬浮更多操作）
//   → 底部用户菜单（头像 + 用户名 + 消息中心铃铛）。
// 会话操作：点击选中、双击标题行内重命名、更多菜单里重命名/删除。
import { computed, ref } from 'vue'
import { NAvatar, NButton, NDropdown, NEmpty, NInput, useDialog } from 'naive-ui'
import type { DropdownOption } from 'naive-ui'
import {
  Bell, FolderKanban, MessageSquare, MoreHorizontal, PanelLeftClose,
  Plus, Search, Sparkles, UserRound,
} from 'lucide-vue-next'
import type { Conversation } from '../types'
import { authState } from '../auth'

const props = defineProps<{ convs: Conversation[]; current: string | null }>()
const emit = defineEmits<{
  select: [id: string]
  delete: [id: string]
  rename: [id: string, title: string]
  collapse: []
  newChat: []
  nav: [key: string]
}>()

const dialog = useDialog()

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

// ===================== 导航 tabs =====================
const moreOptions: DropdownOption[] = [
  { label: '自动化', key: 'automation' },
  { label: '资料库', key: 'library' },
  { label: '灵感', key: 'inspiration' },
  { type: 'divider', key: 'd1' },
  { label: '新建技能', key: 'skill-new' },
  { label: '设置', key: 'settings' },
]
function onMore(key: string | number): void {
  emit('nav', String(key))
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
  <div class="cs-root">
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

    <!-- 导航 tabs -->
    <div class="cs-tabs">
      <span class="cs-tab cs-tab-primary" title="新建对话" @click="$emit('newChat')">
        <Plus :size="14" />新建任务
      </span>
      <span class="cs-tab" @click="$emit('nav', 'projects')">
        <FolderKanban :size="14" />项目
      </span>
      <span class="cs-tab" @click="$emit('nav', 'experts')">
        <UserRound :size="14" />专家·技能·连接器
      </span>
      <NDropdown trigger="click" :options="moreOptions" @select="onMore">
        <span class="cs-tab">
          <Sparkles :size="14" />更多
        </span>
      </NDropdown>
    </div>

    <!-- 分组会话列表 -->
    <div class="cs-groups">
      <div v-for="g in groups" :key="g.label" class="cs-group">
        <div class="cs-group-title">{{ g.label }}</div>
        <div
          v-for="c in g.items"
          :key="c.id"
          class="cs-item"
          :class="{ active: c.id === current }"
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
          <span v-if="c.running" class="cs-run" title="正在回复">
            <span class="run-dot"></span>运行中
          </span>
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
        v-if="!groups.length"
        class="cs-empty"
        size="small"
        :description="kw.trim() ? '无匹配会话' : '暂无会话，点上方「新建任务」开始'"
      />
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
