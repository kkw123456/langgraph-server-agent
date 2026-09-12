<script setup lang="ts">
// 应用根组件：仅承载路由出口，具体页面由 router 决定（登录页 / 主界面）。
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>
