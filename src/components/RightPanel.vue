<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { NTabs, NTabPane, NButton, NEmpty, NScrollbar } from 'naive-ui'
import {
  FolderClosed, Eye, PanelRightClose, PanelRightOpen, Maximize2, Minimize2, Download,
} from 'lucide-vue-next'
import { state } from '../store'
import { api } from '../api'
import FilePanel from './FilePanel.vue'

type PanelState = 'full' | 'icons' | 'collapsed'
const props = defineProps<{ panelState: PanelState }>()
const emit = defineEmits<{
  expand: []
  collapse: []
  toggleIcons: []
  resizeStart: [e: MouseEvent]
}>()

const tab = ref<'files' | 'preview'>('files')
// FilePanel 常驻挂载；预览标签读取其暴露的 selected
const fileRef = ref<InstanceType<typeof FilePanel> | null>(null)
const previewActive = ref(false)
const fullscreen = ref(false)

const selected = computed(() => fileRef.value?.selected ?? null)

function fmtSize(n: number): string {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

function downloadUrl(path: string): string {
  return state.current ? api.rawFileUrl(state.current, path) : '#'
}

function openPreview(): void {
  previewActive.value = true
  tab.value = 'preview'
  if (props.panelState !== 'full') emit('expand')
}

// 面板从收起恢复展开时，若此前在预览则回到预览标签
watch(
  () => props.panelState,
  (v) => { if (v === 'full' && previewActive.value) tab.value = 'preview' },
)

defineExpose({ openPreview })
</script>

<template>
  <aside class="right" :class="[`st-${panelState}`, { fullscreen }]">
    <!-- 拖拽手柄（位于面板自身左边缘） -->
    <div
      v-if="panelState === 'full'"
      class="resize-handle"
      @mousedown.prevent="emit('resizeStart', $event)"
    ></div>

    <!-- 收起态：仅剩图标竖条 -->
    <div v-if="panelState === 'icons'" class="rail">
      <NButton quaternary circle title="展开文件面板" @click="emit('expand')">
        <template #icon><FolderClosed :size="18" /></template>
      </NButton>
      <NButton quaternary circle title="展开预览面板" @click="openPreview(); emit('expand')">
        <template #icon><Eye :size="18" /></template>
      </NButton>
      <NButton quaternary circle title="完全展开" @click="emit('expand')">
        <template #icon><PanelRightOpen :size="18" /></template>
      </NButton>
    </div>

    <template v-else>
      <div class="panel-tabs">
        <NTabs
          :value="tab"
          type="line"
          size="small"
          class="rp-tabs"
          @update:value="(v: string) => (tab = v as 'files' | 'preview')"
        >
          <NTabPane name="files">
            <template #tab><span class="tab-label"><FolderClosed :size="15" /> 文件</span></template>
          </NTabPane>
          <NTabPane name="preview">
            <template #tab><span class="tab-label"><Eye :size="15" /> 预览</span></template>
          </NTabPane>
        </NTabs>
        <div class="rp-actions">
          <NButton quaternary circle size="small" :title="fullscreen ? '退出全屏' : '全屏'" @click="fullscreen = !fullscreen">
            <template #icon>
              <component :is="fullscreen ? Minimize2 : Maximize2" :size="15" />
            </template>
          </NButton>
          <NButton quaternary circle size="small" title="收起到图标" @click="emit('toggleIcons')">
            <template #icon><PanelRightOpen :size="15" /></template>
          </NButton>
          <NButton quaternary circle size="small" title="收起面板" @click="emit('collapse')">
            <template #icon><PanelRightClose :size="15" /></template>
          </NButton>
        </div>
      </div>

      <FilePanel
        ref="fileRef"
        v-show="tab === 'files'"
        @preview="previewActive = true; tab = 'preview'"
      />

      <div v-show="tab === 'preview'" class="preview-pane">
        <template v-if="selected">
          <div class="file-view-head">
            <span class="file-name">{{ selected.name }}</span>
            <span class="muted">{{ fmtSize(selected.size) }}</span>
            <NButton quaternary circle size="tiny" tag="a" :href="downloadUrl(selected.path)" target="_blank" title="下载">
              <template #icon><Download :size="14" /></template>
            </NButton>
          </div>
          <div v-if="selected.binary" class="file-hint muted">{{ selected.note || '二进制文件，无法直接预览，请下载。' }}</div>
          <div v-else-if="selected.truncated" class="file-hint muted">{{ selected.note || '文件过大，仅显示部分内容。' }}</div>
          <NScrollbar v-else class="preview-scroll">
            <pre class="file-content">{{ selected.content }}</pre>
          </NScrollbar>
        </template>
        <NEmpty v-else class="preview-empty" description="在「文件」标签中点击一个文本文件即可在此预览" />
      </div>
    </template>
  </aside>
</template>
