<script setup lang="ts">
// 会话工作目录文件面板：树形层级展示（目录点击展开/收起，子层惰性加载），
// 点击文件通过 open 事件交由右侧面板打开预览标签页。
//
// 排序规则（与后端 api_files 保持一致，前端再排一次以防接口变更）：
//   目录在前、文件在后，各自按名称 ASCII（近似小写字典序）升序。
//
// 展开状态按会话持久化：切换会话、离开页面、刷新浏览器后回到该会话，
// 目录树保持上一次的展开/收起形态。状态存 localStorage（键按会话 id 隔离），
// 不放在组件内 Set —— 组件随路由卸载会丢，切会话则被 clear()，
// 这正是「工作目录一直被重置」的原因。
import { ref, watch, computed } from 'vue'
import { NButton, NEmpty, NScrollbar, NAlert } from 'naive-ui'
import {
  RotateCw, Download, FolderClosed, FolderOpen,
  ChevronRight, ChevronDown, Loader2,
} from 'lucide-vue-next'
import { state } from '../store'
import type { FileEntry, FileResponse } from '../types'
import { api } from '../api'
import { fileIcon } from '../utils/fileicons'

const emit = defineEmits<{ open: [path: string] }>()

interface TreeNode {
  name: string
  path: string
  type: 'file' | 'dir'
  size: number
  mtime: number
  is_text: boolean
  children: TreeNode[] | null
  expanded: boolean
  loaded: boolean
}

const cid = computed(() => state.current)
const tree = ref<TreeNode[]>([])
const loading = ref(false)
const error = ref('')

// ---------------- 展开状态持久化（按会话） ----------------
const LS_PREFIX = 'lg_tree_expand_'

function loadExpanded(id: string): Set<string> {
  try {
    const raw = localStorage.getItem(LS_PREFIX + id)
    if (!raw) return new Set()
    const arr = JSON.parse(raw)
    return new Set(Array.isArray(arr) ? arr.filter((x) => typeof x === 'string') : [])
  } catch {
    return new Set()   // 隐私模式 / 脏数据：退化为「全部收起」，不影响功能
  }
}

function saveExpanded(id: string, set: Set<string>): void {
  try {
    localStorage.setItem(LS_PREFIX + id, JSON.stringify([...set]))
  } catch {
    // localStorage 不可用：本次会话内仍可正常展开，只是不记忆
  }
}

// 当前会话的展开集合（切会话时整体替换）
let expandedPaths = new Set<string>()
let saveTimer = 0
/** 防抖落盘：连续展开多个目录时只写一次 localStorage。 */
function persistExpanded(): void {
  const id = cid.value
  if (!id) return
  clearTimeout(saveTimer)
  saveTimer = window.setTimeout(() => saveExpanded(id, expandedPaths), 250)
}

function joinPath(base: string, name: string): string {
  return base ? `${base}/${name}` : name
}

