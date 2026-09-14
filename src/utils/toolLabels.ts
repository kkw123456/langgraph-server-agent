// 工具名 → 中文名映射：前端展示统一走 toolLabel()，
// 未登记的工具回退显示原名（如自定义技能工具）。
//
// 说明：这里必须保持「工具的真实 name」而不是猜测名。工具名有两个来源：
//   1) tools/builtin_tools.py  —— @tool 装饰的函数名
//   2) skills/builtin/*.py     —— 各技能内的 @tool 函数名
// 单一体。改这里之前请先 grep 后端确认名字，否则映射不会命中、界面会漏出英文原名。
export const TOOL_LABELS: Record<string, string> = {
  // ---- 基础工具（tools/builtin_tools.py）----
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

  // ---- 代码执行 ----
  run_command: '执行命令',
  run_shell: '执行命令',

  // ---- 数据库 ----
  sql_exec: '执行 SQL',
  sql_schema: '查看表结构',
  query_table: '查询数据表',
  run_sql: '执行 SQL',

  // ---- 数据可视化 ----
  plot_chart: '生成图表',
  update_chart: '修改图表',
  export_chart: '导出图表',

  // ---- 文档 ----
  parse_pdf: '解析 PDF',
  read_docx: '读取 Word',
  excel_read: '读取 Excel',
  excel_write: '写入 Excel',

  // ---- 图像 ----
  convert_image: '图片转换',
  ocr_image: '图片文字识别',

  // ---- 语音 ----
  tts_speak: '文字转语音',
  stt_listen: '语音转文字',

  // ---- 检索 ----
  kb_search: '知识库检索',
  web_search: '联网搜索',

  // ---- 模型调用 ----
  call_llm: '调用模型',
}

export function toolLabel(name: string): string {
  return TOOL_LABELS[name] || name || '工具'
}
