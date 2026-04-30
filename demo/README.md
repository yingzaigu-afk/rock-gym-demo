# 岩馆 C 端系统 · Demo

基于 PRD v1.0 和 DESIGN.md 设计的微信小程序交互原型。

## 项目结构

```
demo/
├── app.js              # 应用入口
├── app.json            # 应用配置
├── app.wxss            # 全局样式
├── project.config.json # 项目配置
├── sitemap.json        # SEO配置
├── assets/             # 静态资源
│   └── tabbar/         # TabBar图标
└── pages/              # 页面
    ├── home/           # 首页
    ├── book/           # 约课模块
    │   ├── index       # 约课主页
    │   ├── coach       # 选择教练
    │   └── confirm     # 确认订单
    ├── data/           # 数据统计
    ├── competition/    # 赛事报名
    └── mine/           # 个人中心
```

## 功能模块

### 1. 首页 (home)
- 用户欢迎信息
- 会员卡状态展示
- 快捷功能入口
- 近期课程列表
- 本月数据摘要

### 2. 约课 (book)
- 选择教练
- 日期时间选择
- 课程类型选择（入门/进阶/技巧专项）
- 课程时长选择（30/60/90分钟）
- 订单确认与支付

### 3. 数据统计 (data)
- 数据总览卡片
- 周趋势图表
- 本月成就展示
- 好友排行榜

### 4. 赛事报名 (competition)
- 比赛列表Tab（正在进行/即将开始/往期回顾）
- 比赛详情卡片
- 报名入口

### 5. 个人中心 (mine)
- 用户信息展示
- 会员卡状态
- 菜单导航
- 设置入口

## 运行方式

1. 下载 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 打开项目目录
3. 导入项目（选择 `demo` 文件夹）
4. AppID 填写 `wxtest123456`（测试号）或使用自己的AppID
5. 点击编译运行

## 设计规范

详细设计规范请参考同目录下的 `DESIGN.md` 文件。

---

**版本**: v1.0  
**日期**: 2026-04-29  
**设计**: UI 设计师 Agent
