<script setup lang="ts">
import type { Skill } from '../types'

defineProps<{ skills: Skill[] }>()
defineEmits<{
  toggle: [s: Skill]
  remove: [id: string]
  reload: []
  add: []
  close: []
}>()
</script>

<template>
  <aside class="skills-panel">
    <div class="panel-head">
      <h3>技能管理</h3>
      <button class="ghost" @click="$emit('close')">✕</button>
    </div>

    <div class="skill-list">
      <div class="skill" v-for="s in skills" :key="s.id">
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
    </div>

    <div class="panel-actions">
      <button class="ghost" @click="$emit('reload')">重新加载</button>
      <button class="primary" @click="$emit('add')">+ 新建技能</button>
    </div>
  </aside>
</template>