function fmtSize(n: number): string {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

function fmtTime(t: number): string {
  const d = new Date(t * 1000)
  const p = (x: number) => String(x).padStart(2, '0')
  return `${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`
}

/** 目录优先 + 名称 ASCII 升序（与后端 api_files 同口径）。 */
function sortEntries(list: FileEntry[]): FileEntry[] {
  return [...list].sort((a, b) => {
    if (a.type !== b.type) return a.type === 'dir' ? -1 : 1
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  })
}

function toNodes(path: string, entries: FileEntry[]): TreeNode[] {
  return sortEntries(entries).map((e) => ({
    name: e.name,
    path: joinPath(path, e.name),
    type: e.type,
    size: e.size,
    mtime: e.mtime,
    is_text: e.is_text,
    children: null,
    expanded: false,
    loaded: false,
  }))
}

async function listDir(path: string): Promise<TreeNode[]> {
  const d = await api.files<FileResponse>(cid.value ?? '', path)
  if (!d.ok || d.type !== 'dir') throw new Error(d.error || '加载失败')
  return toNodes(path, d.entries)
}

async function rebuild(auto = false): Promise<void> {
  if (!cid.value) { tree.value = []; error.value = ''; return }
  loading.value = true
  error.value = ''
  try {
    tree.value = await listDir('')
    // 首次打开一个从未展开过的会话（且根目录条目不多）：自动展开子目录一层，
    // 减少「点开一片空」的无效点击。已有记录则完全尊重用户的展开状态。
    if (auto && tree.value.length < 5) {
      for (const n of tree.value) {
        if (n.type !== 'dir') continue
        try {
          n.expanded = true
          n.loaded = true
          n.children = await listDir(n.path)
          expandedPaths.add(n.path)
        } catch {
          n.expanded = false
          n.loaded = false
        }
      }
      persistExpanded()
    }
    // 递归恢复已展开目录的内容
    const restore = async (nodes: TreeNode[]): Promise<void> => {
      for (const n of nodes) {
        if (n.type === 'dir' && expandedPaths.has(n.path)) {
          n.expanded = true
          n.loaded = true
          try {
            n.children = await listDir(n.path)
          } catch {
            // 目录在别处被删掉：静默收敛展开状态，避免每次刷新都重试失败
            n.expanded = false
            n.loaded = false
            n.children = null
            expandedPaths.delete(n.path)
            persistExpanded()
            continue
          }
          await restore(n.children)
        }
      }
    }
    await restore(tree.value)
  } catch (e) {
    error.value = String(e)
    tree.value = []
  } finally {
    loading.value = false
  }
}

async function toggleNode(n: TreeNode): Promise<void> {
  if (n.type !== 'dir') return
  n.expanded = !n.expanded
  if (n.expanded) {
    expandedPaths.add(n.path)
    if (!n.loaded) {
      try {
        n.children = await listDir(n.path)
        n.loaded = true
      } catch (e) {
        n.expanded = false
        expandedPaths.delete(n.path)
      }
    }
  } else {
    // 收起时连同子孙一起移出记录：重新展开时按需再加载，
    // 也避免下次进来把「早就收起的深层目录」又铺开
    expandedPaths.delete(n.path)
    for (const p of [...expandedPaths]) {
      if (p.startsWith(n.path + '/')) expandedPaths.delete(p)
    }
  }
  persistExpanded()
}

function onClick(n: TreeNode): void {
  if (n.type === 'dir') toggleNode(n)
  else emit('open', n.path)
}

function downloadUrl(path: string): string {
  return cid.value ? api.rawFileUrl(cid.value, path) : '#'
}

/** 全部收起（一键清理，方便目录很深时快速回到顶层）。 */
function collapseAll(): void {
  expandedPaths.clear()
  const walk = (nodes: TreeNode[]) => {
    for (const n of nodes) {
      n.expanded = false
      if (n.children) walk(n.children)
    }
  }
  walk(tree.value)
  persistExpanded()
}

// 扁平化渲染树（缩进深度）
const flatTree = computed(() => {
  const out: { node: TreeNode; depth: number }[] = []
  const walk = (nodes: TreeNode[], depth: number) => {
    for (const n of nodes) {
      out.push({ node: n, depth })
      if (n.type === 'dir' && n.expanded && n.children) walk(n.children, depth + 1)
    }
  }
  walk(tree.value, 0)
  return out
})

const hasExpanded = computed(() => flatTree.value.some((f) => f.node.type === 'dir' && f.node.expanded))

// 会话切换：读取该会话上次的展开状态再重建（首次打开才启用「小目录自动展开」）
watch(cid, (id) => {
  expandedPaths = id ? loadExpanded(id) : new Set()
  rebuild(true)
}, { immediate: true })
// 工具创建文件 / 会话完成：刷新文件树（保留展开状态）
watch(() => state.filesTick, () => { rebuild() })
</script>

<template>
  <div class="file-panel">
    <div class="file-toolbar">
      <span class="file-path">
        <FolderClosed :size="14" /> 会话工作目录
        <!-- 加载中用旋转 icon（#8）：不占宽度跳变，视觉更轻 -->
        <Loader2 v-if="loading" :size="13" class="spin" />
      </span>
      <NButton
        v-if="hasExpanded"
        quaternary circle size="small" title="全部收起" @click="collapseAll"
      >
        <template #icon><ChevronRight :size="15" /></template>
      </NButton>
      <NButton quaternary circle size="small" title="刷新文件列表" @click="rebuild()">
        <template #icon><RotateCw :size="15" /></template>
      </NButton>
    </div>

    <NAlert v-if="!cid" type="default" :bordered="false" class="file-hint">
      请先在左侧选择或新建一个会话，每个会话拥有独立隔离的工作目录。
    </NAlert>
    <NAlert v-else-if="error" type="error" :bordered="false" class="file-hint">{{ error }}</NAlert>

    <NScrollbar v-else class="file-list-scroll">
      <ul class="file-tree">
        <li
          v-for="f in flatTree"
          :key="f.node.path"
          class="file-item"
          :class="[f.node.type, { open: f.node.type === 'dir' && f.node.expanded }]"
          :style="{ paddingLeft: 8 + f.depth * 16 + 'px' }"
          :title="f.node.type === 'dir' ? '点击展开/收起' : '点击预览'"
          @click="onClick(f.node)"
        >
          <span class="fi-arrow">
            <ChevronDown v-if="f.node.type === 'dir' && f.node.expanded" :size="13" />
            <ChevronRight v-else-if="f.node.type === 'dir'" :size="13" />
          </span>
          <span class="fi-icon" :style="{ color: f.node.type === 'dir' ? undefined : fileIcon(f.node.name).color }">
            <FolderOpen v-if="f.node.type === 'dir' && f.node.expanded" :size="15" />
            <FolderClosed v-else-if="f.node.type === 'dir'" :size="15" />
            <component v-else :is="fileIcon(f.node.name).icon" :size="15" />
          </span>
          <span class="fi-name">{{ f.node.name }}</span>
          <span class="fi-meta muted">{{ f.node.type === 'dir' ? '' : fmtSize(f.node.size) }}</span>
          <span class="fi-meta fi-time muted">{{ fmtTime(f.node.mtime) }}</span>
          <NButton
            v-if="f.node.type === 'file'"
            class="fi-dl"
            quaternary
            circle
            size="tiny"
            tag="a"
            :href="downloadUrl(f.node.path)"
            target="_blank"
            title="下载"
            @click.stop
          >
            <template #icon><Download :size="13" /></template>
          </NButton>
        </li>
      </ul>
      <NEmpty v-if="!flatTree.length && !loading" class="file-hint" size="small" description="工作目录为空，对话产生的文件会出现在这里" />
    </NScrollbar>
  </div>
</template>
