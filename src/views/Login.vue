<script setup lang="ts">
// 登录页：Vue 3 + Naive UI 实现，登录态由服务端 HttpOnly Cookie 承载。
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  NForm, NFormItem, NInput, NButton, NCheckbox, NAlert, NIcon,
} from 'naive-ui'
import { Bot, Eye, EyeOff, AlertCircle } from 'lucide-vue-next'
import { login as doLogin, authState } from '../auth'

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')
const remember = ref(false)
const showPwd = ref(false)
const loading = ref(false)
const error = ref('')

const canSubmit = computed(() => !!username.value.trim() && !!password.value)

onMounted(() => {
  // 已登录直接回主界面，避免重复登录
  if (authState.authenticated) {
    router.replace(redirectTo.value)
    return
  }
  // 回填上次记住的用户名
  try {
    const saved = localStorage.getItem('lg_user')
    if (saved) {
      username.value = saved
      remember.value = localStorage.getItem('lg_remember') === '1'
    }
  } catch (e) { /* localStorage 不可用时忽略 */ }
})

// 登录后要跳转的目标：优先回到被拦截前的页面
const redirectTo = computed(() => {
  const r = route.query.redirect
  return typeof r === 'string' && r && r !== '/login' ? r : '/'
})

async function onSubmit(): Promise<void> {
  error.value = ''
  if (!canSubmit.value) {
    error.value = '请填写用户名和密码'
    return
  }

  loading.value = true
  const res = await doLogin(username.value.trim(), password.value, remember.value)
  loading.value = false

  if (!res.ok) {
    error.value = res.error || '登录失败'
    return
  }

  try {
    if (remember.value) {
      localStorage.setItem('lg_user', username.value.trim())
      localStorage.setItem('lg_remember', '1')
    } else {
      localStorage.removeItem('lg_user')
      localStorage.removeItem('lg_remember')
    }
  } catch (e) { /* 忽略 */ }

  router.replace(redirectTo.value)
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <div class="logo">
        <NIcon :size="27" color="#fff"><Bot /></NIcon>
      </div>

      <h1>LangGraph 智能体</h1>
      <p class="sub">请登录以继续使用</p>

      <NAlert v-if="error" type="error" class="err" :bordered="false">
        <template #icon>
          <NIcon><AlertCircle /></NIcon>
        </template>
        {{ error }}
      </NAlert>

      <NForm class="form" @submit.prevent="onSubmit">
        <NFormItem label="用户名" path="username">
          <NInput
            v-model:value="username"
            placeholder="请输入用户名"
            size="large"
            :input-props="{ autocomplete: 'username', autocapitalize: 'off', spellcheck: 'false' }"
            @keydown.enter="onSubmit"
            @input="error = ''"
          />
        </NFormItem>

        <NFormItem label="密码" path="password">
          <NInput
            v-model:value="password"
            :type="showPwd ? 'text' : 'password'"
            placeholder="请输入密码"
            size="large"
            :input-props="{ autocomplete: 'current-password' }"
            @keydown.enter="onSubmit"
            @input="error = ''"
          >
            <template #suffix>
              <NIcon
                class="pwd-toggle"
                :size="17"
                @click="showPwd = !showPwd"
              >
                <EyeOff v-if="showPwd" />
                <Eye v-else />
              </NIcon>
            </template>
          </NInput>
        </NFormItem>

        <div class="row">
          <NCheckbox v-model:checked="remember">记住我（7 天）</NCheckbox>
        </div>

        <NButton
          type="primary"
          size="large"
          block
          attr-type="submit"
          :loading="loading"
          :disabled="loading"
          @click="onSubmit"
        >
          {{ loading ? '登录中…' : '登 录' }}
        </NButton>
      </NForm>

      <div class="foot">
        登录状态通过 HttpOnly Cookie 维持<br />
        LangGraph Server Agent
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  /* 用 --app-h（dvh）而非 100vh：移动端地址栏收起时不产生多余滚动 */
  min-height: var(--app-h);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: max(24px, env(safe-area-inset-top)) 24px max(24px, env(safe-area-inset-bottom));
  background: var(--bg);
  background-image:
    radial-gradient(at 20% 15%, rgba(47, 111, 235, 0.13) 0px, transparent 55%),
    radial-gradient(at 82% 78%, rgba(24, 160, 88, 0.11) 0px, transparent 55%);
}

.login-card {
  width: 100%;
  max-width: 400px;
  background: var(--panel);
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.09), 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 40px 36px 32px;
  animation: rise 0.45s cubic-bezier(0.2, 0.8, 0.25, 1);
}

/* 小屏：卡片贴边距、内边距收窄，避免输入框过窄 */
@media (max-width: 480px) {
  .login-page { padding-left: 16px; padding-right: 16px; }
  .login-card { padding: 28px 20px 24px; border-radius: 14px; }
  h1 { font-size: 19px; }
}

/* 矮视口（如笔记本横屏分屏、手机横屏）：压缩纵向留白确保按钮可见 */
@media (max-height: 560px) {
  .login-page { align-items: flex-start; }
  .login-card { padding-top: 24px; padding-bottom: 20px; }
  .logo { width: 44px; height: 44px; margin-bottom: 12px; }
  .form { margin-top: 16px; }
  .foot { margin-top: 16px; padding-top: 12px; }
}

@keyframes rise {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}

.logo {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), #5b8def);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  box-shadow: 0 6px 18px rgba(47, 111, 235, 0.3);
}

h1 {
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.2px;
}

.sub {
  font-size: 13px;
  color: var(--muted);
  text-align: center;
  margin-top: 7px;
}

.err { margin-top: 20px; }

.form { margin-top: 24px; }

.form :deep(.n-form-item-label) {
  font-size: 13px;
  font-weight: 500;
}

.row {
  margin: -4px 0 20px;
  font-size: 13px;
}

.pwd-toggle {
  cursor: pointer;
  color: var(--muted);
}

.pwd-toggle:hover { color: var(--accent); }

.foot {
  margin-top: 26px;
  padding-top: 18px;
  border-top: 1px solid var(--panel2);
  text-align: center;
  font-size: 12px;
  color: var(--muted);
  line-height: 1.7;
}
</style>
