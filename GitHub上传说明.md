# GitHub 上传说明

当前仓库已完成本地版本归档，并已根据你提供的仓库地址准备上传说明，但尚未上传 GitHub。

## 当前状态

- 当前分支：`master`
- 当前推荐版本：`v4.5/全能去广告修复版-Shadowrocket-v4.5.sgmodule`
- 当前仓库没有远端地址，`git remote -v` 为空。
- 本机未检测到 GitHub CLI，因此上传将使用普通 Git 远端方式。
- 目标 GitHub 仓库 SSH 地址：`git@github.com:wxs0625/-.git`
- 目标 GitHub 仓库页面：`https://github.com/wxs0625/-`
- GitHub 页面推荐分支：`main`

## 上传授权状态

- 已收到仓库地址。
- 尚未收到明确上传授权。
- 在你明确说“授权上传”之前，不执行 `git remote add`、`git remote set-url`、`git branch -M main` 或 `git push`。

## 授权后将执行的命令

首次配置远端时执行：

```bash
git remote add origin git@github.com:wxs0625/-.git
git branch -M main
git push -u origin main
```

如果远端已经存在，则执行：

```bash
git remote set-url origin git@github.com:wxs0625/-.git
git branch -M main
git push -u origin main
```

## 授权上传后预计链接

- GitHub 文件页：`https://github.com/wxs0625/-/blob/main/v4.5/全能去广告修复版-Shadowrocket-v4.5.sgmodule`
- Raw 订阅链接：`https://raw.githubusercontent.com/wxs0625/-/main/v4.5/全能去广告修复版-Shadowrocket-v4.5.sgmodule`

说明：以上链接只有在你授权并成功上传后才会真正可访问。

## 上传后需要补充的记录

上传完成后，将在本文件和 `变更记录.md` 中补充：

- GitHub 仓库地址
- 本次上传 commit
- 当前推荐版本的 GitHub 文件访问链接
- 当前推荐版本的 raw 下载链接
