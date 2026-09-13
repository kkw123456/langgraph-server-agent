// 登录态管理：与服务端 /api/auth/* 交互，并暴露响应式状态供路由守卫使用。
//
// 设计要点：
// - 登录态由服务端 HttpOnly Cookie 承载，前端只缓存一个布尔结果用于路由判断，
//   真正的权限校验始终在服务端进行，前端状态被篡改也不会绕过鉴权。
// - `ready` 用于区分「尚未探测」与「已确认未登录」，避免刷新页面时
//   因初始状态为 false 而先闪一下登录页。
import { reactive } from 'vue'

interface AuthState {
  ready: boolean           // 是否已完成首次登录态探测
  authenticated: boolean   // 当前是否已登录
  username: string | null  // 登录用户名
  role: string             // 角色：admin | user
  enabled: boolean         // 服务端是否启用了登录校验
}

export const authState = reactive<AuthState>({
  ready: false,
  authenticated: false,
  username: null,
  role: 'user',
  enabled: true,
})

/** 查询服务端登录态。force=false 时若已探测过则直接复用缓存。 */
export async function checkAuth(force = false): Promise<AuthState> {
  if (authState.ready && !force) return authState
  try {
    const r = await fetch('/api/auth/check', { credentials: 'same-origin' })
    const d = await r.json()
    authState.authenticated = !!d.authenticated
    authState.username = d.username ?? null
    authState.role = d.role || 'user'
    // enabled=false 表示服务端未启用鉴权，此时一律视为已登录（管理员语义）
    authState.enabled = d.enabled !== false
    if (!authState.enabled) {
      authState.authenticated = true
      authState.role = 'admin'
    }
  } catch (e) {
    // 网络异常时保守处理：不认定为已登录，交由路由守卫跳登录页
    authState.authenticated = false
  }
  authState.ready = true
  return authState
}

export interface LoginResult {
  ok: boolean
  error?: string
}

/** 提交登录。成功后同步更新本地登录态。 */
export async function login(
  username: string,
  password: string,
  remember: boolean,
): Promise<LoginResult> {
  try {
    const r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ username, password, remember }),
    })
    let d: { ok?: boolean; error?: string; username?: string; role?: string } = {}
    try { d = await r.json() } catch (e) { /* 非 JSON 响应 */ }

    if (r.ok && d.ok) {
      authState.ready = true
      authState.authenticated = true
      authState.username = d.username ?? username
      authState.role = d.role || 'user'
      return { ok: true }
    }
    return {
      ok: false,
      error:
        d.error ||
        (r.status === 429 ? '尝试过于频繁，请稍后再试' : '用户名或密码错误'),
    }
  } catch (e) {
    return { ok: false, error: '网络异常，请检查连接后重试' }
  }
}

/** 退出登录并清空本地登录态。 */
export async function logout(): Promise<void> {
  try {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' })
  } catch (e) { /* 忽略：无论请求是否成功，本地状态都要清掉 */ }
  authState.authenticated = false
  authState.username = null
  authState.role = 'user'
}
