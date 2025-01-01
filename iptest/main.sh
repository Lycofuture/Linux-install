#!/bin/bash

set -e  # 启用错误检查，任何一个命令失败都会停止执行

# 捕获任何错误并显示自定义消息
trap 'echo "脚本执行失败，错误发生在: $BASH_COMMAND"; exit 1' ERR

# 执行第一个 Node.js 脚本
node 待检测提取.js

# 执行 Go 脚本
go run iptest.go -file 待检测ip.txt -outfile 已检测ip.csv -max 50

# 执行第二个 Node.js 脚本
node 已检测提取.js
