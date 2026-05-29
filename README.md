# 学习通签到助手文档

这是“学习通签到助手”的独立 VitePress 文档仓库，面向终端用户提供登录、规则配置、课程签到、通知提醒和学习记录的使用说明。

本仓库只维护用户文档和文档站部署配置，不记录后端实现细节。

## 文档内容

- [快速开始](docs/guide/start.md)：登录、同步课程、完成第一次配置。
- [创建规则](docs/guide/rules.md)：配置位置、图片、签到偏好并绑定课程。
- [签到与课程](docs/guide/signing.md)：手动签到、课程监控、常见签到方式。
- [通知设置](docs/guide/notifications.md)：邮件、Webhook、微信 Bot 通知。
- [学习记录](docs/guide/history.md)：查看成功、失败、未签到和签退状态。
- [常见问题](docs/guide/faq.md)：整理日常使用中的排查入口。

## 本地预览

```bash
npm install
npm run dev
```

默认启动 VitePress 文档站，访问终端输出的本地地址即可预览。

## 构建

```bash
npm run build
npm run preview
```

构建产物位于：

```text
docs/.vitepress/dist
```

## Cloudflare Pages 部署

推荐部署参数：

| 配置项 | 值 |
| --- | --- |
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | 仓库根目录 |
| Node.js version | `20` |

如果绑定独立域名或子域名，当前 VitePress `base` 已配置为 `/`，无需额外路径前缀。

## 维护约定

- 只写用户能看到、能操作、能排查的内容。
- 避免写内部实现、接口细节和敏感配置。
- 新增功能时同步更新首页导航、对应指南和 FAQ。
- 文档截图或示意图放在 `docs/public/illustrations/`。

## 目录结构

```text
docs/
├── index.md              # 文档站首页
├── guide/                # 用户指南
├── public/illustrations/ # 文档插图和示意图
└── .vitepress/           # VitePress 配置与主题样式
```

## License

MIT License. See [LICENSE](LICENSE).
