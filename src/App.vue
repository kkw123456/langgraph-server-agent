<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  state, loadConvs, loadSkills, selectConv, newChat, deleteConv,
  sendText, toggleSkill, removeSkill, reloadSkills, createSkill,
} from './store'
import type { CreateSkillPayload } from './types'
import ConversationList from './components/ConversationList.vue'
import ChatWindow from './components/ChatWindow.vue'
import SkillPanel from './components/SkillPanel.vue'
import SkillModal from './components/SkillModal.vue'
import FilePanel from './components/FilePanel.vue'

const showPanel = ref(true)
const tab = ref<'skills' | 'files'>('skills')
const showModal = ref(false)

onMounted(async () => {
  await Promise.all([loadConvs(), loadSkills()])
})

async function onSubmit(payload: CreateSkillPayload): Promise<void> {
  const r = await createSkill(payload)
  if (r.ok) showModal.value = false
  else alert('创建失败: ' + (r.error || '未知错误'))
}
</script>

<template>
  <div id="app">
    <aside class="sidebar">
      <div class="brand">🤖 LangGraph Agent</div>
      <button class="primary" @click="newChat">+ 新对话</button>
      <ConversationList
        :convs="state.convs"
        :current="state.current"
        @select="selectConv"
        @delete="deleteConv"
      />
      <div class="sidebar-foot">
        <button class="ghost" @click="showPanel = true; tab = 'skills'">🧩 技能管理</button>
        <button class="ghost" @click="showPanel = true; tab = 'files'">📁 工作目录</button>
      </div>
    </aside>

    <main class="main">
      <ChatWindow @send="sendText" />
    </main>

    <aside class="right" v-show="showPanel">
      <div class="tabs">
        <button :class="{ active: tab === 'skills' }" @click="tab = 'skills'">🧩 技能</button>
        <button :class="{ active: tab === 'files' }" @click="tab = 'files'">📁 文件</button>
        <button class="close" title="收起" @click="showPanel = false">✕</button>
      </div>
      <SkillPanel
        v-show="tab === 'skills'"
        :skills="state.skills"
        @toggle="toggleSkill"
        @remove="removeSkill"
        @reload="reloadSkills"
        @add="showModal = true"
        @close="showPanel = false"
      />
      <FilePanel v-show="tab === 'files'" />
    </aside>
  </div>

  <SkillModal :open="showModal" @close="showModal = false" @submit="onSubmit" />
</template>
