// 响应式断点：把「视口尺寸」变成组件可直接使用的响应式数据。
//
// 为什么不用纯 CSS 媒体查询：
// 布局里有几处是「结构」而非「样式」差异 —— 例如窄屏时右侧面板要变成覆盖层、
// 会话栏要变成抽屉。这类差异只能由 JS 决定渲染成哪种 DOM，因此统一在这里
// 用 matchMedia 维护一套断点状态，样式层面的细节仍交给 style.css 的媒体查询。
//
// 断点定义（与 style.css 中的媒体查询保持一致）：
//   lg  ≥ 1280px   完整三栏，右侧面板常驻
//   md  ≥ 1024px   三栏，会话栏变窄
//   sm  ≥ 768px    右侧面板默认收成图标条，会话栏默认隐藏
//   xs  < 768px    单栏 + 抽屉导航 + 底部 Tab 栏
import { ref, computed, readonly, onMounted, onBeforeUnmount } from 'vue'

// 模块级单例：多个组件共享同一份监听，避免重复注册 resize 处理
const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1440)
const height = ref(typeof window !== 'undefined' ? window.innerHeight : 900)
const portrait = ref(
  typeof window !== 'undefined'
    ? window.matchMedia('(orientation: portrait)').matches
    : false,
)

let listeners = 0
const queries: MediaQueryList[] = []
let onResize: (() => void) | null = null

function sync(): void {
  width.value = window.innerWidth
  height.value = window.innerHeight
  portrait.value = window.matchMedia('(orientation: portrait)').matches
}

/** 首次有组件使用时才注册监听；全部卸载后自动移除，避免内存泄漏 */
function acquire(): void {
  if (typeof window === 'undefined') return
  listeners += 1
  if (listeners > 1) return

  onResize = () => sync()
  window.addEventListener('resize', onResize, { passive: true })
  window.addEventListener('orientationchange', onResize, { passive: true })
  // 仅监听 resize 不够：某些浏览器（尤其是移动端）在旋转后
  // 只更新 matchMedia 而不立刻触发 resize，这里额外监听尺寸类查询
  for (const q of [
    '(min-width: 1280px)',
    '(min-width: 1024px)',
    '(min-width: 768px)',
    '(orientation: portrait)',
  ]) {
    const m = window.matchMedia(q)
    m.addEventListener('change', onResize)
    queries.push(m)
  }
  sync()
}

function release(): void {
  if (typeof window === 'undefined') return
  listeners -= 1
  if (listeners > 0) return
  if (onResize) {
    window.removeEventListener('resize', onResize)
    window.removeEventListener('orientationchange', onResize)
  }
  for (const m of queries) {
    if (onResize) m.removeEventListener('change', onResize)
  }
  queries.length = 0
  onResize = null
}

/**
 * 使用当前断点。
 *
 * 返回值全部以 getter 暴露：对象引用保持稳定，读取时取最新值，
 * 因此在模板与 computed 中直接使用即可获得响应式更新。
 * 组件卸载时自动清理监听，可安全地在多个组件中同时调用。
 */
export interface Breakpoint {
  /** 当前视口宽度（px） */
  readonly width: number
  /** 当前视口高度（px） */
  readonly height: number
  /** 是否为竖屏 */
  readonly portrait: boolean
  /** ≥1280：完整三栏，右侧面板常驻 */
  readonly isLg: boolean
  /** ≥1024：可容纳三栏 */
  readonly isMd: boolean
  /** ≥768：平板尺寸 */
  readonly isSm: boolean
  /** <768：手机尺寸，需要抽屉 + 底部导航 */
  readonly isXs: boolean
  /** 是否触摸设备（触屏下加大点击热区） */
  readonly touch: boolean
  /** 右面板是否应以「覆盖层」形式出现（窄屏下的全屏预览） */
  readonly overlayPanel: boolean
}

export function useBreakpoint(): Breakpoint {
  const hasWindow = typeof window !== 'undefined'
  const touch = hasWindow && window.matchMedia('(hover: none), (pointer: coarse)').matches

  const isLg = computed(() => width.value >= 1280)
  const isMd = computed(() => width.value >= 1024)
  const isSm = computed(() => width.value >= 768)
  const isXs = computed(() => width.value < 768)

  onMounted(acquire)
  onBeforeUnmount(release)

  return {
    get width() { return width.value },
    get height() { return height.value },
    get portrait() { return portrait.value },
    get isLg() { return isLg.value },
    get isMd() { return isMd.value },
    get isSm() { return isSm.value },
    get isXs() { return isXs.value },
    get touch() { return touch },
    get overlayPanel() { return !isMd.value },
  }
}

/** 供非组件模块（如启动时的布局初始化）读取一次当前宽度 */
export function currentWidth(): number {
  return typeof window === 'undefined' ? 1440 : window.innerWidth
}
