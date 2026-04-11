# 🧮 Calculator Data - 计算器网站数据爬取

> 爬取两个计算器网站的完整数据，用于开发类似的计算器平台

## 📊 项目概览

本项目包含从两个流行的计算器网站爬取的完整数据：

### 🔗 爬取的网站

| 网站 | 工具数量 | 成功率 | 分类 |
|------|----------|--------|------|
| [clcu.online](https://clcu.online/) | 50 | 100% | 金融、健康、数学、其他 |
| [calculator.net](https://www.calculator.net/) | 204 | 99.5% | 金融、健康、数学、其他 |

**总计**: **254个计算器工具**，成功率 **99.6%**

## 📁 项目结构

```
.
├── clcu.online/              # clcu.online 数据 (50个工具)
│   ├── scraped_data/
│   │   ├── financial/        # 金融工具 (15个)
│   │   ├── health_fitness/   # 健身健康 (12个)
│   │   ├── math/             # 数学工具 (11个)
│   │   ├── other/            # 其他工具 (12个)
│   │   └── seo/              # SEO分析
│   └── README.md
│
├── calculator.net/           # calculator.net 数据 (204个工具)
│   ├── scraped_data/
│   │   ├── financial/        # 金融工具 (75个)
│   │   ├── health_fitness/   # 健身健康 (31个)
│   │   ├── math/             # 数学工具 (44个)
│   │   └── other/            # 其他工具 (54个)
│   └── README.md
│
├── COMPARISON.md             # 两个网站对比分析
└── PROJECT_SUMMARY.md        # 项目总结
```

## 🚀 快速开始

### 查看数据

#### clcu.online 数据
```bash
cd clcu.online
cat scraped_data/TOOLS_INDEX.md
```

#### calculator.net 数据
```bash
cd calculator.net
cat scraped_data/TOOLS_INDEX.md
```

#### 对比分析
```bash
cat COMPARISON.md
```

## 📋 数据内容

每个工具的 MD 文件包含：

- ✅ **基本信息**: URL、分类、文件名
- ✅ **页面信息**: 标题、描述、H1/H2标题
- ✅ **输入字段**: 字段名、类型、标签、限制
- ✅ **按钮信息**: 按钮文本、类型、点击事件
- ✅ **计算公式**: 提取的公式说明
- ✅ **页面内容**: 页面摘要和说明

## 🔥 热门工具

根据两个网站的热门度排序：

1. **Mortgage Calculator** - 房贷计算器
2. **BMI Calculator** - BMI计算器
3. **Percentage Calculator** - 百分比计算器
4. **Loan Calculator** - 贷款计算器
5. **Age Calculator** - 年龄计算器
6. **Calorie Calculator** - 卡路里计算器
7. **Investment Calculator** - 投资计算器
8. **GPA Calculator** - GPA计算器

## 📊 数据统计

### clcu.online
- 金融工具: 15个
- 健身健康: 12个
- 数学工具: 11个
- 其他工具: 12个

### calculator.net
- 金融工具: 75个 ⬆️ +400%
- 健身健康: 31个 ⬆️ +158%
- 数学工具: 44个 ⬆️ +300%
- 其他工具: 54个 ⬆️ +350%

## 💡 使用建议

### 选择参考网站

**clcu.online** - 适合快速启动
- ✅ 简洁现代的界面设计
- ✅ 50个核心工具
- ✅ 适合快速 MVP

**calculator.net** - 适合长期发展
- ✅ 204个全面工具
- ✅ SEO 友好的 URL 结构
- ✅ 功能深入详细

**混合方案** - 推荐策略
- 从 clcu.online 开始（快速验证）
- 逐步整合 calculator.net 特色功能
- 建立差异化优势

## 🛠️ 技术栈推荐

```javascript
{
  "framework": "Next.js 14",      // SSR, SEO友好
  "styling": "Tailwind CSS",      // 快速开发
  "state": "Zustand",             // 轻量级状态管理
  "validation": "Zod",            // 输入验证
  "deployment": "Vercel"          // 零配置部署
}
```

## 📖 文档说明

- **COMPARISON.md** - 两个网站的详细对比分析
- **PROJECT_SUMMARY.md** - 项目完成总结
- **clcu.online/README.md** - clcu.online 详细说明
- **calculator.net/README.md** - calculator.net 详细说明
- **scraped_data/TOOLS_INDEX.md** - 工具快速索引
- **scraped_data/summary.json** - 完整数据汇总

## 🎯 开发路线图

### MVP 阶段（2-3周）
1. Age Calculator
2. BMI Calculator
3. Percentage Calculator
4. GPA Calculator
5. Loan Calculator

### 扩展阶段（4-6周）
- 完成所有金融工具
- 完成健康工具
- 完成数学工具

### 完善阶段（2-3周）
- 性能优化
- SEO 优化
- UI/UX 改进

## 📄 许可证

本项目数据仅供学习和参考使用。

## 🔗 相关链接

- [clcu.online](https://clcu.online/)
- [calculator.net](https://www.calculator.net/)
- [GitHub 仓库](https://github.com/xiaer93/calculator-data)

## ⭐ Star History

如果这个项目对你有帮助，请给个 Star ⭐

---

**数据爬取日期**: 2026-04-11  
**项目状态**: ✅ 完成  
**数据质量**: ⭐⭐⭐⭐⭐  
**可用性**: 📦 立即可用于开发
