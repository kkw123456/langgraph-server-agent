import { createApp, h, defineComponent } from 'vue'
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  zhCN,
  dateZhCN,
  lightTheme,
  useMessage,
  type GlobalThemeOverrides,
} from 'naive-ui'
import App from './App.vue'
import { router } from './router'
import './style.scss'

// 主题色 #18a058：naive-ui 组件与全局 SCSS 变量（style.scss）保持一致
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#18a058',
    primaryColorHover: '#36ad6a',
    primaryColorPressed: '#0c7a43',
    primaryColorSuppl: '#36ad6a',
    borderRadius: '8px',
  },
}

// 把 naive-ui 的 message 实例暴露给非组件模块（如 store.ts）使用。
// 由于 useMessage() 必须在 provider 内部调用，这里用一个中间代理，
// 由下方 Root 组件在挂载时把真实实例注入进来。
export const message = {
  info: (c: string) => msg?.info(c),
  success: (c: string) => msg?.success(c),
  warning: (c: string) => msg?.warning(c),
  error: (c: string) => msg?.error(c),
}
let msg: ReturnType<typeof useMessage> | null = null

// 在 message provider 内部桥接实例，并把 App 渲染出来
const Bridge = defineComponent({
  setup() {
    msg = useMessage()
    return () => h(App)
  },
})

const Root = defineComponent({
  setup() {
    return () =>
      h(
        NConfigProvider,
        { theme: lightTheme, themeOverrides, locale: zhCN, dateLocale: dateZhCN },
        {
          default: () =>
            h(NDialogProvider, null, {
              default: () =>
                h(NNotificationProvider, null, {
                  default: () =>
                    h(NMessageProvider, null, { default: () => h(Bridge) }),
                }),
            }),
        },
      )
  },
})

createApp(Root).use(router).mount('#app')
