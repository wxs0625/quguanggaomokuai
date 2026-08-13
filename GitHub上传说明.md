# v4.16 GitHub 上传记录

- 版本：v4.16
- 模块文件：v4.16/全能去广告修复版-Shadowrocket-v4.16.sgmodule
- 文件页：https://github.com/wxs0625/quguanggaomokuai/blob/main/v4.16/全能去广告修复版-Shadowrocket-v4.16.sgmodule
- Raw 链接：https://raw.githubusercontent.com/wxs0625/quguanggaomokuai/main/v4.16/全能去广告修复版-Shadowrocket-v4.16.sgmodule
- 提交信息：闪动校园稳定去开屏广告 v4.16
- 备注：v4.16 基于 v4.15 稳定进入结果，只小步处理开屏广告。

# v4.15 GitHub 上传记录

- 版本：v4.15
- 模块文件：v4.15/全能去广告修复版-Shadowrocket-v4.15.sgmodule
- 文件页：https://github.com/wxs0625/quguanggaomokuai/blob/main/v4.15/全能去广告修复版-Shadowrocket-v4.15.sgmodule
- Raw 链接：https://raw.githubusercontent.com/wxs0625/quguanggaomokuai/main/v4.15/全能去广告修复版-Shadowrocket-v4.15.sgmodule
- 提交信息：闪动校园放行启动 SDK 稳定 v4.15
- 备注：原始 PacketTunnel 日志不上传。

# v4.14 GitHub 上传记录

- 版本：v4.14
- 模块文件：v4.14/全能去广告修复版-Shadowrocket-v4.14.sgmodule
- 文件页：https://github.com/wxs0625/quguanggaomokuai/blob/main/v4.14/全能去广告修复版-Shadowrocket-v4.14.sgmodule
- Raw 链接：https://raw.githubusercontent.com/wxs0625/quguanggaomokuai/main/v4.14/全能去广告修复版-Shadowrocket-v4.14.sgmodule
- 提交信息：闪动校园日志放行启动域名 v4.14
- 备注：原始 PacketTunnel 日志已加入 .gitignore，不上传。

# GitHub 上传说明

当前仓库已完成本地版本归档，并已根据你提供的仓库地址上传到 GitHub。

## 当前状态

- 当前分支：`main`
- 当前推荐版本：`v4.13/全能去广告修复版-Shadowrocket-v4.13.sgmodule`
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
- GitHub 文件页：`https://github.com/wxs0625/quguanggaomokuai/blob/main/v4.13/全能去广告修复版-Shadowrocket-v4.13.sgmodule`
- Raw 订阅链接：`https://raw.githubusercontent.com/wxs0625/quguanggaomokuai/main/v4.13/全能去广告修复版-Shadowrocket-v4.13.sgmodule`

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

## v4.9 最新修复

- 闪动校园：暂停闪动校园相关启动阶段响应体改写，从 MITM 主机列表移除相关广告 SDK 域名，并移除快手开放广告脚本匹配，优先修复启动页卡住和闪退。
- 百度网盘：继续沿用 v4.8 开屏广告补强规则。
- 规则状态：v4.9 已生成，并随本次提交同步到 GitHub。

## v4.10 最新修复

- 闪动校园：改为完全直连稳定版，在 `[Rule]` 顶部加入闪动校园核心域名和启动 SDK 域名 `DIRECT` 白名单。
- 闪动校园：清理相关 URL Rewrite、Map Local、Script 和 MITM 主机命中项，避免通用规则继续误伤启动或联网。
- 百度网盘：继续沿用 v4.8 开屏广告补强规则。
- 规则状态：v4.10 已生成，并随本次提交同步到 GitHub。

## v4.11 最新修复

- 闪动校园：继续稳定优先，新增 `seeyouyima.com`、穿山甲/字节 SDK、腾讯 GDT 相关域名 `DIRECT` 白名单。
- 闪动校园：暂停 30 条高风险启动 SDK 改写/脚本命中，并从 MITM 主机列表移除 30 个相关主机，降低启动页卡住或闪退概率。
- 百度网盘：补齐 `pan.baidu.com/act/api/activityentry`、`pan.baidu.com/rest/2.0/pcs/adx`、`update.pan.baidu.com/statistics`、`ndstatic.cdn.bcebos.com/activity/welfare/js/` 等实际 URL Rewrite 规则。
- 规则状态：v4.11 已生成，并随本次提交同步到 GitHub。

## v4.12 最新修复

- 闪动校园：不再猜接口返回结构，改为流量隔离稳定版。
- 闪动校园：只保留核心域名和启动 SDK 的顶部 `DIRECT` 白名单，移除相关拒绝、改写、脚本和 MITM 命中。
- 核对原因：`v4.7` 是主业务接口被改写导致无网络；后续版本仍有启动 SDK 被改包/解密导致闪退风险。
- 校验状态：风险域名在 `reject`、`REJECT`、`Map Local`、`Script`、`hostname =` 中残留命中均为 `0`。
- 规则状态：v4.12 已生成，等待 GitHub 提交并推送。

## v4.13 最新修复

- 闪动校园：回到用户实测可启动的 `v4.7` 作为基线。
- 闪动校园：只取消 `api.huachenjie.com` 主业务接口劫持，避免进入后无网络。
- 闪动校园：保留 `v4.7` 中已实测可启动的启动广告规则，不再扩大修改范围。
- 校验状态：`api.huachenjie.com` 活跃 Map Local 与 MITM 命中均为 `0`；启动广告相关 5 个域名命中与 `v4.7` 一致。
- 规则状态：v4.13 已生成，等待 GitHub 提交并推送。
