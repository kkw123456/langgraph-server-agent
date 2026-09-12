import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 生产构建输出到 /static，配合 FastAPI 已有的 StaticFiles("/static") 挂载直接托管。
// base 设为 /static/，使打包后的资源以 /static/assets/... 形式被后端 serving。
// 开发模式下用 proxy 把 /api 与 /ws 转发到 FastAPI(默认 8000)。
export default defineConfig({
  plugins: [vue()],
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
