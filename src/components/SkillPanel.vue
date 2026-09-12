<script setup lang="ts">
import { computed } from 'vue'
import type { Skill } from '../types'

const props = defineProps<{ skills: Skill[] }>()
defineEmits<{
  toggle: [s: Skill]
  remove: [id: string]
  reload: []
  add: []
  close: []
}>()

// 固定分类展示顺序，让「技能目录」有稳定层次
const CATEGORY_ORDER = ['系统', '文件', '代码', '网络', '数学', '通用', '其他']

const grouped = computed(() => {
  const map = new Map<string, Skill[]>()
  for (const s of props.skills) {
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
</script>

<template>
  <aside class="skills-panel">
    <div class="panel-head">
      <h3>技能目录</h3>
      <button class="ghost" @click="$emit('close')">✕</button>
    </div>

    <div class="skill-groups">
      <section v-for="g in grouped" :key="g.category" class="skill-group">
        <h4 class="group-title">{{ g.category }}</h4>
        <div class="skill" v-for="s in g.list" :key="s.id">
          <div class="skill-info">
            <b>{{ s.name }}</b>
            <small>{{ s.description }}</small>
            <span class="tools">
              {{ (s.tools && s.tools.length) ? s.tools.join(', ') : '无工具' }}
            </span>
          </div>
          <div class="skill-actions">
            <button
              :class="['toggle', s.enabled ? 'on' : '']"
              @click="$emit('toggle', s)"
            >{{ s.enabled ? '● 已启用' : '○ 已禁用' }}</button>
            <button
              v-if="!s.builtin"
              class="toggle del"
              @click="$emit('remove', s.id)"
            >删除</button>
          </div>
        </div>
      </section>
    </div>

    <div class="panel-actions">
      <button class="ghost" @click="$emit('reload')">重新加载</button>
      <button class="primary" @click="$emit('add')">+ 新建技能</button>
    </div>
  </aside>
</template>
