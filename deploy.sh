#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 复制CNAME文件（如果存在）
if [ -f "../public/CNAME" ]; then
  cp ../public/CNAME .
fi

# 初始化git并提交
git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
git push -f git@github.com:markmundy.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
