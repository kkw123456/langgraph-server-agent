<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { CreateSkillPayload } from '../types'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: []; submit: [payload: CreateSkillPayload] }>()

const form = reactive<CreateSkillPayload>({ name: '', description: '', code: '' })

// 每次打开重置表单
watch(
  () => props.open,
  (v) => { if (v) { form.name = ''; form.description = ''; form.code = '' } },
)

function submit(): void {
  if (!form.code.trim()) { alert('代码不能为空'); return }
  emit('submit', { ...form })
}
</script>

<template>
  <div class="modal" v-if="open" @click.self="$emit('close')">
    <div class="modal-box">
      <h3>新建自定义技能</h3>
      <label>名称</label>
      <input v-model="form.name" placeholder="我的技能" />
      <label>描述</label>
      <input v-model="form.description" placeholder="这个技能做什么" />
      <label>代码（用 @tool 装饰函数，可定义 META 元信息）</label>
      <textarea
        v-model="form.code"
        rows="12"
        placeholder="用 @tool 装饰定义一个工具函数"
      ></textarea>
      <div class="modal-actions">
        <button class="ghost" @click="$emit('close')">取消</button>
        <button class="primary" @click="submit">创建</button>
      </div>
    </div>
  </div>
</template>
