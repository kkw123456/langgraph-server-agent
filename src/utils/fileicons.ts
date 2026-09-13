/**
 * 文件图标映射（#66）：按扩展名返回 lucide 图标 + 主题色。
 * 应用位置：工作目录文件树（FilePanel）、输入框待传附件（ChatWindow attach-chip）、
 * 聊天附件卡片（MessageBubble ma-card），保证三处图标一致。
 */
import type { Component } from 'vue'
import {
  Binary, Braces, Database, FileArchive, FileCode, FileJson, FileSpreadsheet,
  FileText, FileType, Film, Globe, Image, KeyRound, Music, Package,
  Palette, Presentation, Terminal,
} from 'lucide-vue-next'

export interface FileIconInfo {
  icon: Component
  color: string
}

/** 扩展名（小写、不含点）；无扩展名返回 '' */
export function extOf(name?: string | null): string {
  const n = (name || '').toLowerCase()
  const i = n.lastIndexOf('.')
  return i > 0 ? n.slice(i + 1) : ''
}

const GRAY = '#8a8f98'

/** 扩展名 → 图标/颜色；同色系代表同类，色值参考主流语言/应用标识色 */
const MAP: Record<string, FileIconInfo> = {
  // 脚本与编程语言
  py: { icon: FileCode, color: '#3572A5' },
  js: { icon: FileCode, color: '#e8c93e' },
  mjs: { icon: FileCode, color: '#e8c93e' },
  cjs: { icon: FileCode, color: '#e8c93e' },
  jsx: { icon: FileCode, color: '#61dafb' },
  ts: { icon: FileCode, color: '#3178c6' },
  tsx: { icon: FileCode, color: '#3178c6' },
  vue: { icon: FileCode, color: '#41b883' },
  go: { icon: FileCode, color: '#00ADD8' },
  rs: { icon: FileCode, color: '#dea584' },
  java: { icon: FileCode, color: '#b07219' },
  c: { icon: FileCode, color: '#7f8c9b' },
  h: { icon: FileCode, color: '#7f8c9b' },
  cpp: { icon: FileCode, color: '#f34b7d' },
  cc: { icon: FileCode, color: '#f34b7d' },
  cxx: { icon: FileCode, color: '#f34b7d' },
  hpp: { icon: FileCode, color: '#f34b7d' },
  cs: { icon: FileCode, color: '#178600' },
  php: { icon: FileCode, color: '#4F5D95' },
  rb: { icon: FileCode, color: '#701516' },
  swift: { icon: FileCode, color: '#F05138' },
  kt: { icon: FileCode, color: '#A97BFF' },
  lua: { icon: FileCode, color: '#000080' },
  pl: { icon: FileCode, color: '#0298c3' },
  dart: { icon: FileCode, color: '#00B4AB' },
  scala: { icon: FileCode, color: '#c22d40' },
  // 标记 / 样式 / 数据
  html: { icon: Globe, color: '#e34c26' },
  htm: { icon: Globe, color: '#e34c26' },
  xml: { icon: Braces, color: '#0060ac' },
  css: { icon: Palette, color: '#563d7c' },
  scss: { icon: Palette, color: '#c6538c' },
  sass: { icon: Palette, color: '#c6538c' },
  less: { icon: Palette, color: '#2b5e91' },
  json: { icon: FileJson, color: '#cbcb41' },
  jsonc: { icon: FileJson, color: '#cbcb41' },
  json5: { icon: FileJson, color: '#cbcb41' },
  yml: { icon: Braces, color: '#6d8086' },
  yaml: { icon: Braces, color: '#6d8086' },
  toml: { icon: Braces, color: '#9c4221' },
  ini: { icon: Braces, color: GRAY },
  cfg: { icon: Braces, color: GRAY },
  conf: { icon: Braces, color: GRAY },
  env: { icon: KeyRound, color: '#ecd53f' },
  md: { icon: FileText, color: '#519aba' },
  markdown: { icon: FileText, color: '#519aba' },
  mdx: { icon: FileText, color: '#519aba' },
  txt: { icon: FileText, color: GRAY },
  log: { icon: FileText, color: GRAY },
  sql: { icon: Database, color: '#e38c00' },
  sh: { icon: Terminal, color: '#89e051' },
  bash: { icon: Terminal, color: '#89e051' },
  zsh: { icon: Terminal, color: '#89e051' },
  ps1: { icon: Terminal, color: '#012456' },
  bat: { icon: Terminal, color: '#C1F12E' },
  cmd: { icon: Terminal, color: '#C1F12E' },
  ipynb: { icon: Braces, color: '#DA5B0B' },
  // 表格 / 文档 / 演示
  csv: { icon: FileSpreadsheet, color: '#237346' },
  tsv: { icon: FileSpreadsheet, color: '#237346' },
  xlsx: { icon: FileSpreadsheet, color: '#217346' },
  xls: { icon: FileSpreadsheet, color: '#217346' },
  xlsm: { icon: FileSpreadsheet, color: '#217346' },
  ods: { icon: FileSpreadsheet, color: '#217346' },
  doc: { icon: FileType, color: '#2b579a' },
  docx: { icon: FileType, color: '#2b579a' },
  odt: { icon: FileType, color: '#2b579a' },
  rtf: { icon: FileType, color: '#2b579a' },
  pdf: { icon: FileType, color: '#d14024' },
  ppt: { icon: Presentation, color: '#d24726' },
  pptx: { icon: Presentation, color: '#d24726' },
  odp: { icon: Presentation, color: '#d24726' },
  // 图片
  png: { icon: Image, color: '#a074c4' },
  jpg: { icon: Image, color: '#a074c4' },
  jpeg: { icon: Image, color: '#a074c4' },
  gif: { icon: Image, color: '#a074c4' },
  webp: { icon: Image, color: '#a074c4' },
  bmp: { icon: Image, color: '#a074c4' },
  ico: { icon: Image, color: '#a074c4' },
  tiff: { icon: Image, color: '#a074c4' },
  heic: { icon: Image, color: '#a074c4' },
  svg: { icon: Image, color: '#ffb13b' },
  // 音视频
  mp4: { icon: Film, color: '#e0823d' },
  avi: { icon: Film, color: '#e0823d' },
  mov: { icon: Film, color: '#e0823d' },
  mkv: { icon: Film, color: '#e0823d' },
  webm: { icon: Film, color: '#e0823d' },
  flv: { icon: Film, color: '#e0823d' },
  wmv: { icon: Film, color: '#e0823d' },
  mp3: { icon: Music, color: '#7d6ee0' },
  wav: { icon: Music, color: '#7d6ee0' },
  flac: { icon: Music, color: '#7d6ee0' },
  ogg: { icon: Music, color: '#7d6ee0' },
  m4a: { icon: Music, color: '#7d6ee0' },
  aac: { icon: Music, color: '#7d6ee0' },
  // 压缩 / 二进制 / 包
  zip: { icon: FileArchive, color: '#eca848' },
  rar: { icon: FileArchive, color: '#eca848' },
  '7z': { icon: FileArchive, color: '#eca848' },
  tar: { icon: FileArchive, color: '#eca848' },
  gz: { icon: FileArchive, color: '#eca848' },
  bz2: { icon: FileArchive, color: '#eca848' },
  xz: { icon: FileArchive, color: '#eca848' },
  tgz: { icon: FileArchive, color: '#eca848' },
  iso: { icon: FileArchive, color: '#eca848' },
  jar: { icon: Package, color: '#e76f00' },
  war: { icon: Package, color: '#e76f00' },
  whl: { icon: Package, color: '#4B8BBE' },
  exe: { icon: Binary, color: GRAY },
  dll: { icon: Binary, color: GRAY },
  so: { icon: Binary, color: GRAY },
  bin: { icon: Binary, color: GRAY },
  dmg: { icon: Binary, color: GRAY },
  msi: { icon: Binary, color: GRAY },
  apk: { icon: Package, color: '#3DDC84' },
}

/** 未知扩展名的兜底图标 */
const FALLBACK: FileIconInfo = { icon: FileText, color: GRAY }

/** 文件名 → 图标信息（图标 + 主题色） */
export function fileIcon(name?: string | null): FileIconInfo {
  const ext = extOf(name)
  return (ext && MAP[ext]) || FALLBACK
}
