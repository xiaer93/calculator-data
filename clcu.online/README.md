# clcu.online 爬取项目

## 📁 项目结构

```
clcu.online/
├── 📄 README.md                 # 本文件
├── 📄 scraper.js                # 工具列表配置
├── 📄 crawl_tools.js            # 爬虫脚本
├── 📄 package.json              # 项目配置
├── 📂 scraped_data/             # 爬取的数据
│   ├── 📄 README.md             # 数据总览
│   ├── 📄 TOOLS_INDEX.md        # 工具索引
│   ├── 📄 summary.json          # 完整数据汇总
│   ├── 📂 financial/            # 金融工具 (15个)
│   ├── 📂 health_fitness/       # 健康健身 (12个)
│   ├── 📂 math/                 # 数学工具 (11个)
│   ├── 📂 other/                # 其他工具 (12个)
│   └── 📂 seo/                  # SEO分析
│       └── website_seo_analysis.md
└── 📂 node_modules/             # 依赖包
```

## 🚀 快速开始

### 查看项目总览
```bash
cat scraped_data/README.md
```

### 查看工具索引
```bash
cat scraped_data/TOOLS_INDEX.md
```

### 查看具体工具
```bash
# 例如：查看房贷计算器
cat scraped_data/financial/mortgage_calculator.md
```

### 查看SEO分析
```bash
cat scraped_data/seo/website_seo_analysis.md
```

## 📊 项目统计

- **总工具数**: 50 个
- **成功率**: 100%
- **分类数**: 4 个
- **生成文档**: 53 个 MD 文件

## 📋 工具分类

### 🔵 金融工具 (15个)
- Mortgage Calculator, Loan Calculator, Investment Calculator, etc.

### 🟢 健康健身 (12个)
- BMI Calculator, Calorie Calculator, Body Fat Calculator, etc.

### 🟡 数学工具 (11个)
- Scientific Calculator, Percentage Calculator, Matrix Calculator, etc.

### 🔴 其他工具 (12个)
- Age Calculator, GPA Calculator, Password Generator, etc.

## 🔧 重新爬取（如需要）

```bash
cd clcu.online
npm install
node crawl_tools.js
```

## 📖 详细信息

请查看 `scraped_data/README.md` 获取完整的项目文档。

---

**数据来源**: https://clcu.online/
**爬取日期**: 2026-04-11
**项目状态**: ✅ 完成
