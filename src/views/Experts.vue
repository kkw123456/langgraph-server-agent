<script setup lang="ts">
// 专家 · 技能 · 连接器页：技能用标签页承载，连接器为只读展示。
// 技能的全部操作（启停/重载/新建/删除）与后端 /api/skills 打通。
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { NTabs, NTabPane, NCard, NTag, NEmpty, NSkeleton, useMessage } from 'naive-ui'
import { Puzzle, Plug, Bot, Check, X as XIcon } from 'lucide-vue-next'
import {
  state, loadSkills, toggleSkill, removeSkill, reloadSkills, createSkill,
} from '../store'
import type { CreateSkillPayload } from '../types'
import SkillManager from '../components/SkillManager.vue'
import SkillModal from '../components/SkillModal.vue'

const message = useMessage()
const tab = ref<'skills' | 'connectors'>('skills')
const showModal = ref(false)

// 连接器清单：与内置工具目录保持一致，仅作展示与说明
const CONNECTORS = [
  { name: '工作目录', desc: '读写当前会话隔离目录下的文件', ready: true },
  { name: 'Shell 执行', desc: '在沙箱内执行命令并返回输出', ready: true },
  { name: 'Web 检索', desc: '联网搜索与抓取页面内容', ready: true },
  { name: '计算器', desc: '安全的数学表达式求值', ready: true },
  { name: '腾讯文档', desc: '读取与写入腾讯文档（需授权）', ready: false },
  { name: 'GitHub', desc: '仓库、Issue 与 PR 操作（需授权）', ready: false },
]

async function onSubmit(payload: CreateSkillPayload): Promise<void> {
  const r = await createSkill(payload)
  if (r.ok) { showModal.value = false; message.success('技能创建成功') }
  else message.error('创建失败: ' + (r.error || '未知错误'))
}

// 侧栏「新建技能」入口跳转 /experts?new=1，进入本页时自动打开创建弹窗
const route = useRoute()
const loadingSkills = ref(true)
onMounted(async () => {
  await loadSkills()
  loadingSkills.value = false
  if (route.query.new === '1') showModal.value = true
})
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div class="page-title">
        <Puzzle :size="20" />
        <h1>专家 · 技能 · 连接器</h1>
      </div>
    </div>

    <div class="page-body page-body-flush experts-body">
      <NTabs v-model:value="tab" type="line" size="medium" class="experts-tabs">
        <NTabPane name="skills">
          <template #tab><span class="tab-label"><Puzzle :size="15" /> 技能</span></template>
        </NTabPane>
        <NTabPane name="connectors">
          <template #tab><span class="tab-label"><Plug :size="15" /> 连接器</span></template>
        </NTabPane>
      </NTabs>

      <!-- 技能首载骨架屏 -->
      <div v-if="tab === 'skills' && loadingSkills" class="grid-cards">
        <NCard v-for="i in 4" :key="'sk' + i" size="small">
          <NSkeleton text width="42%" class="sk-title" />
          <NSkeleton text :repeat="2" />
        </NCard>
      </div>

      <SkillManager
        v-else-if="tab === 'skills'"
        :skills="state.skills"
        @toggle="toggleSkill"
        @remove="removeSkill"
        @reload="reloadSkills"
        @add="showModal = true"
      />

      <div v-else class="grid-cards">
        <NCard v-for="c in CONNECTORS" :key="c.name" size="small">
          <div class="card-head">
            <div class="card-name">
              <Bot :size="15" />
              <b>{{ c.name }}</b>
            </div>
            <NTag size="small" :bordered="false" :type="c.ready ? 'success' : 'default'">
              <template #icon>
                <component :is="c.ready ? Check : XIcon" :size="12" />
              </template>
              {{ c.ready ? '已就绪' : '未接入' }}
            </NTag>
          </div>
          <p class="card-desc card-desc-flat">{{ c.desc }}</p>
        </NCard>
        <NEmpty v-if="!CONNECTORS.length" class="page-empty" description="暂无连接器" />
      </div>
    </div>

    <SkillModal :open="showModal" @close="showModal = false" @submit="onSubmit" />
  </div>
</template>
