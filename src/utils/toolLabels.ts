// 工具名 → 中文名映射：前端展示统一走 toolLabel()，
// 未登记的工具回退显示原名（如自定义技能工具）。
export const TOOL_LABELS: Record<string, string> = {
  calculator: '计算器',
  get_current_datetime: '获取当前时间',
  web_fetch: '网页抓取',
  run_python: '运行 Python',
  list_dir: '浏览目录',
  read_file: '读取文件',
  write_file: '写入文件',
  make_dir: '创建目录',
  search_files: '搜索文件',
  delete_file: '删除文件',
}

export function toolLabel(name: string): string {
  return TOOL_LABELS[name] || name || '工具'
}
