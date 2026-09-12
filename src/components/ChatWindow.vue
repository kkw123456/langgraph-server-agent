<script setup lang="ts">
import { ref, watch, nextTick, computed } from 'vue'
import { NInput, NButton, NSelect, NIcon, NAvatar } from 'naive-ui'
import {
  Send, Sparkles, Loader2, Plus, Paperclip, Globe, ListChecks, Code2, FileText,
  Table2, Search, Bug, Wand2, Palette, Image, Braces, Square, Bot,
} from 'lucide-vue-next'
import { state, stopChat } from '../store'
import { wb, setModel } from '../workbench'
import MessageBubble from './MessageBubble.vue'

const emit = defineEmits<{ send: [text: string] }>()
const draft = ref('')
const box = ref<HTMLElement | null>(null)
const inputRef = ref<InstanceType<typeof NInput> | null>(null)
const scene = ref('日常办公')

// 会话进行中（等待回复 / 流式输出 / 工具执行）：发送键切换为停止键
const busy = computed(() => state.waiting || state.running || !!state.live)
const streaming = computed(() => !!state.live)
const empty = computed(() => !state.messages.length && !state.live && !state.waiting)

// 场景化快捷入口：点一下等于「新建会话 + 发送该指令」
const SCENES: Record<string, { icon: unknown; title: string; desc: string; prompt: string }[]> = {
  日常办公: [
    { icon: ListChecks, title: '整理成待办清单', desc: '把零散事项梳理为可执行的任务列表', prompt: '请把下面这段杂乱的事项整理成结构化的待办清单，按优先级排序，并标注建议的截止时间：\n' },
    { icon: Table2, title: '表格数据分析', desc: '读取工作目录下的表格并给出结论', prompt: '请读取当前工作目录下的表格文件，做一次描述性统计，并总结最值得关注的三个结论。' },
    { icon: FileText, title: '写一份工作总结', desc: '基于要点生成结构清晰的周报', prompt: '请根据以下要点，写一份结构清晰的工作周报，包含本周进展、遇到的问题与下周计划：\n' },
    { icon: Search, title: '梳理与归纳资料', desc: '把长文提炼成要点与行动项', prompt: '请把下面的资料提炼为要点清单，并单独列出其中可执行的行动项：\n' },
  ],
  代码开发: [
    { icon: Code2, title: '实现一个算法', desc: '写出带注释与边界处理的实现', prompt: '请用 Python 实现一个快速排序，要求带详细注释、处理边界情况，并附带单元测试。' },
    { icon: Bug, title: '排查这段报错', desc: '定位异常根因并给出修复方案', prompt: '请帮我排查下面这段报错，说明根本原因，并给出可直接应用的修复代码：\n' },
    { icon: Wand2, title: '重构这段代码', desc: '提升可读性与可维护性', prompt: '请重构下面这段代码：提高可读性与可维护性，消除重复逻辑，保持行为不变，并说明每处改动理由：\n' },
    { icon: Braces, title: '写接口与文档', desc: '生成 REST 接口与使用说明', prompt: '请为一个「用户管理」模块设计 REST 接口，给出 FastAPI 实现与对应的 API 文档说明。' },
  ],
  设计创意: [
    { icon: Palette, title: '配色方案建议', desc: '给出成套的色板与用色规范', prompt: '请为一个「企业级数据分析后台」给出一套完整的配色方案，包含主色/辅色/语义色与使用规范。' },
    { icon: Image, title: '页面结构建议', desc: '拆解信息层级与布局方案', prompt: '请为一个「数据看板」首页给出布局与信息层级建议，说明每个区块的作用与摆放理由。' },
    { icon: FileText, title: '产品文案打磨', desc: '优化文案的表达与语气', prompt: '请帮我打磨下面这段产品文案，使其更简洁、更有说服力，并给出两个不同语气的版本：\n' },
    { icon: Globe, title: '竞品调研提纲', desc: '列出调研维度与采集方式', prompt: '请给出一个竞品调研提纲，说明需要采集哪些维度、用什么方式采集，以及如何呈现结论。' },
  ],
}

const scenes = Object.keys(SCENES)
const cards = computed(() => SCENES[scene.value] || [])
const modelOptions = computed(() =>
  (wb.runtime.models.length ? wb.runtime.models : [wb.runtime.model]).filter(Boolean)
    .map((m) => ({ label: m, value: m })),
)

function submit(): void {
  if (busy.value) return // 进行中禁止重复发送
  const t = draft.value
  if (!t.trim()) return
  emit('send', t)
  draft.value = ''
}

function useCard(p: string): void {
  draft.value = p
  nextTick(() => inputRef.value?.focus())
}

