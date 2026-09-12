// 通用 REST 封装，带泛型以便调用方获得强类型返回值。
async function toJson<T>(r: Response): Promise<T> {
  return (await r.json()) as T
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
}
