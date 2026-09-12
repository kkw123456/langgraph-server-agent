#!/usr/bin/env python3
"""把项目部署到远程服务器。

用法：
    python3 deploy/deploy.py              # 上传 + 安装依赖 + 重启服务
    python3 deploy/deploy.py --no-deps    # 只传代码，跳过依赖安装（二次部署更快）

凭据通过环境变量覆盖：DEPLOY_HOST / DEPLOY_PORT / DEPLOY_USER / DEPLOY_PWD
"""
import os
import sys
import posixpath
import tarfile
import tempfile
import argparse
import time
import paramiko

HOST = os.getenv("DEPLOY_HOST", "39.96.79.134")
PORT = int(os.getenv("DEPLOY_PORT", "22"))
USER = os.getenv("DEPLOY_USER", "root")
PWD = os.getenv("DEPLOY_PWD", "bitget123456@")
APP_DIR = "/opt/langgraph-agent"

# 需要上传的内容（相对项目根）
INCLUDE = [
    "server.py", "config.py", "workspace.py", "requirements.txt",
    "README.md", ".env.example",
    "agent", "conversation", "skills", "tools", "auth",
    "static", "deploy/server_setup.sh",
]
EXCLUDE_DIRS = {"__pycache__", ".git", "node_modules", "venv", "data"}
EXCLUDE_FILES = {".env"}


def log(msg):
    print(f"[deploy] {msg}", flush=True)


def make_tarball() -> str:
    """打包项目为 tar.gz（排除运行时数据与缓存）。"""
    fd, path = tempfile.mkstemp(suffix=".tar.gz")
    os.close(fd)
    root = os.getcwd()

    def filt(ti: tarfile.TarInfo):
        parts = ti.name.split("/")
        if any(p in EXCLUDE_DIRS for p in parts):
            return None
        if posixpath.basename(ti.name) in EXCLUDE_FILES:
            return None
        return ti

    with tarfile.open(path, "w:gz") as tar:
        for item in INCLUDE:
            full = os.path.join(root, item)
            if not os.path.exists(full):
                log(f"跳过不存在的路径: {item}")
                continue
            tar.add(full, arcname=item, filter=filt)
    size = os.path.getsize(path) / 1024
    log(f"打包完成: {size:.1f} KB -> {path}")
    return path


def connect() -> paramiko.SSHClient:
    c = paramiko.SSHClient()
    c.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    c.connect(HOST, port=PORT, username=USER, password=PWD,
              timeout=25, banner_timeout=40, auth_timeout=40)
    log(f"已连接 {USER}@{HOST}:{PORT}")
    return c


def run(client, cmd, timeout=900, check=True):
    _in, out, err = client.exec_command(cmd, timeout=timeout)
    o = out.read().decode("utf-8", "replace")
    e = err.read().decode("utf-8", "replace")
    rc = out.channel.recv_exit_status()
    if o.strip():
        print(o, end="" if o.endswith("\n") else "\n")
    if e.strip():
        print("[stderr]", e, end="" if e.endswith("\n") else "\n")
    if check and rc != 0:
        raise RuntimeError(f"命令失败 (rc={rc}): {cmd}")
    return rc, o, e


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--no-deps", action="store_true", help="跳过 pip 依赖安装")
    args = ap.parse_args()

    if not os.path.exists("server.py"):
        log("请在项目根目录执行本脚本")
        return 1

    tar_path = make_tarball()
    client = connect()
    try:
        run(client, f"mkdir -p {APP_DIR}")

        # 上传
        log("上传代码包 ...")
        sftp = client.open_sftp()
        remote_tar = "/tmp/langgraph-agent.tar.gz"
        sftp.put(tar_path, remote_tar)
        sftp.close()
        log("上传完成")

        # 解压（保留 .env 与 data）
        run(client, f"tar -xzf {remote_tar} -C {APP_DIR} && rm -f {remote_tar}")
        run(client, f"chmod +x {APP_DIR}/deploy/server_setup.sh")

        # 执行部署
        log("执行服务器端部署脚本 ...")
        setup = f"{APP_DIR}/deploy/server_setup.sh"
        if args.no_deps:
            # 跳过依赖安装：直接重启服务
            run(client, f"cd {APP_DIR} && systemctl restart langgraph-agent && sleep 3 && systemctl is-active langgraph-agent")
        else:
            run(client, f"bash {setup}", timeout=1200)

        # 汇总
        log("=== 服务状态 ===")
        run(client, "systemctl is-active langgraph-agent", check=False)
        run(client, "systemctl status langgraph-agent --no-pager -n 6", check=False)
    finally:
        client.close()
        os.remove(tar_path)

    log(f"部署结束，访问 http://{HOST}:8000")
    return 0


if __name__ == "__main__":
    sys.exit(main())
