// 路由配置：/login 登录页，其余为工作台各功能页。
//
// 布局约定：Shell.vue 承载「顶部工具栏 + 左侧图标导航」，
// 各功能页作为其子路由渲染进内容区，因此切换导航不会重建外壳。
//
// 注意 base 用 '/' 而非 import.meta.env.BASE_URL：
// 生产构建的 BASE_URL 是 '/static/'（用于让 JS/CSS 资源走 StaticFiles 挂载），
// 但页面路由不应带 /static 前缀，否则地址栏会变成 /static/login。
// 资源引用由 Vite 在构建时写死为 /static/assets/...，与此处 base 无关。
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { checkAuth, authState } from './auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue'),
    meta: { public: true },
  },
  {
    path: '/',
    component: () => import('./views/Shell.vue'),
    children: [
      { path: '', name: 'assistant', component: () => import('./views/Home.vue') },
      { path: 'projects', name: 'projects', component: () => import('./views/Projects.vue') },
      { path: 'experts', name: 'experts', component: () => import('./views/Experts.vue') },
      { path: 'automation', name: 'automation', component: () => import('./views/Automation.vue') },
      { path: 'library', name: 'library', component: () => import('./views/Library.vue') },
      { path: 'inspiration', name: 'inspiration', component: () => import('./views/Inspiration.vue') },
      { path: 'settings', name: 'settings', component: () => import('./views/Settings.vue') },
    ],
  },
  // 兜底：未知路径回主界面（未登录时会被守卫转到 /login）
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

// 全局前置守卫：未登录访问受保护页面 -> 跳登录页并记录来源
router.beforeEach(async (to) => {
  await checkAuth()

  // 服务端未启用鉴权时不做限制，避免误拦
  if (!authState.enabled) return true

  if (to.meta.public) {
    // 已登录再访问登录页，直接回主界面
    return authState.authenticated ? { path: '/' } : true
  }

  if (!authState.authenticated) {
    return { path: '/login', query: to.fullPath !== '/' ? { redirect: to.fullPath } : {} }
  }
  return true
})
