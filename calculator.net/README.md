# calculator.net 爬取项目

## 📊 爬取概览

**爬取日期**: 2026-04-11
**数据来源**: https://www.calculator.net/
**总工具数**: 204 个
**成功率**: 99.5% (203/204)
**失败**: 1 个 (Time Zone Calculator - 超时)

## 📁 项目结构

```
calculator.net/
├── 📄 README.md                 # 本文件
├── 📄 scraper.js                # 工具列表配置 (204个工具)
├── 📄 crawl_tools.js            # 爬虫脚本
├── 📄 package.json              # 项目配置
└── 📂 scraped_data/             # 爬取的数据
    ├── 📄 README.md             # 数据总览
    ├── 📄 TOOLS_INDEX.md        # 工具快速索引
    ├── 📄 summary.json          # 完整数据汇总
    ├── 📂 financial/            # 金融工具 (75个)
    ├── 📂 health_fitness/       # 健身健康 (31个)
    ├── 📂 math/                 # 数学工具 (44个)
    └── 📂 other/                # 其他工具 (54个)
```

## 🔥 与 clcu.online 对比

| 指标 | clcu.online | calculator.net |
|------|-------------|----------------|
| 总工具数 | 50 | 204 |
| 金融工具 | 15 | 75 (+400%) |
| 健身健康 | 12 | 31 (+158%) |
| 数学工具 | 11 | 44 (+300%) |
| 其他工具 | 12 | 54 (+350%) |

**结论**: calculator.net 的工具数量是 clcu.online 的 **4倍**！

## 📋 工具分类详情

### 🔵 金融工具 (75个)

**主要类别**:
- 房贷相关: Mortgage, Refinance, Amortization, Payoff
- 贷款相关: Auto Loan, Personal Loan, Student Loan, Business Loan
- 投资相关: Investment, Retirement, 401K, IRA, Annuity
- 税务相关: Income Tax, Estate Tax, Marriage Tax, VAT
- 信用卡: Credit Card, Debt Payoff, Debt Consolidation
- 利息相关: Interest, Compound Interest, Simple Interest
- 其他金融: Budget, Savings, Currency, Inflation

**特色工具**:
- FHA Loan Calculator
- VA Mortgage Calculator
- HELOC Calculator
- Rent vs Buy Calculator
- IRR Calculator
- ROI Calculator
- APR Calculator

### 🟢 健身健康 (31个)

**主要类别**:
- 身体成分: BMI, Body Fat, Lean Body Mass
- 营养相关: Calorie, Macro, Protein, Carbohydrate, Fat Intake
- 怀孕相关: Pregnancy, Due Date, Conception, Ovulation
- 体重相关: Ideal Weight, Healthy Weight, Overweight
- 运动相关: Pace, Calories Burned, One Rep Max, Target Heart Rate
- 健康指标: BMR, TDEE, GFR, BAC

**特色工具**:
- Macro Calculator
- TDEE Calculator
- Period Calculator
- Body Type Calculator
- Body Surface Area Calculator

### 🟡 数学工具 (44个)

**主要类别**:
- 基础计算: Basic, Scientific, Fraction, Percentage
- 几何计算: Triangle, Circle, Area, Volume, Surface Area
- 统计计算: Standard Deviation, Statistics, Mean/Median/Mode/Range
- 概率计算: Probability, Permutation, Combination
- 数论计算: Factor, GCF, LCM, Prime Factorization
- 高级计算: Matrix, Log, Exponent, Scientific Notation

**特色工具**:
- Binary Calculator
- Hex Calculator
- Big Number Calculator
- P-value Calculator
- Z-score Calculator
- Confidence Interval Calculator

### 🔴 其他工具 (54个)

**主要类别**:
- 日期时间: Age, Date, Time, Hours, Time Zone, Day Counter
- 教育相关: GPA, Grade
- 工程计算: Concrete, Voltage, BTU, Horsepower
- 网络工具: IP Subnet, Bandwidth, Password Generator
- 转换工具: Conversion, Shoe Size, Roman Numeral
- 编码工具: Base64, URL Encode
- 生活工具: Love Calculator, Sleep Calculator, Tip Calculator

**特色工具**:
- Love Calculator
- Golf Handicap Calculator
- Dice Roller
- Bra Size Calculator
- Fuel Cost Calculator
- Gas Mileage Calculator

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

### 查看数据统计
```bash
cat scraped_data/summary.json | jq '.summary'
```

## 📈 热门工具推荐

根据两个网站的共同热门工具：

### 绝对热门（两个网站都有）
1. ✅ **Mortgage Calculator** - 房贷计算器
2. ✅ **BMI Calculator** - BMI计算器
3. ✅ **Percentage Calculator** - 百分比计算器
4. ✅ **Loan Calculator** - 贷款计算器
5. ✅ **Age Calculator** - 年龄计算器
6. ✅ **Calorie Calculator** - 卡路里计算器
7. ✅ **Investment Calculator** - 投资计算器
8. ✅ **GPA Calculator** - GPA计算器

### calculator.net 独有特色工具
1. 🌟 **Love Calculator** - 爱情计算器
2. 🌟 **Golf Handicap Calculator** - 高尔夫差点计算器
3. 🌟 **Dice Roller** - 骰子 roller
4. 🌟 **Bra Size Calculator** - 胸罩尺寸计算器
5. 🌟 **Sleep Calculator** - 睡眠计算器
6. 🌟 **TDEE Calculator** - 每日总能量消耗计算器
7. 🌟 **Macro Calculator** - 宏量营养素计算器

## 💡 开发建议

### MVP 阶段（优先实现）
建议从两个网站共同的热门工具开始：
1. Age Calculator - 最简单
2. BMI Calculator - 热门健康工具
3. Percentage Calculator - 基础数学
4. GPA Calculator - 学生常用
5. Mortgage Calculator - 复杂但热门

### 扩展阶段
- 实现 calculator.net 的独有特色工具
- 添加更多高级功能
- 优化用户体验

### 技术栈推荐
- **框架**: Next.js (React) - SEO友好
- **样式**: Tailwind CSS - 快速开发
- **状态**: React Context 或 Zustand
- **部署**: Vercel - 零配置部署

## 📖 与 clcu.online 对比分析

### URL 结构
- **clcu.online**: `/mortgage_cal.php` (PHP文件)
- **calculator.net**: `/mortgage-calculator.html` (HTML文件，更SEO友好)

### 页面结构
- **clcu.online**: 简洁，功能专注
- **calculator.net**: 更详细，包含更多选项和说明

### 工具数量
- **clcu.online**: 50个工具，适合快速MVP
- **calculator.net**: 204个工具，适合全面覆盖

### 特色功能
- **clcu.online**: 界面简洁，加载快速
- **calculator.net**: 功能全面，说明详细，包含图表

## 🔗 相关资源

### 源网站
- https://www.calculator.net/

### 技术文档
- Next.js: https://nextjs.org/docs
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/docs

### 对比项目
- **clcu.online**: 50个工具，简洁设计
- **calculator.net**: 204个工具，功能全面

## ✅ 项目状态

**状态**: ✅ 爬取完成
**完成日期**: 2026-04-11
**数据质量**: ⭐⭐⭐⭐⭐ (203/204 成功)
**可用性**: 📦 立即可用于开发

---

**提示**: calculator.net 的工具数量是 clcu.online 的 4倍，建议根据实际需求选择合适的参考网站。
