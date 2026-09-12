<script setup lang="ts">
// 项目页：把会话按项目归类，支持新建、重命名、删除，
// 以及把已有会话加入/移出项目。点击会话可直接跳到对话页。
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import {
  NCard, NButton, NModal, NForm, NFormItem, NInput, NSelect, NEmpty, NPopconfirm,
  NTag, useMessage,
} from 'naive-ui'
import { FolderClosed, Plus, Pencil, Trash2, MessageSquare, X, LogIn } from 'lucide-vue-next'
import { state, loadConvs, selectConv } from '../store'
import {
  wb, loadProjects, createProject, updateProject, deleteProject,
  addConvToProject, removeConvFromProject,
} from '../workbench'
import type { Project } from '../types'

interface Busy { on: () => void; off: () => void }
let stopBusy: (() => void) | null = null

const message = useMessage()
const router = useRouter()

const showEdit = ref(false)
const editing = ref<Project | null>(null)
const form = ref({ name: '', description: '', color: '#2f6feb' })

const showAdd = ref(false)
const addTarget = ref<Project | null>(null)
const addCid = ref<string | null>(null)

const COLORS = ['#2f6feb', '#1a7f37', '#bf8700', '#cf222e', '#8250df', '#0969da', '#d1521b']

const colorOptions = computed(() => COLORS.map((c) => ({ label: c, value: c })))

function titleOf(cid: string): string {
  const c = state.convs.find((x) => x.id === cid)
  return c ? c.title : cid.slice(0, 8)
}

// 未归入任何项目的会话，用于「加入项目」下拉
const unassigned = computed(() => {
  const assigned = new Set(wb.projects.flatMap((p) => p.conv_ids))
  return state.convs.filter((c) => !assigned.has(c.id))
})

function openCreate(): void {
  editing.value = null
  form.value = { name: '', description: '', color: '#2f6feb' }
  showEdit.value = true
}

function openRename(p: Project): void {
  editing.value = p
  form.value = { name: p.name, description: p.description, color: p.color }
  showEdit.value = true
}

async function submitEdit(): Promise<void> {
  const name = form.value.name.trim()
  if (!name) { message.warning('项目名称不能为空'); return }
  const payload = { name, description: form.value.description.trim(), color: form.value.color }
  const ok = editing.value
    ? await updateProject(editing.value.id, payload)
    : !!(await createProject(payload.name, payload.description, payload.color))
  if (ok) {
    message.success(editing.value ? '项目已更新' : '项目已创建')
    showEdit.value = false
  }
}

async function onDelete(p: Project): Promise<void> {
  if (await deleteProject(p.id)) message.success('项目已删除')
}

function openAdd(p: Project): void {
  addTarget.value = p
  addCid.value = null
  showAdd.value = true
}

async function submitAdd(): Promise<void> {
  if (!addTarget.value || !addCid.value) { message.warning('请选择一个会话'); return }
  if (await addConvToProject(addTarget.value.id, addCid.value)) {
    message.success('已加入项目')
    showAdd.value = false
  }
}

async function onRemove(pid: string, cid: string): Promise<void> {
  if (await removeConvFromProject(pid, cid)) message.success('已移出项目')
}

async function openConv(cid: string): Promise<void> {
  await router.push('/')
  await selectConv(cid)
}

