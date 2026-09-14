/**
 * 扩展名 → 预览器类型映射。
 *
 * 为什么需要它：此前预览走「先后端返回 binary 标志、再决定渲染哪种视图」，
 * 必须先拿到数据才能选渲染路径，导致：
 *   1) 打开文件要等请求返回才知道该不该加载 file-viewer，出现白屏空窗；
 *   2) file-viewer 的动态 import 只能等数据回来才触发，串行化了加载；
 *   3) 前端无法在渲染层做任何基于文件类型的预先分支。
 * 改为按后缀**提前决定**渲染路径后，打开文件即可并行触发 file-viewer 的动态
 * 加载（与拉数据同时进行），弱网下少一个 RTT，且渲染分支在模板层静态可判。
 *
 * 与后端的关系：后端仍返回 binary 标志，用作**兜底校验**——后缀映射说是文本、
 * 但后端判为二进制（如伪装成 .txt 的二进制）时以后端为准，避免把二进制塞进
 * <pre> 造成乱码或卡死。
 */
import { extOf } from './fileicons'

export type PreviewKind =
  | 'text'        // 纯文本 / 代码（hljs 高亮）
  | 'image'       // 图片
  | 'pdf'
  | 'office'      // doc/docx/ppt/pptx 等文档与演示（file-viewer 渲染）
  | 'spreadsheet' // 表格
  | 'audio'
  | 'video'
  | 'archive'     // 压缩包
  | 'unknown'     // 无扩展名 / 不可识别 → 交给 file-viewer 或提示下载

/**
 * 需要特殊渲染的扩展名 → 类型。
 * 只登记**非文本**类别：其余扩展名按文本打开（绝大多数未知扩展名的文本文件
 * 仍应以文本形式预览），这样比反向枚举「哪些是文本」更省心且不易漏。
 */
const KIND_MAP: Record<string, PreviewKind> = {
  // 表格
  csv: 'spreadsheet', tsv: 'spreadsheet',
  xlsx: 'spreadsheet', xls: 'spreadsheet', xlsm: 'spreadsheet', ods: 'spreadsheet',
  // 文档 / 演示
  doc: 'office', docx: 'office', odt: 'office', rtf: 'office',
  ppt: 'office', pptx: 'office', odp: 'office',
  pdf: 'pdf',
  // 图片
  png: 'image', jpg: 'image', jpeg: 'image', gif: 'image', webp: 'image',
  bmp: 'image', ico: 'image', tiff: 'image', heic: 'image',
  // svg 是文本格式但需按图片渲染（file-viewer 支持）
  svg: 'image',
  // 音视频
  mp4: 'video', avi: 'video', mov: 'video', mkv: 'video',
  webm: 'video', flv: 'video', wmv: 'video',
  mp3: 'audio', wav: 'audio', flac: 'audio', ogg: 'audio', m4a: 'audio', aac: 'audio',
  // 压缩 / 二进制包
  zip: 'archive', rar: 'archive', '7z': 'archive', tar: 'archive', gz: 'archive',
  bz2: 'archive', xz: 'archive', tgz: 'archive', iso: 'archive',
  jar: 'archive', war: 'archive', whl: 'archive',
  exe: 'unknown', dll: 'unknown', so: 'unknown', bin: 'unknown',
  dmg: 'unknown', msi: 'unknown', apk: 'archive',
}

/**
 * 文件名 → 预览器类型。
 *
 * 兜底规则：
 *   - 无扩展名 → unknown（如 Makefile、Dockerfile 这类无后缀文件交给
 *     file-viewer 判断，避免误当纯文本处理二进制）；
 *   - 有扩展名但未登记 → text（选型依据见 KIND_MAP 上方注释）。
 */
export function previewKind(name?: string | null): PreviewKind {
  const ext = extOf(name)
  if (!ext) return 'unknown'
  return KIND_MAP[ext] || 'text'
}

/** 该类型是否走 <flyfish-file-viewer>（即非文本渲染路径）。 */
export function needsViewer(kind: PreviewKind): boolean {
  return kind !== 'text'
}
