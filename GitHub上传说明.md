# GitHub 上传说明

当前仓库已完成本地版本归档，但尚未上传 GitHub。

## 当前状态

- 当前分支：`master`
- 当前推荐版本：`v4.4/全能去广告修复版-Shadowrocket-v4.4.sgmodule`
- 当前仓库没有远端地址，`git remote -v` 为空。
- 本机未检测到 GitHub CLI，因此上传将使用普通 Git 远端方式。

## 需要你授权前提供的信息

请提供一个 GitHub 仓库地址，例如：

- `https://github.com/你的用户名/你的仓库名.git`
- `git@github.com:你的用户名/你的仓库名.git`

如果还没有仓库，可以先打开这个页面新建：

- `https://github.com/new`

## 授权后将执行的命令

确认仓库地址后，我会执行：

```bash
git remote add origin <你提供的仓库地址>
git push -u origin master
```

如果远端已经存在，我会先检查 `git remote -v`，再按实际情况使用：

```bash
git remote set-url origin <你提供的仓库地址>
git push -u origin master
```

## 上传后需要补充的记录

上传完成后，将在本文件和 `变更记录.md` 中补充：

- GitHub 仓库地址
- 本次上传 commit
- 当前推荐版本的 GitHub 文件访问链接
- 当前推荐版本的 raw 下载链接
