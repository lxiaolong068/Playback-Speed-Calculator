# 播放速度与有声书进度计算器

[English](README.md) | [简体中文](README_CN.md)

一个现代化、用户友好的网络应用，帮助用户计算媒体播放的调整时长和追踪有声书阅读进度。使用React和TypeScript构建，具有清晰和响应式的设计。

![版本](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6.svg)
![许可证](https://img.shields.io/badge/license-MIT-green.svg)

## 🌟 功能特点

### 播放速度计算器
- 根据原始时长和播放速度计算调整后的时长
- 实时计算节省的时间
- 支持多种时间格式（时:分:秒）
- 现代化界面展示计算结果
- 移动端响应式设计

### 有声书进度计算器
- 轻松追踪有声书进度
- 计算完成和剩余百分比
- 时间格式输入验证
- 清晰的进度可视化展示
- 移动端友好界面

## 🚀 快速开始

### 系统要求
- Node.js (v14.0.0 或更高)
- npm (v6.0.0 或更高)

### 安装步骤

1. 克隆仓库：
```bash
git clone https://github.com/yourusername/Playback-Speed-Calculator.git
```

2. 进入项目目录：
```bash
cd Playback-Speed-Calculator
```

3. 安装依赖：
```bash
npm install
```

4. 启动开发服务器：
```bash
npm run dev
```

应用将在 `http://localhost:5173` 运行（如果5173端口被占用，将使用其他端口）。

## 🚀 部署说明

这是一个静态网页应用，可以部署到多个平台。以下是部署选项：

### 生产环境构建

首先，创建生产环境构建：
```bash
npm run build
```
这将在`dist`目录中生成优化后的生产文件。

### 部署选项

#### 1. GitHub Pages
1. 更新`vite.config.ts`：
```typescript
export default defineConfig({
  base: '/Playback-Speed-Calculator/', // 替换为你的仓库名
  // ... 其他配置
})
```
2. 创建`.github/workflows/deploy.yml`：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: dist
```

#### 2. Netlify
1. 注册Netlify账号
2. 连接你的GitHub仓库
3. 配置构建设置：
   - 构建命令：`npm run build`
   - 发布目录：`dist`
4. 点击"Deploy site"部署

#### 3. Vercel
1. 注册Vercel账号
2. 导入你的GitHub仓库
3. 构建设置将被自动检测
4. 点击"Deploy"部署

#### 4. 静态网页托管
将`dist`目录的内容上传到任何静态网页托管服务：
- Amazon S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- 任何支持静态文件的网页托管服务

### 环境变量（如需要）
在根目录创建`.env`文件：
```env
VITE_APP_TITLE=Playback Speed Calculator
VITE_APP_BASE_URL=https://your-domain.com
```

对于生产环境，在你的托管平台的环境设置中设置这些变量。

## 💻 使用指南

### 播放速度计算器

1. 输入媒体原始时长（小时、分钟、秒）
2. 选择或输入期望的播放速度（如1.5倍、2倍）
3. 计算器将即时显示：
   - 调整后的播放时长
   - 节省的时间
   - 清晰的结果可视化展示

### 有声书进度计算器

1. 输入有声书总时长
2. 输入已收听时长
3. 获取即时计算结果：
   - 完成百分比
   - 剩余百分比
   - 进度可视化指示

## 🛠️ 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **构建工具**: Vite
- **状态管理**: React Hooks
- **SEO优化**: React Helmet Async
- **图标库**: Lucide React

## 📱 响应式设计

应用完全响应式，在以下设备上都能完美运行：
- 台式电脑
- 平板电脑
- 手机
- 不同尺寸和方向的屏幕

## 🔍 SEO优化

- 优化的meta标签，提升搜索引擎可见性
- 合理的标题层级结构
- 语义化HTML结构
- 移动端友好设计（适应Google移动优先索引）
- 快速加载时间
- 规范的URL实现

## 🤝 参与贡献

我们欢迎所有形式的贡献！请随时提交Pull Request。

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/新特性`)
3. 提交更改 (`git commit -m '添加新特性'`)
4. 推送到分支 (`git push origin feature/新特性`)
5. 创建Pull Request

## 📝 许可证

本项目采用MIT许可证 - 详见 [LICENSE](LICENSE) 文件。

## 🌐 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- Opera (最新版)

## 📈 未来改进计划

- 用户账户系统，保存进度
- 进度数据导出/导入功能
- 深色模式支持
- 更多计算工具
- 进度可视化改进
- 与主流有声书平台集成

## 👥 技术支持

如需支持，请在GitHub仓库创建issue或联系维护者。

## ✨ 致谢

- React团队提供的出色框架
- Tailwind CSS团队提供的实用优先的CSS框架
- 所有为项目做出贡献的贡献者

---

由 [您的名字/团队名称] 用❤️制作
