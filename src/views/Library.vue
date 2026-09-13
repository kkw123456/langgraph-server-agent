<script setup lang="ts">
// 资料库页：收藏笔记 / 链接 / 文件引用，支持搜索、编辑、删除，
// 也可以一键把条目内容带进对话（新建会话并发送）。
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  NCard, NButton, NModal, NForm, NFormItem, NInput, NSelect, NEmpty, NPopconfirm,
  NTag, NInputGroup, NSkeleton, useMessage,
} from 'naive-ui'
import { BookMarked, Plus, Pencil, Trash2, Search, Send, Link2, FileText, StickyNote } from 'lucide-vue-next'
import { startWith } from '../store'
import { wb, loadLibrary, createLibraryItem, updateLibraryItem, deleteLibraryItem } from '../workbench'
import type { LibraryItem, LibraryKind } from '../types'

const message = useMessage()
const router = useRouter()

const showEdit = ref(false)
const editing = ref<LibraryItem | null>(null)
const kw = ref('')

const form = ref<{ title: string; content: string; kind: LibraryKind; tags: string }>({
  title: '', content: '', kind: 'note', tags: '',
})

const KIND_OPTIONS: { label: string; value: LibraryKind }[] = [
  { label: '笔记', value: 'note' },
  { label: '链接', value: 'link' },
  { label: '文件', value: 'file' },
]
const kindOptions = KIND_OPTIONS

function kindMeta(k: LibraryKind): { icon: unknown; label: string; type: 'default' | 'info' | 'success' } {
  if (k === 'link') return { icon: Link2, label: '链接', type: 'info' }
  if (k === 'file') return { icon: FileText, label: '文件', type: 'success' }
  return { icon: StickyNote, label: '笔记', type: 'default' }
}

function fmtDate(t: number): string {
  const d = new Date(t * 1000)
  const p = (x: number) => String(x).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

function tagList(t: string): string[] {
  return (t || '').split(',').map((s) => s.trim()).filter(Boolean)
}

function openCreate(): void {
  editing.value = null
  form.value = { title: '', content: '', kind: 'note', tags: '' }
  showEdit.value = true
}

function openEdit(it: LibraryItem): void {
  editing.value = it
  form.value = { title: it.title, content: it.content, kind: it.kind, tags: it.tags }
  showEdit.value = true
}

async function submitEdit(): Promise<void> {
  const title = form.value.title.trim()
  if (!title) { message.warning('标题不能为空'); return }
  const payload = { ...form.value, title }
  const ok = editing.value
    ? await updateLibraryItem(editing.value.id, payload)
    : await createLibraryItem(payload)
  if (ok) {
    message.success(editing.value ? '已更新' : '已保存到资料库')
    showEdit.value = false
  }
}

async function onDelete(it: LibraryItem): Promise<void> {
  if (await deleteLibraryItem(it.id)) message.success('已删除')
}

/** 把资料条目带进对话：新建会话并发送其内容 */
async function sendToChat(it: LibraryItem): Promise<void> {
  const text = `${it.title}\n\n${it.content}`.trim()
  await router.push('/')
  await startWith(text)
}

async function search(): Promise<void> {
  await loadLibrary(kw.value.trim())
}

onMounted(() => loadLibrary())
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div class="page-title">
        <BookMarked :size="20" />
        <h1>资料库</h1>
        <span class="muted count">{{ wb.library.length }} 条</span>
      </div>
      <div class="page-actions">
        <NButton type="primary" @click="openCreate">
          <template #icon><Plus :size="15" /></template>
          新建条目
        </NButton>
      </div>
    </div>

    <div class="page-body">
      <div class="lib-toolbar">
        <NInputGroup class="lib-search">
          <NInput v-model:value="kw" placeholder="搜索标题 / 内容 / 标签…" clearable @keydown.enter="search">
            <template #prefix><Search :size="14" /></template>
          </NInput>
          <NButton @click="search">搜索</NButton>
        </NInputGroup>
        <NButton v-if="kw" quaternary @click="kw = ''; loadLibrary()">清空</NButton>
      </div>

      <!-- 首载骨架屏 -->
      <div v-if="wb.loadingLibrary" class="lib-list">
        <NCard v-for="i in 3" :key="'sk' + i" size="small">
          <NSkeleton text width="30%" class="sk-title" />
          <NSkeleton text :repeat="3" />
        </NCard>
      </div>

      <NEmpty
        v-else-if="!wb.library.length"
        class="page-empty"
        description="资料库还是空的，把常用资料存进来，随时带进对话"
      />

      <div v-else class="lib-list">
        <NCard v-for="it in wb.library" :key="it.id" class="lib-card" size="small">
          <div class="lb-head">
            <NTag size="small" :bordered="false" :type="kindMeta(it.kind).type">
              <template #icon>
                <component :is="kindMeta(it.kind).icon" :size="12" />
              </template>
              {{ kindMeta(it.kind).label }}
            </NTag>
            <span class="lb-title">{{ it.title }}</span>
            <span class="muted tiny">{{ fmtDate(it.updated_at) }}</span>
          </div>

          <pre v-if="it.content" class="lb-content">{{ it.content }}</pre>
          <p v-else class="muted tiny mb-8">（无内容）</p>

          <div class="lb-foot">
            <span class="lb-tags">
              <NTag v-for="t in tagList(it.tags)" :key="t" size="tiny" :bordered="false">{{ t }}</NTag>
              <span v-if="!tagList(it.tags).length" class="muted tiny">无标签</span>
            </span>
            <span class="btn-group gap-4">
              <NButton size="tiny" @click="sendToChat(it)">
                <template #icon><Send :size="13" /></template>
                带进对话
              </NButton>
              <NButton quaternary circle size="tiny" title="编辑" @click="openEdit(it)">
                <template #icon><Pencil :size="13" /></template>
              </NButton>
              <NPopconfirm @positive-click="onDelete(it)">
                <template #trigger>
                  <NButton quaternary circle size="tiny" type="error" title="删除">
                    <template #icon><Trash2 :size="13" /></template>
                  </NButton>
                </template>
                删除该条目？
              </NPopconfirm>
            </span>
          </div>
        </NCard>
      </div>
    </div>

    <NModal v-model:show="showEdit">
      <NCard
        class="modal-card modal-w-md"
        :title="editing ? '编辑条目' : '新建条目'"
        :bordered="false"
      >
        <NForm label-placement="top" :show-feedback="false">
          <div class="form-grid">
            <NFormItem label="标题">
              <NInput v-model:value="form.title" placeholder="便于检索的名称" />
            </NFormItem>
            <NFormItem label="类型">
              <NSelect v-model:value="form.kind" :options="kindOptions" />
            </NFormItem>
            <NFormItem label="内容（链接类型直接粘贴 URL）">
              <NInput
                v-model:value="form.content"
                type="textarea"
                :autosize="{ minRows: 6, maxRows: 16 }"
                placeholder="正文 / URL / 文件路径"
              />
            </NFormItem>
            <NFormItem label="标签（逗号分隔）">
              <NInput v-model:value="form.tags" placeholder="例如：回测, MACD, 参考" />
            </NFormItem>
          </div>
        </NForm>
        <template #footer>
          <div class="modal-actions">
            <NButton @click="showEdit = false">取消</NButton>
            <NButton type="primary" @click="submitEdit">保存</NButton>
          </div>
        </template>
      </NCard>
    </NModal>
  </div>
</template>
