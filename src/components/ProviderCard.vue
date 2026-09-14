<script setup lang="ts">
// 模型供应商卡片（设置页）：以供应商为中心的可折叠分组。
// 头部常驻供应商名 / 地址 / 密钥状态 / 模型数量，点击整行展开或收起模型表格。
//
// 为什么要单独抽一个组件：系统模型与我的模型的卡片结构完全一致，原先在 Settings.vue
// 里是两份逐字重复的模板，任何改动都要同步两处。抽出来后加展开、加状态标签只改一处。
import { computed, h } from 'vue'
import type { VNodeChild } from 'vue'
import { NButton, NDataTable, NEmpty, NInput, NTag } from 'naive-ui'
import {
  ChevronDown, DownloadCloud, Server, X,
} from 'lucide-vue-next'

/** 与 Settings.vue 的 ProviderGroup 保持一致（见该文件注释） */
export interface ProviderGroup {
  name: string; label: string; sub: string; models: string[]
  builtin: boolean; scope: 'system' | 'user'; canManage: boolean
  code?: string
  baseUrl?: string
  hasKey?: boolean
  keyHint?: string
  status?: number
}

interface ModelRow {
  name: string
  model_type: number
  status: number
  context_length: number | null
  provider_model: string
  description: string
  current: boolean
}

const props = defineProps<{
  g: ProviderGroup
  collapsed: boolean
  /** 当前模型名，用于在表格里标「当前」 */
  currentModel?: string
  /** 每行的模型元数据，父组件按分组取好传进来 */
  rows: ModelRow[]
  /** 列定义由父组件给出（依赖父组件的操作回调） */
  columns: unknown[]
  /** 手动添加模型的输入框内容（v-model） */
  addInput: string
}>()

const emit = defineEmits<{
  toggle: []
  catalog: [g: ProviderGroup]
  addModel: [g: ProviderGroup]
  removeProvider: [g: ProviderGroup]
  updateAddInput: [v: string]
}>()

const modelCount = computed(() => props.g.models?.length || 0)
</script>

<template>
  <div class="set-prov-group set-prov-card" :class="{ 'is-collapsed': collapsed }">
    <!-- 头部：点击整行切换展开（按钮区 stop 掉冒泡，避免点按钮顺带折叠） -->
    <div class="set-prov-head spc-head" @click="emit('toggle')">
      <span class="set-prov-label spc-left">
        <NButton quaternary circle size="tiny" class="spc-chev" :class="{ flip: collapsed }" @click.stop="emit('toggle')">
          <template #icon><ChevronDown :size="13" /></template>
        </NButton>
        <Server :size="13" />
        <span class="set-prov-name">{{ g.label }}</span>
        <NTag v-if="g.builtin" size="tiny" :bordered="false">内置</NTag>
        <NTag v-if="g.code" size="tiny" :bordered="false" type="info">{{ g.code }}</NTag>
        <NTag size="tiny" :bordered="false" :type="g.status === 0 ? 'default' : 'success'">
          {{ modelCount }} 个模型
        </NTag>
        <span class="set-prov-sub muted">{{ g.sub }}</span>
      </span>
      <span class="set-prov-tools" @click.stop>
        <template v-if="g.canManage">
          <NButton size="tiny" secondary @click="emit('catalog', g)">
            <template #icon><DownloadCloud :size="13" /></template>
            拉取模型
          </NButton>
          <NInput
            :value="addInput"
            class="set-model-input" size="tiny" placeholder="手动输入模型名" clearable
            @update:value="(v: string) => emit('updateAddInput', v)"
            @keyup.enter="emit('addModel', g)"
          />
          <NButton size="tiny" tertiary @click="emit('addModel', g)">添加</NButton>
        </template>
        <NButton
          v-if="!g.builtin && g.canManage"
          quaternary circle size="tiny" type="error" title="删除供应商"
          @click="emit('removeProvider', g)"
        >
          <template #icon><X :size="12" /></template>
        </NButton>
      </span>
    </div>

    <div v-show="!collapsed" class="spc-body">
      <NDataTable
        v-if="rows.length"
        class="set-model-table"
        size="small"
        :bordered="false"
        :single-line="false"
        :row-key="(r: ModelRow) => r.name"
        :columns="columns as never"
        :data="rows"
        :max-height="300"
      />
      <NEmpty v-else size="small" description="暂无模型，可「拉取模型」勾选导入或手动输入" class="set-model-empty" />
    </div>
  </div>
</template>
