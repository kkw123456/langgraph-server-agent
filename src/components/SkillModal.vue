<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { NModal, NCard, NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import type { CreateSkillPayload } from '../types'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: []; submit: [payload: CreateSkillPayload] }>()
const message = useMessage()

const form = reactive<CreateSkillPayload>({ name: '', description: '', code: '' })
const submitting = ref(false)

// 每次打开重置表单
watch(
  () => props.open,
  (v) => { if (v) { form.name = ''; form.description = ''; form.code = ''; submitting.value = false } },
)

function submit(): void {
  if (!form.code.trim()) { message.warning('代码不能为空'); return }
  submitting.value = true
  emit('submit', { ...form })
}
</script>

<template>
  <NModal :show="open" @update:show="emit('close')">
    <NCard class="modal-card" title="新建自定义技能" :bordered="false" size="medium" style="width: 560px; max-width: 94vw">
      <NForm label-placement="top" :show-feedback="false">
        <NFormItem label="名称">
          <NInput v-model:value="form.name" placeholder="我的技能" />
        </NFormItem>
        <NFormItem label="描述">
          <NInput v-model:value="form.description" placeholder="这个技能做什么" />
        </NFormItem>
        <NFormItem label="代码（用 @tool 装饰函数，可定义 META 元信息）">
          <NInput
            v-model:value="form.code"
            type="textarea"
            :autosize="{ minRows: 10, maxRows: 20 }"
            placeholder="用 @tool 装饰定义一个工具函数"
          />
        </NFormItem>
      </NForm>

      <template #footer>
        <div class="modal-actions">
          <NButton @click="emit('close')">取消</NButton>
          <NButton type="primary" :loading="submitting" @click="submit">创建</NButton>
        </div>
      </template>
    </NCard>
  </NModal>
</template>
