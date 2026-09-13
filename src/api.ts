// 通用 REST 封装，带泛型以便调用方获得强类型返回值。
//
// 统一处理两类易错点：
// - 401：登录态失效时广播 lg:unauthorized 事件，由 App 层统一跳登录页；
// - 非 JSON 响应：退化为空对象，避免调用方在 catch 里再包一层。
async function toJson<T>(r: Response): Promise<T> {
  if (r.status === 401 && !location.pathname.startsWith('/login')) {
    window.dispatchEvent(new CustomEvent('lg:unauthorized'))
  }
  try {
    return (await r.json()) as T
  } catch (e) {
    return {} as T
  }
}

export const api = {
  get:  <T = unknown>(u: string) => fetch(u).then(toJson<T>),
  post: <T = unknown>(u: string, b?: unknown) =>
    fetch(u, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b ?? {}),
    }).then(toJson<T>),
  del:  <T = unknown>(u: string) => fetch(u, { method: 'DELETE' }).then(toJson<T>),
  patch:<T = unknown>(u: string, b: unknown) =>
    fetch(u, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b),
    }).then(toJson<T>),
  // 会话隔离工作目录
  files: async <T = unknown>(cid: string, path = ''): Promise<T> => {
    const r = await fetch(`/api/conversations/${cid}/files?path=${encodeURIComponent(path)}`)
    return (await r.json()) as T
  },
  rawFileUrl: (cid: string, path: string) =>
    `/api/conversations/${cid}/files/raw?path=${encodeURIComponent(path)}`,
  // 聊天附件上传：JSON+base64，避免 multipart 依赖；limit 与后端约定（前端先拦一道）
  uploadFiles: async <T = unknown>(
    cid: string,
    files: { name: string; data: string }[],
  ): Promise<T> => {
    const r = await fetch(`/api/conversations/${cid}/files/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ files }),
    })
    return (await r.json()) as T
  },
}

/** 把浏览器 File 读成 base64（不含 data: 前缀）。 */
export function fileToBase64(f: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const s = String(reader.result || '')
      resolve(s.slice(s.indexOf(',') + 1))
    }
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(f)
  })
}
