# GitHub Pages 部署指南

本指南将帮助你解决 GitHub Actions 部署到 GitHub Pages 时可能遇到的权限问题。

## 使用 GITHUB_TOKEN

我们已经在 `.github/workflows/deploy.yml` 文件中添加了 `token: ${{ secrets.GITHUB_TOKEN }}` 配置。这将使用 GitHub 自动提供的 GITHUB_TOKEN 来进行部署。在大多数情况下，这应该足够了。

## 如果仍然遇到权限问题

如果你仍然遇到 "Permission denied" 错误，你需要创建一个 Personal Access Token (PAT) 并将其添加到仓库的 Secrets 中。

### 创建 Personal Access Token (PAT)

1. 登录到你的 GitHub 账户
2. 点击右上角的头像，然后选择 "Settings"
3. 在左侧菜单中，滚动到底部并点击 "Developer settings"
4. 在左侧菜单中，点击 "Personal access tokens"，然后选择 "Tokens (classic)"
5. 点击 "Generate new token"，然后选择 "Generate new token (classic)"
6. 给你的令牌一个描述性的名称，例如 "GitHub Pages Deployment"
7. 选择以下权限范围：
   - `repo` (完整的仓库访问权限)
   - `workflow` (更新 GitHub Action 工作流程)
8. 点击 "Generate token"
9. 复制生成的令牌（你只会看到一次！）

### 将 PAT 添加到仓库的 Secrets 中

1. 前往你的仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中，点击 "Secrets and variables"，然后选择 "Actions"
4. 点击 "New repository secret"
5. 名称填写为 `PERSONAL_ACCESS_TOKEN`
6. 值填写为你刚刚创建的 PAT
7. 点击 "Add secret"

### 更新工作流文件

然后，你需要更新 `.github/workflows/deploy.yml` 文件，将 `token` 配置修改为使用你的 PAT：

```yaml
- name: Deploy 🚀
  uses: JamesIves/github-pages-deploy-action@v4
  with:
    folder: dist
    branch: gh-pages
    token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```

## 启用 GitHub Pages

确保你已经在仓库设置中启用了 GitHub Pages：

1. 前往你的仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中，点击 "Pages"
4. 在 "Source" 部分，选择 "Deploy from a branch"
5. 在 "Branch" 下拉菜单中，选择 "gh-pages"，然后点击 "Save"

## 自定义域名

如果你使用自定义域名，确保：

1. 在你的 DNS 提供商处添加了正确的 DNS 记录
2. 在仓库的 "Settings" > "Pages" 中配置了自定义域名
3. 在 `public/CNAME` 文件中添加了你的域名

## 故障排除

如果你仍然遇到问题，请检查：

1. 工作流运行日志中的详细错误信息
2. 确保你的仓库名称与 GitHub Pages 的要求匹配（对于用户页面，应该是 `<username>.github.io`）
3. 确保你的分支名称正确（对于主分支，可能是 `main` 或 `master`）
