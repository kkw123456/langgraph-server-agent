<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { ArrowUp, RotateCw, Download, FileText, FolderClosed, Package, FolderOpen, ArrowLeft } from 'lucide-vue-next'
import { state } from '../store'
import type { FileEntry, FileResponse, FileContentResponse } from '../types'
import { api } from '../api'

const emit = defineEmits<{ preview: [] }>()

const curPath = ref('')
const entries = ref<FileEntry[]>([])
const loading = ref(false)
const error = ref('')
const selected = ref<FileContentResponse | null>(null)

const cid = computed(() => state.current)
// 供右侧「预览」标签读取当前选中的文件
defineExpose({ selected })

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
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`
}

async function load(path = ''): Promise<void> {
  if (!cid.value) { error.value = '请先选择会话'; entries.value = []; return }
  loading.value = true; error.value = ''; selected.value = null
  try {
    const d = await api.files<FileResponse>(cid.value, path)
    if (!d.ok) { error.value = d.error || '加载失败'; entries.value = []; return }
    if (d.type === 'dir') {
      curPath.value = d.path
      entries.value = d.entries
    } else {
      selected.value = d
    }
  } catch (e) {
    error.value = String(e)
  } finally {
    loading.value = false
  }
}

async function openEntry(e: FileEntry): Promise<void> {
  const p = joinPath(curPath.value, e.name)
  if (e.type === 'dir') {
    await load(p)
  } else {
    await openFile(p)
    emit('preview')
  }
}

async function openFile(path: string): Promise<void> {
  if (!cid.value) return
  loading.value = true; error.value = ''
  try {
    const d = await api.files<FileContentResponse>(cid.value, path)
    if (!d.ok) { error.value = d.error || '打开失败'; return }
    selected.value = d
  } catch (e) {
    error.value = String(e)
  } finally {
    loading.value = false
  }
}

function goUp(): void {
  const parts = curPath.value.split('/').filter(Boolean)
  parts.pop()
  load(parts.join('/'))
}

function refresh(): void { load(curPath.value) }
function closeView(): void { selected.value = null; load(curPath.value) }

function downloadUrl(path: string): string {
  return cid.value ? api.rawFileUrl(cid.value, path) : '#'
}

// 当前会话变化时自动加载其隔离工作目录
watch(cid, () => { curPath.value = ''; selected.value = null; load('') }, { immediate: true })
</script>

<template>
  <div class="file-panel">
    <div class="file-toolbar">
      <button class="iconbtn" title="返回上级" @click="goUp" :disabled="!curPath"><ArrowUp :size="15" /></button>
      <span class="file-path">
        <FolderOpen :size="14" /> {{ curPath || '/' }}
        <span v-if="loading" class="muted">…</span>
      </span>
      <button class="iconbtn" title="刷新" @click="refresh"><RotateCw :size="15" /></button>
    </div>

    <div v-if="!cid" class="file-hint muted">请先在左侧选择或新建一个会话，每个会话拥有独立隔离的工作目录。</div>
    <div v-else-if="error" class="file-hint err">⚠ {{ error }}</div>

    <!-- 文件内容预览（内联） -->
    <div v-else-if="selected" class="file-view">
      <div class="file-view-head">
        <span class="file-name"><FileText :size="14" /> {{ selected.name }}</span>
        <span class="muted">{{ fmtSize(selected.size) }}</span>
        <a class="iconbtn" :href="downloadUrl(selected.path)" target="_blank" rel="noopener" title="下载">
          <Download :size="14" />
        </a>
        <button class="iconbtn" title="返回列表" @click="closeView"><ArrowLeft :size="14" /></button>
      </div>
      <div v-if="selected.binary" class="file-hint muted">{{ selected.note || '二进制文件，无法直接预览，请下载。' }}</div>
      <div v-else-if="selected.truncated" class="file-hint muted">{{ selected.note || '文件过大，仅显示部分内容。' }}</div>
      <pre v-else class="file-content">{{ selected.content }}</pre>
    </div>

    <!-- 目录列表 -->
    <ul v-else class="file-list">
      <li v-for="e in entries" :key="e.name" class="file-item" :class="e.type" @click="openEntry(e)">
        <span class="fi-icon">
          <component :is="e.type === 'dir' ? FolderClosed : (e.is_text ? FileText : Package)" :size="15" />
        </span>
        <span class="fi-name">{{ e.name }}</span>
        <span class="fi-meta muted">{{ e.type === 'dir' ? '' : fmtSize(e.size) }}</span>
        <span class="fi-meta muted">{{ fmtTime(e.mtime) }}</span>
      </li>
      <li v-if="!entries.length" class="file-hint muted">（空目录）脚本执行的产物会落在当前会话的工作目录中。</li>
    </ul>
  </div>
</template>
