"""语音处理技能：TTS 文字转语音（edge-tts）与 STT 语音转文字（OpenAI 兼容接口）。

- TTS 输出 mp3 到工作目录 audio/，前端文件面板可试听/下载；
- STT 依赖 OpenAI 兼容的 /audio/transcriptions 接口，未配置或网关不支持时给出明确提示。
"""
import asyncio
import os
import time

import requests

from langchain_core.tools import tool

import workspace
from config import OPENAI_API_KEY, OPENAI_BASE_URL


def _safe_path(path: str) -> str:
    root = workspace.current_root()
    full = os.path.normpath(os.path.join(root, path))
    if full != root and not full.startswith(root + os.sep):
        raise ValueError("路径越界")
    return full


@tool
def tts_speak(text: str, voice: str = "zh-CN-XiaoxiaoNeural") -> str:
    """把文字转换为语音 mp3，保存到工作目录 audio/ 下并返回文件路径。

    Args:
        text: 要转换的文字（建议不超过 2000 字）。
        voice: 发音人，默认 zh-CN-XiaoxiaoNeural；其他常用：
               zh-CN-YunxiNeural（男声）、zh-CN-XiaoyiNeural（女声·活泼）、en-US-AriaNeural（英文）。
    """
    try:
        import edge_tts
    except ImportError:
        return "TTS 依赖未安装（edge-tts），请在服务器执行: pip install edge-tts"
    if not (text or "").strip():
        return "文本不能为空"
    try:
        d = _safe_path("audio")
        os.makedirs(d, exist_ok=True)
        out = os.path.join(d, f"tts_{int(time.time() * 1000) % 100000000}.mp3")
        async def _run():
            com = edge_tts.Communicate(text[:2000], voice)
            await com.save(out)
        asyncio.run(_run())
        if not os.path.isfile(out) or os.path.getsize(out) == 0:
            return "语音生成失败（网络或发音人不可用）"
        rel = os.path.relpath(out, workspace.current_root()).replace(os.sep, "/")
        size = os.path.getsize(out)
        return f"语音已生成: {rel}（{size} 字节），可在右侧文件面板试听或下载。"
    except Exception as e:
        return f"语音生成失败: {e}"


@tool
def stt_listen(path: str) -> str:
    """把工作目录下的音频文件转为文字（依赖 OpenAI 兼容的语音识别接口）。

    Args:
        path: 音频文件相对路径（mp3/wav/m4a/webm 等，≤25MB）。
    """
    if not OPENAI_API_KEY:
        return "未配置 OPENAI_API_KEY，无法调用语音识别"
    full = _safe_path(path)
    if not os.path.isfile(full):
        return f"文件不存在: {path}"
    if os.path.getsize(full) > 25 * 1024 * 1024:
        return "音频超过 25MB 上限"
    try:
        base = (OPENAI_BASE_URL or "https://api.openai.com/v1").rstrip("/")
        with open(full, "rb") as f:
            r = requests.post(
                f"{base}/audio/transcriptions",
                headers={"Authorization": f"Bearer {OPENAI_API_KEY}"},
                files={"file": (os.path.basename(full), f)},
                data={"model": "whisper-1"},
                timeout=120,
            )
        if r.status_code == 200:
            return r.json().get("text", "")
        return f"语音识别失败（HTTP {r.status_code}）：{r.text[:200]}。请确认推理网关支持 /audio/transcriptions。"
    except Exception as e:
        return f"语音识别失败: {e}"


def get_skill():
    from skills.base import Skill
    return Skill(
        id="audio",
        name="语音处理",
        category="语音",
        description="TTS 文字转语音（多发音人，输出 mp3）与 STT 语音转文字（OpenAI 兼容接口）。",
        tools=[tts_speak, stt_listen],
        system_prompt=(
            "用户需要朗读/配音时用 tts_speak；用户上传音频要求转写时先确认工作目录中的音频文件名，"
            "再用 stt_listen 转写。生成后把返回的文件路径告知用户以便试听。"
        ),
    )