function onKeydown(e: KeyboardEvent): void {
  if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
    e.preventDefault()
    submit()
  }
}

function scrollBottom(): void {
  const b = box.value
  if (b) b.scrollTop = b.scrollHeight
}

async function onModel(v: string): Promise<void> {
  if (v && v !== wb.runtime.model) await setModel(v)
}

// 历史消息或流式消息变化均自动滚动到底部（含思考链与等待状态）
watch(
  () => [state.messages.length, state.live?.content, state.live?.tool_calls?.length, state.live?.reasoning, state.waiting],
  async () => { await nextTick(); scrollBottom() },
)
watch(() => state.current, () => { draft.value = '' })
</script>

<template>
  <div class="chat-view">
    <section class="messages" ref="box">
      <!-- 空态：品牌 + 场景 tab + 快捷入口卡片 -->
      <div v-if="empty" class="hero">
        <div class="hero-brand">
          <div class="hero-logo"><Sparkles :size="30" /></div>
          <h2>今天想让我做点什么？</h2>
          <p class="muted hero-slogan">
            基于 LangGraph 的智能体，支持工具调用、技能扩展与会话隔离工作目录
          </p>
        </div>

        <div class="scene-tabs">
          <span
            v-for="s in scenes"
            :key="s"
            class="scene-tab"
            :class="{ active: scene === s }"
            @click="scene = s"
          >{{ s }}</span>
        </div>

        <div class="cards">
          <div
            v-for="c in cards"
            :key="c.title"
            class="qcard"
            @click="useCard(c.prompt)"
          >
            <span class="qc-ico"><component :is="c.icon" :size="16" /></span>
            <span class="qc-body">
              <div class="qc-title">{{ c.title }}</div>
              <div class="qc-desc">{{ c.desc }}</div>
            </span>
          </div>
        </div>
      </div>

      <template v-else>
        <MessageBubble v-for="(m, i) in state.messages" :key="'h' + i" :msg="m" />
        <!-- 等待模型回复的 loading 气泡（避免发送后聊天区毫无反馈） -->
        <div v-if="state.waiting && !state.live" class="msg assistant">
          <NAvatar class="avatar assistant" round :size="30" color="#e8f0fe">
            <Bot :size="16" color="#2f6feb" />
          </NAvatar>
          <div class="bubble waiting-bubble">
            <span class="dots" aria-label="加载中"><i></i><i></i><i></i></span>
            <span class="muted tiny">正在思考…</span>
          </div>
        </div>
        <MessageBubble v-if="state.live" :msg="state.live" streaming />
      </template>
    </section>

    <footer class="composer">
      <div class="composer-inner">
        <NInput
          ref="inputRef"
          v-model:value="draft"
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 8 }"
          placeholder="描述你的任务，Shift + Enter 换行…"
          :bordered="false"
          class="composer-input"
          @keydown="onKeydown"
        />
        <div class="composer-bar">
          <!-- 次要操作按钮：手机尺寸下由 CSS 隐藏，把宽度留给输入与发送 -->
          <NButton class="composer-aux" quaternary circle size="small" title="添加附件">
            <template #icon><Plus :size="16" /></template>
          </NButton>
          <NButton class="composer-aux" quaternary circle size="small" title="引用文件">
            <template #icon><Paperclip :size="16" /></template>
          </NButton>
          <NButton class="composer-aux" quaternary circle size="small" title="联网检索">
            <template #icon><Globe :size="16" /></template>
          </NButton>
          <span class="grow"></span>
          <NSelect
            class="composer-model"
            size="tiny"
            :value="wb.runtime.model"
            :options="modelOptions"
            :consistent-menu-width="false"
            placeholder="模型"
            @update:value="onModel"
          />
          <!-- 进行中显示停止按钮，否则显示发送按钮 -->
          <NButton
            v-if="busy"
            class="send-btn stop-btn"
            type="error"
            circle
            title="停止回复"
            @click="stopChat"
          >
            <template #icon><Square :size="13" /></template>
          </NButton>
          <NButton
            v-else
            class="send-btn"
            type="primary"
            circle
            :disabled="!draft.trim()"
            title="发送"
            @click="submit"
          >
            <template #icon><Send :size="16" /></template>
          </NButton>
        </div>
      </div>
      <div class="composer-foot">
        <span class="muted tiny">
          <component :is="busy ? Loader2 : Sparkles" :size="12" :class="{ spin: busy }" />
          {{ busy ? '智能体正在回复，可点击红色按钮停止…' : '智能体可能会调用工具，请留意确认提示' }}
        </span>
      </div>
    </footer>
  </div>
</template>
