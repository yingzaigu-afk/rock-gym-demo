# TabBar 图标说明

本目录需要放置 TabBar 图标文件，尺寸要求：
- iconPath: 81px × 81px (普通状态)
- selectedIconPath: 81px × 81px (选中状态)

## 需要的图标

| 页面 | 文件名 |
|------|--------|
| 首页 | home.png / home-active.png |
| 约课 | book.png / book-active.png |
| 数据 | data.png / data-active.png |
| 比赛 | competition.png / competition-active.png |
| 我的 | mine.png / mine-active.png |

## 快速生成图标

可以在微信开发者工具中右键项目 → 新建 Component，选择 icon 组件自动生成。

或者使用在线图标工具生成 81×81 的 PNG 图标放入此目录。

---

**临时方案**: 如果图标不存在，微信开发者工具会显示图标占位符，不影响调试。