onMounted(async () => {
  await Promise.all([loadProjects(), loadConvs()])
  const handler = () => message.info('项目数据已刷新')
  window.addEventListener('lg:projects-refresh', handler)
  stopBusy = () => window.removeEventListener('lg:projects-refresh', handler)
})
onBeforeUnmount(() => stopBusy && stopBusy())
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div class="page-title">
        <FolderClosed :size="20" />
        <h1>项目</h1>
        <span class="muted count">{{ wb.projects.length }} 个项目</span>
      </div>
      <div class="page-actions">
        <NButton type="primary" @click="openCreate">
          <template #icon><Plus :size="15" /></template>
          新建项目
        </NButton>
      </div>
    </div>

    <div class="page-body">
      <NEmpty
        v-if="!wb.projects.length"
        class="page-empty"
        description="还没有项目，把相关会话归到一起会更容易管理"
      />

      <div v-else class="grid-cards">
        <NCard v-for="p in wb.projects" :key="p.id" class="proj-card" size="small">
          <div class="pc-head">
            <span class="pc-dot" :style="{ background: p.color }"></span>
            <span class="pc-name">{{ p.name }}</span>
            <NTag size="small" :bordered="false">{{ p.conv_count }} 个会话</NTag>
          </div>

          <p class="pc-desc">{{ p.description || '（暂无描述）' }}</p>

          <div v-if="p.conv_ids.length" class="pc-convs">
            <div
              v-for="cid in p.conv_ids"
              :key="cid"
              class="pc-conv"
              @click="openConv(cid)"
            >
              <MessageSquare :size="13" />
              <span>{{ titleOf(cid) }}</span>
              <NButton
                quaternary
                circle
                size="tiny"
                title="移出项目"
                @click.stop="onRemove(p.id, cid)"
              >
                <template #icon><X :size="12" /></template>
              </NButton>
            </div>
          </div>
          <p v-else class="muted tiny" style="margin-bottom: 8px">尚未关联任何会话</p>

          <div class="pc-foot">
            <NButton size="tiny" @click="openAdd(p)">
              <template #icon><Plus :size="13" /></template>
              加入会话
            </NButton>
            <span style="display: inline-flex; gap: 2px">
              <NButton quaternary circle size="tiny" title="编辑" @click="openRename(p)">
                <template #icon><Pencil :size="13" /></template>
              </NButton>
              <NPopconfirm @positive-click="onDelete(p)">
                <template #trigger>
                  <NButton quaternary circle size="tiny" type="error" title="删除">
                    <template #icon><Trash2 :size="13" /></template>
                  </NButton>
                </template>
                删除该项目？会话本身不会被删除。
              </NPopconfirm>
            </span>
          </div>
        </NCard>
      </div>
    </div>

    <!-- 新建 / 编辑项目 -->
    <NModal v-model:show="showEdit">
      <NCard
        class="modal-card"
        :title="editing ? '编辑项目' : '新建项目'"
        :bordered="false"
        style="width: 460px; max-width: 94vw"
      >
        <NForm label-placement="top" :show-feedback="false">
          <div class="form-grid">
            <NFormItem label="名称">
              <NInput v-model:value="form.name" placeholder="例如：回测框架重构" />
            </NFormItem>
            <NFormItem label="描述">
              <NInput v-model:value="form.description" placeholder="这个项目要做什么" />
            </NFormItem>
            <NFormItem label="颜色">
              <NSelect v-model:value="form.color" :options="colorOptions" />
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

    <!-- 把会话加入项目 -->
    <NModal v-model:show="showAdd">
      <NCard class="modal-card" title="加入会话" :bordered="false" style="width: 460px; max-width: 94vw">
        <NForm label-placement="top" :show-feedback="false">
          <NFormItem label="选择未归类的会话">
            <NSelect
              v-model:value="addCid"
              :options="unassigned.map((c) => ({ label: c.title, value: c.id }))"
              placeholder="选择会话"
              filterable
            />
          </NFormItem>
        </NForm>
        <NEmpty
          v-if="!unassigned.length"
          size="small"
          description="没有可加入的会话，先回到对话页新建一个"
          style="margin-top: 8px"
        />
        <template #footer>
          <div class="modal-actions">
            <NButton @click="showAdd = false">取消</NButton>
            <NButton type="primary" :disabled="!unassigned.length" @click="submitAdd">
              <template #icon><LogIn :size="14" /></template>
              加入
            </NButton>
          </div>
        </template>
      </NCard>
    </NModal>
  </div>
</template>
