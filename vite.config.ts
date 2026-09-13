import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileViewerRenderers } from '@file-viewer/vite-plugin'

// 生产构建输出到 /static，配合 FastAPI 已有的 StaticFiles("/static") 挂载直接托管。
// base 设为 /static/，使打包后的资源以 /static/assets/... 形式被后端 serving。
// 开发模式下用 proxy 把 /api 与 /ws 转发到 FastAPI(默认 8000)。
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // flyfish-file-viewer 是 @file-viewer/web-full 注册的 Web Component，交给浏览器处理
          isCustomElement: (tag) => tag === 'flyfish-file-viewer',
        },
      },
    }),
    // 把 file-viewer 的 renderer / worker / wasm / 字体等运行时资源拷贝进构建产物（同源自托管）。
    // inject: false —— 不把 renderer 模块注入入口 HTML；renderer 改为运行时按需动态加载，
    // 否则 100+ 渲染器 chunk 全部进入 entry 预加载，弱网下页面直接超时。
    // chunkStrategy: 'none' —— 不让插件注入 rolldown 分组规则：默认分组会把 entry 也在用的
    // 共享模块并进 file-viewer-* 组 chunk，导致 entry 静态 import 该大 chunk 并 preload。
    // 退出后 rolldown 按动态 import 边界自然切分，renderer 只存在于按需子图。
    fileViewerRenderers({ copyAssets: true, inject: false, chunkStrategy: 'none' }),
  ],
  base: '/static/',
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': { target: 'http://localhost:8000', changeOrigin: true },
      '/ws': { target: 'ws://localhost:8000', ws: true },
    },
  },
  build: {
    outDir: 'static',
    emptyOutDir: true,
  },
})
