<script setup lang="ts">
// 会话工作目录文件面板：树形层级展示（目录点击展开/收起，子层惰性加载），
// 点击文件通过 open 事件交由右侧面板打开预览标签页。
// store.filesTick 变化（创建文件类工具结束 / 会话完成）时自动重建并保留展开状态。
import { ref, watch, computed } from 'vue'
import { NButton, NEmpty, NScrollbar, NAlert } from 'naive-ui'
import {
  RotateCw, Download, FolderClosed, FolderOpen,
  ChevronRight, ChevronDown,
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
// 记录展开过的目录，刷新后按路径恢复
const expandedPaths = new Set<string>()

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

function toNodes(path: string, entries: FileEntry[]): TreeNode[] {
  return entries.map((e) => ({
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
    // 首次加载该会话：根目录条目不足 5 个时，自动展开所有子目录一层，减少无效点击
    if (auto && tree.value.length < 5) {
      for (const n of tree.value) {
        if (n.type !== 'dir') continue
        try {
          n.expanded = true
          n.loaded = true
          n.children = await listDir(n.path)
        } catch {
          n.expanded = false
          n.loaded = false
        }
      }
    }
    // 递归恢复已展开目录的内容
    const restore = async (nodes: TreeNode[]): Promise<void> => {
      for (const n of nodes) {
        if (n.type === 'dir' && expandedPaths.has(n.path)) {
          n.expanded = true
          n.loaded = true
          n.children = await listDir(n.path)
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
    expandedPaths.delete(n.path)
  }
}

function onClick(n: TreeNode): void {
  if (n.type === 'dir') toggleNode(n)
  else emit('open', n.path)
}

function downloadUrl(path: string): string {
  return cid.value ? api.rawFileUrl(cid.value, path) : '#'
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

// 会话切换：清空展开状态重载（首次加载启用「根目录 <5 项自动展开下一层」）
watch(cid, () => { expandedPaths.clear(); rebuild(true) }, { immediate: true })
// 工具创建文件 / 会话完成：刷新文件树（保留展开状态）
watch(() => state.filesTick, () => { rebuild() })
</script>

<template>
  <div class="file-panel">
    <div class="file-toolbar">
      <span class="file-path">
        <FolderClosed :size="14" /> 会话工作目录
        <span v-if="loading" class="muted">加载中…</span>
      </span>
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
