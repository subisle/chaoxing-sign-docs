import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "学习通签到助手",
  description: "面向用户的功能说明与使用文档",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "快速开始", link: "/guide/start" },
      { text: "创建规则", link: "/guide/rules" },
      { text: "日常使用", link: "/guide/signing" },
      { text: "通知与记录", link: "/guide/notifications" }
    ],
    sidebar: [
      {
        text: "上手指南",
        items: [
          { text: "文档首页", link: "/" },
          { text: "快速开始", link: "/guide/start" },
          { text: "创建规则", link: "/guide/rules" },
          { text: "签到与课程", link: "/guide/signing" },
          { text: "通知设置", link: "/guide/notifications" },
          { text: "学习记录", link: "/guide/history" },
          { text: "常见问题", link: "/guide/faq" }
        ]
      }
    ],
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3],
      label: "本页目录"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    darkModeSwitchLabel: "切换主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    notFound: {
      title: "页面不存在",
      quote: "你访问的页面暂时不存在。",
      linkLabel: "返回首页",
      linkText: "打开文档首页"
    }
  }
});
