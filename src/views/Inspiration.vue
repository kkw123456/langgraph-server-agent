<script setup lang="ts">
// 灵感页：常用提示词/工作流模板的集合，点一下直接带进对话。
// 模板为前端静态内容，避免为一次性文案增加后端表结构。
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { NCard, NButton, NTag, NInput, NEmpty } from 'naive-ui'
import {
  Lightbulb, Search, Send, TrendingUp, LineChart, FileSearch, Rocket,
} from 'lucide-vue-next'
import { startWith } from '../store'

const router = useRouter()
const kw = ref('')

interface Idea {
  icon: unknown
  cat: string
  title: string
  desc: string
  prompt: string
}

const IDEAS: Idea[] = [
  {
    icon: TrendingUp, cat: '量化',
    title: '涨跌幅榜标的回测',
    desc: '对当日涨幅榜前列标的做策略回测并汇总表现',
    prompt: '请拉取当前涨跌幅榜前列的标的，对 MACD/EMA 策略做一次回测，输出胜率、盈亏比、最大回撤，并按表现排序。',
  },
  {
    icon: LineChart, cat: '量化',
    title: '止损距离反推仓位',
    desc: '按风险预算拆解单次仓位规模',
    prompt: '请按「风险预算」思路设计仓位规则：给定账户总资金、单次可承受亏损比例与止损距离，推导每次开仓的仓位大小，并给出公式与示例。',
  },
  {
    icon: TrendingUp, cat: '量化',
    title: '策略参数敏感性分析',
    desc: '扫描参数区间找出稳健区间',
    prompt: '请对 MACD 的 fast/slow/signal 参数做敏感性分析，输出参数网格下的收益与回撤热力数据，并指出稳健的参数区间。',
  },
  {
    icon: FileSearch, cat: '研究',
    title: '行业与公司调研',
    desc: '输出结构化调研报告',
    prompt: '请对指定行业做一次调研，输出：市场规模、竞争格局、主要玩家、近期催化与风险点，并附信息来源。',
  },
  {
    icon: FileSearch, cat: '研究',
    title: '资料速读与要点',
    desc: '把长文压缩成结论与行动项',
    prompt: '请把下面的长文压缩成结论清单，并单独列出可执行的行动项与待确认问题：\n',
  },
  {
    icon: Rocket, cat: '工程',
    title: '把脚本工程化',
    desc: '补上配置、日志、异常与测试',
    prompt: '请把下面这个一次性脚本改造成可维护的工程：拆分模块、补充配置项与日志、完善异常处理，并加上单元测试：\n',
  },
  {
    icon: Rocket, cat: '工程',
    title: '接口与数据结构设计',
    desc: '先定契约再写实现',
    prompt: '请为下述需求设计接口契约与数据结构：列出路由、请求/响应字段、错误码与分页约定，再给出实现。',
  },
  {
    icon: Lightbulb, cat: '效率',
    title: '会议纪要整理',
    desc: '从流水记录中提取决议与待办',
    prompt: '请把下面的会议记录整理成纪要，包含：议题、结论、待办（含负责人）与待决事项：\n',
  },
]

const cats = computed(() => ['全部', ...Array.from(new Set(IDEAS.map((i) => i.cat)))])
const cat = ref('全部')

const shown = computed(() => {
  const k = kw.value.trim().toLowerCase()
  return IDEAS.filter((i) => {
    if (cat.value !== '全部' && i.cat !== cat.value) return false
    if (!k) return true
    return (
      i.title.toLowerCase().includes(k) ||
      i.desc.toLowerCase().includes(k) ||
      i.prompt.toLowerCase().includes(k)
    )
  })
})

async function useIdea(i: Idea): Promise<void> {
  await router.push('/')
  await startWith(i.prompt)
}
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div class="page-title">
        <Lightbulb :size="20" />
        <h1>灵感</h1>
        <span class="muted count">{{ shown.length }} 个模板</span>
      </div>
      <div class="page-actions">
        <NInput v-model:value="kw" style="width: 240px" placeholder="搜索模板…" clearable>
          <template #prefix><Search :size="14" /></template>
        </NInput>
      </div>
    </div>

    <div class="page-body">
      <div class="scene-tabs" style="justify-content: flex-start; margin-bottom: 16px">
        <span
          v-for="c in cats"
          :key="c"
          class="scene-tab"
          :class="{ active: cat === c }"
          @click="cat = c"
        >{{ c }}</span>
      </div>

      <NEmpty v-if="!shown.length" class="page-empty" description="没有匹配的模板" />

      <div v-else class="grid-cards">
        <NCard v-for="i in shown" :key="i.title" size="small">
          <div class="card-head">
            <div class="card-name">
              <component :is="i.icon" :size="15" />
              <b>{{ i.title }}</b>
            </div>
            <NTag size="small" :bordered="false">{{ i.cat }}</NTag>
          </div>
          <p class="card-desc" style="min-height: 0">{{ i.desc }}</p>
          <div class="card-foot">
            <span class="muted tiny">点击直接带进对话</span>
            <NButton size="tiny" type="primary" @click="useIdea(i)">
              <template #icon><Send :size="13" /></template>
              使用
            </NButton>
          </div>
        </NCard>
      </div>
    </div>
  </div>
</template>
