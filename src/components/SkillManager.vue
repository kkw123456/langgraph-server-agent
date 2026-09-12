<script setup lang="ts">
import { computed, ref } from 'vue'
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
        <div class="search">
          <Search :size="14" />
          <input v-model="keyword" placeholder="搜索技能 / 工具…" />
        </div>
        <button class="ghost" @click="$emit('reload')"><RefreshCw :size="15" /> 重载</button>
        <button class="primary" @click="$emit('add')"><Plus :size="15" /> 新建技能</button>
      </div>
    </div>

    <div class="sm-cats">
      <button
        v-for="c in categories"
        :key="c"
        class="cat-chip"
        :class="{ active: activeCat === c }"
        @click="activeCat = c"
      >{{ c }}</button>
    </div>

    <div class="sm-body">
      <section v-for="g in shown" :key="g.category" class="sm-group">
        <h4 class="group-title">{{ g.category }} <span class="muted">· {{ g.list.length }}</span></h4>
        <div class="sm-grid">
          <article class="card" v-for="s in g.list" :key="s.id" :class="{ off: !s.enabled }">
            <div class="card-head">
              <div class="card-name">
                <Package :size="15" />
                <b>{{ s.name }}</b>
                <span v-if="s.builtin" class="badge">内置</span>
                <span v-else class="badge custom">自定义</span>
              </div>
              <label class="switch" :title="s.enabled ? '点击禁用' : '点击启用'">
                <input type="checkbox" :checked="s.enabled" @change="$emit('toggle', s)" />
                <span class="slider"></span>
              </label>
            </div>
            <p class="card-desc">{{ s.description || '（无描述）' }}</p>
            <div class="card-tools">
              <span v-for="t in (s.tools || [])" :key="t" class="tool-chip">{{ t }}</span>
              <span v-if="!s.tools || !s.tools.length" class="muted tiny">无工具</span>
            </div>
            <div class="card-foot">
              <span class="state" :class="s.enabled ? 'on' : 'off'">{{ s.enabled ? '已启用' : '已禁用' }}</span>
              <button v-if="!s.builtin" class="icon-btn danger" title="删除技能" @click="$emit('remove', s.id)">
                <Trash2 :size="14" />
              </button>
            </div>
          </article>
        </div>
      </section>
      <div v-if="!shown.length" class="sm-empty muted">没有匹配的技能。</div>
    </div>
  </div>
</template>
