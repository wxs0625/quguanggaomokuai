# GitHub 上传说明

当前仓库已完成本地版本归档，并已根据你提供的仓库地址上传到 GitHub。

## 当前状态

- 当前分支：`main`
- 当前推荐版本：`v4.8/全能去广告修复版-Shadowrocket-v4.8.sgmodule`
- 当前远端地址：`https://github.com/wxs0625/quguanggaomokuai.git`
- 上传方式：普通 Git HTTPS 远端。
- 目标 GitHub 仓库 SSH 地址：`git@github.com:wxs0625/quguanggaomokuai.git`
- 目标 GitHub 仓库页面：`https://github.com/wxs0625/quguanggaomokuai`
- GitHub 页面推荐分支：`main`

## 上传授权状态

- 已收到仓库地址。
- 已收到明确上传授权。
- 已成功执行首次上传。
- SSH 远端因本机 GitHub 公钥未授权失败，已切换为 HTTPS 远端成功推送。

## 已执行的关键命令

实际成功上传使用：

```bash
git remote set-url origin https://github.com/wxs0625/quguanggaomokuai.git
git branch -M main
git push -u origin main
```

说明：首次曾尝试 SSH 远端，但本机 SSH 公钥未绑定到 GitHub，因此改用 HTTPS 远端完成上传。

## 当前可用链接

- GitHub 仓库页：`https://github.com/wxs0625/quguanggaomokuai`
- GitHub 文件页：`https://github.com/wxs0625/quguanggaomokuai/blob/main/v4.8/全能去广告修复版-Shadowrocket-v4.8.sgmodule`
- Raw 订阅链接：`https://raw.githubusercontent.com/wxs0625/quguanggaomokuai/main/v4.8/全能去广告修复版-Shadowrocket-v4.8.sgmodule`

说明：Raw 订阅链接可用于 Shadowrocket 远程模块导入。

## 上传记录

- 首次上传 commit：`6631440 更新 GitHub 仓库地址 v4.6`
- 上传完成记录 commit：以当前最新提交为准，可通过 `git log -1 --oneline` 查看。
- 当前推荐版本的 GitHub 文件访问链接已补充。
- 当前推荐版本的 raw 下载链接已补充。

## v4.8 最新修复

- 闪动校园：取消对主业务域名 `api.huachenjie.com` 的 HTTPS MITM 和 Map Local 改写，优先修复打开显示“无网络连接”。
- 百度网盘：补充 `pan.baidu.com` 活动入口、`pcs/adx`、`update.pan.baidu.com/statistics` 和 `ndstatic.cdn.bcebos.com/activity/welfare/js/` 等开屏广告相关规则。
- 规则状态：v4.8 已生成，并随本次提交同步到 GitHub。
