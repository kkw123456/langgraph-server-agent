<script setup lang="ts">
// 技能管理页：按分类分组展示所有技能，支持搜索、启停、重载、新建、删除。
import { computed, ref } from 'vue'
import { NInput, NTag, NCard, NSwitch, NButton, NEmpty, NIcon } from 'naive-ui'
import { Puzzle, RefreshCw, Plus, Trash2, Search, Package } from 'lucide-vue-next'
import type { Skill } from '../types'

const props = defineProps<{ skills: Skill[] }>()
defineEmits<{
  toggle: [s: Skill]
  remove: [id: string]
  reload: []
  add: []
}>()

// 固定分类展示顺序，让「技能目录」有稳定层次
const CATEGORY_ORDER = ['系统', '文件', '代码', '网络', '数学', '通用', '其他']

const keyword = ref('')
const activeCat = ref('全部')

const grouped = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  const match = (s: Skill) =>
    !kw ||
    s.name.toLowerCase().includes(kw) ||
    (s.description || '').toLowerCase().includes(kw) ||
    (s.tools || []).some((t) => t.toLowerCase().includes(kw))

  const map = new Map<string, Skill[]>()
  for (const s of props.skills) {
    if (!match(s)) continue
    const c = s.category || '其他'
    if (!map.has(c)) map.set(c, [])
    map.get(c)!.push(s)
  }
  const arr = Array.from(map.entries()).map(([category, list]) => ({ category, list }))
  arr.sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a.category)
    const ib = CATEGORY_ORDER.indexOf(b.category)
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
  })
  return arr
})

const categories = computed(() => ['全部', ...grouped.value.map((g) => g.category)])

const shown = computed(() =>
  activeCat.value === '全部' ? grouped.value : grouped.value.filter((g) => g.category === activeCat.value),
)

const enabledCount = computed(() => props.skills.filter((s) => s.enabled).length)
</script>

<template>
  <div class="skill-manager">
    <div class="sm-head">
      <div class="sm-title">
        <Puzzle :size="20" />
        <h2>技能管理</h2>
        <span class="muted sm-count">{{ enabledCount }} / {{ skills.length }} 已启用</span>
      </div>
      <div class="sm-actions">
        <NInput v-model:value="keyword" class="sm-search" placeholder="搜索技能 / 工具…" clearable>
          <template #prefix><NIcon :component="Search" /></template>
        </NInput>
        <NButton @click="$emit('reload')">
          <template #icon><RefreshCw :size="15" /></template>
          重载
        </NButton>
        <NButton type="primary" @click="$emit('add')">
          <template #icon><Plus :size="15" /></template>
          新建技能
        </NButton>
      </div>
    </div>

    <div class="sm-cats">
      <NTag
        v-for="c in categories"
        :key="c"
        class="cat-chip"
        :type="activeCat === c ? 'primary' : 'default'"
        :bordered="false"
        checkable
        :checked="activeCat === c"
        @update:checked="activeCat = c"
      >{{ c }}</NTag>
    </div>

    <div class="sm-body">
      <NEmpty v-if="!shown.length" class="sm-empty" description="没有匹配的技能" />
      <section v-for="g in shown" :key="g.category" class="sm-group">
        <h4 class="group-title">{{ g.category }} <span class="muted">· {{ g.list.length }}</span></h4>
        <div class="sm-grid">
          <NCard v-for="s in g.list" :key="s.id" class="skill-card" :class="{ off: !s.enabled }" size="small">
            <div class="card-head">
              <div class="card-name">
                <Package :size="15" />
                <b>{{ s.name }}</b>
                <NTag size="small" :bordered="false" :type="s.builtin ? 'default' : 'info'">
                  {{ s.builtin ? '内置' : '自定义' }}
                </NTag>
              </div>
              <NSwitch
                :value="s.enabled"
                size="small"
                @update:value="$emit('toggle', s)"
              />
            </div>
            <p class="card-desc">{{ s.description || '（无描述）' }}</p>
            <div class="card-tools">
              <NTag v-for="t in (s.tools || [])" :key="t" size="small" :bordered="false" class="tool-chip">
                {{ t }}
              </NTag>
              <span v-if="!s.tools || !s.tools.length" class="muted tiny">无工具</span>
            </div>
            <div class="card-foot">
              <span class="state" :class="s.enabled ? 'on' : 'off'">{{ s.enabled ? '已启用' : '已禁用' }}</span>
              <NButton
                v-if="!s.builtin"
                quaternary
                circle
                size="tiny"
                title="删除技能"
                type="error"
                @click="$emit('remove', s.id)"
              >
                <template #icon><Trash2 :size="14" /></template>
              </NButton>
            </div>
          </NCard>
        </div>
      </section>
    </div>
  </div>
</template>
