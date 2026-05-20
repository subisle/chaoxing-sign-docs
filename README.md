# 学习通签到助手文档

这是一个独立的 VitePress 文档仓库，用于提供“学习通签到助手”的用户使用说明。

文档原则：

- 只写功能与使用方法
- 不写实现原理
- 站在终端用户角度组织内容

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## StackBlitz

导入仓库后，在项目根目录执行：

```bash
npm install
npm run dev
```

默认文档目录已经配置好，直接启动即可预览 VitePress 站点。

## Cloudflare Pages 部署

推荐部署参数：

- Framework preset：`None`
- Build command：`npm run build`
- Build output directory：`docs/.vitepress/dist`
- Root directory：仓库根目录
- Node.js version：`20`

### 接入步骤

1. 登录 Cloudflare Dashboard
2. 打开 `Workers & Pages`
3. 选择 `Create application`
4. 选择 `Pages`
5. 连接 GitHub 仓库 `subisle/chaoxing-sign-docs`
6. 按上面的构建参数填写
7. 点击部署

### 自定义域名

这个仓库默认已经使用：

```ts
base: "/"
```

所以更适合绑定独立域名或子域名，例如：

- `docs.example.com`
- `help.example.com`

在 Cloudflare Pages 项目中：

1. 打开 `Custom domains`
2. 添加你的域名
3. 按 Cloudflare 提示完成 DNS 绑定
4. 等待证书签发完成

### 后续更新

文档改动后直接推送到 `main`，Cloudflare Pages 会自动重新部署。

## 目录说明

- `docs/`：VitePress 文档内容
- `docs/.vitepress/`：站点配置与主题样式
