# clcu.online 工具爬取汇总报告

## 爬取概览

**爬取日期**: 2026-04-11
**数据来源**: https://clcu.online/
**总工具数**: 50 个
**成功率**: 100% (50/50)

## 分类统计

| 分类 | 工具数量 | 占比 |
|------|----------|------|
| 金融工具 (Financial) | 15 | 30% |
| 健康健身 (Health & Fitness) | 12 | 24% |
| 数学工具 (Math) | 11 | 22% |
| 其他工具 (Other) | 12 | 24% |

## 工具清单

### 🔵 金融工具 (15个)

1. **Mortgage Calculator** (`mortgage_cal.php`)
   - 房贷计算器：计算月供、利率和贷款期限

2. **Loan Calculator** (`loan_cal.php`)
   - 贷款计算器：个人和汽车贷款计算

3. **Auto Loan Calculator** (`auto_loan_cal.php`)
   - 汽车贷款计算器

4. **Interest Calculator** (`interest_cal.php`)
   - 利息计算器

5. **Payment Calculator** (`payment_cal.php`)
   - 支付计算器

6. **Retirement Calculator** (`retirement_cal.php`)
   - 退休计算器：规划退休储蓄

7. **Investment Calculator** (`investment.php`)
   - 投资计算器：计算投资回报

8. **Inflation Calculator** (`inflation_cal.php`)
   - 通胀计算器

9. **Tax Calculator** (`income_tax.php`)
   - 税务计算器

10. **Compound Interest** (`compound_interest.php`)
    - 复利计算

11. **Salary Calculator** (`salary_cal.php`)
    - 薪资计算器

12. **Amortization Calculator** (`amortization_cal.php`)
    - 摊销计算器

13. **Finance Calculator** (`finance.php`)
    - 金融计算器

14. **Interest Rate Calculator** (`interest_rate.php`)
    - 利率计算器

15. **Sales Tax Calculator** (`sales_tax.php`)
    - 销售税计算器

### 🟢 健康健身 (12个)

1. **BMI Calculator** (`bmi.php`)
   - BMI 计算器：检查身体质量指数

2. **Calorie Calculator** (`calorie.php`)
   - 卡路里计算器：计算每日卡路里需求

3. **Body Fat Calculator** (`body_fat.php`)
   - 体脂率计算器

4. **BMR Calculator** (`bmr.php`)
   - 基础代谢率计算器

5. **Ideal Weight Calculator** (`ideal_weight.php`)
   - 理想体重计算器

6. **Pace Calculator** (`pace.php`)
   - 配速计算器

7. **Pregnancy Calculator** (`pregnancy.php`)
   - 怀孕计算器

8. **Due Date Calculator** (`Due_date_cal.php`)
   - 预产期计算器

9. **Pregnancy Conception Calculator** (`pregnancy_conception.php`)
   - 受孕计算器

10. **Army Body Fat Calculator** (`Army_fat.php`)
    - 军队体脂计算器

11. **Ovulation Calculator** (`ovulation.php`)
    - 排卵计算器

12. **Calories Burned Calculator** (`Calories_burned.php`)
    - 消耗卡路里计算器

### 🟡 数学工具 (11个)

1. **Scientific Calculator** (`scientific_cal.php`)
   - 科学计算器

2. **Fraction Calculator** (`fraction_cal.php`)
   - 分数计算器

3. **Percentage Calculator** (`percentage_cal.php`)
   - 百分比计算器

4. **Random Number Generator** (`random_num_cal.php`)
   - 随机数生成器

5. **Triangle Calculator** (`triangle_cal.php`)
   - 三角形计算器

6. **Standard Deviation** (`standard_dev_cal.php`)
   - 标准差计算器

7. **Matrix Calculator** (`matrix.php`)
   - 矩阵计算器

8. **Equation Solver** (`equation.php`)
   - 方程求解器

9. **Mean Median Mode Range** (`mmmr.php`)
   - 平均值/中位数/众数/范围计算器

10. **Circle Calculator** (`Circle.php`)
    - 圆形计算器

11. **Factor Calculator** (`factor.php`)
    - 因数计算器

### 🔴 其他工具 (12个)

1. **Age Calculator** (`Age_cal.php`)
   - 年龄计算器：计算精确年龄

2. **Date Calculator** (`date_cal.php`)
   - 日期计算器

3. **Time Calculator** (`time_cal.php`)
   - 时间计算器

4. **Hours Calculator** (`hours.php`)
   - 小时计算器

5. **GPA Calculator** (`GPA_cal.php`)
   - GPA 计算器

6. **Grade Calculator** (`grade_cal.php`)
   - 成绩计算器

7. **Password Generator** (`password.php`)
   - 密码生成器

8. **Concrete Calculator** (`Concrete_cal.php`)
   - 混凝土计算器

9. **Subnet Calculator** (`subnet.php`)
   - 子网计算器

10. **Unit Converter** (`conversion.php`)
    - 单位转换器

11. **Voltage Drop Calculator** (`voltage.php`)
    - 电压降计算器

12. **Electricity Calculator** (`Electricity.php`)
    - 电力计算器

## 热门工具（首页推荐）

根据首页 "Popular Tools" 部分，以下8个工具最受欢迎：

1. ✅ Mortgage Calculator - 计算月供、利率和贷款期限
2. ✅ BMI Calculator - 检查身体质量指数和健康状况
3. ✅ Percentage Calculator - 计算百分比、增减
4. ✅ Loan Calculator - 计算贷款支付和利息成本
5. ✅ Age Calculator - 计算精确年龄（年、月、日）
6. ✅ Calorie Calculator - 计算每日卡路里需求和消耗
7. ✅ Investment Calculator - 计算投资回报和储蓄
8. ✅ GPA Calculator - 计算平均绩点和学术表现

## 数据文件结构

```
scraped_data/
├── financial/              # 金融工具 (15个)
│   ├── mortgage_calculator.md
│   ├── loan_calculator.md
│   ├── auto_loan_calculator.md
│   └── ...
├── health_fitness/         # 健康健身 (12个)
│   ├── bmi_calculator.md
│   ├── calorie_calculator.md
│   ├── body_fat_calculator.md
│   └── ...
├── math/                   # 数学工具 (11个)
│   ├── scientific_calculator.md
│   ├── fraction_calculator.md
│   ├── percentage_calculator.md
│   └── ...
├── other/                  # 其他工具 (12个)
│   ├── age_calculator.md
│   ├── date_calculator.md
│   ├── time_calculator.md
│   └── ...
├── seo/                    # SEO 分析
│   └── website_seo_analysis.md
├── summary.json            # 爬取数据汇总
└── README.md               # 本文件
```

## 每个 MD 文件包含的信息

每个工具的 MD 文件包含以下部分：

1. **基本信息**: URL、文件名、分类
2. **页面标题**: 工具的页面标题
3. **描述**: 工具的描述信息
4. **页面结构**: H1、H2 标题
5. **输入字段**: 所有输入字段的详细信息
   - 字段名称
   - 字段类型
   - 标签
   - 占位符
   - 是否必填
   - 最小/最大值
   - 步长
6. **按钮**: 页面上的按钮信息
7. **计算公式**: 提取的公式说明（如果有）
8. **页面内容摘要**: 页面主要内容摘要

## 如何使用这些数据

### 1. 开发参考
每个工具的 MD 文件可以作为开发的参考文档，包含：
- 需要哪些输入字段
- 字段的类型和限制
- 计算公式的说明

### 2. SEO 优化
参考 `seo/website_seo_analysis.md` 文件了解：
- URL 结构
- 关键词策略
- 内链布局
- 元标签设置

### 3. 功能实现顺序
建议按照以下顺序实现：

**阶段 1 - MVP（最小可行产品）**:
1. Age Calculator
2. BMI Calculator
3. Percentage Calculator
4. Loan Calculator
5. Investment Calculator

**阶段 2 - 扩展金融工具**:
- Mortgage Calculator
- Retirement Calculator
- Compound Interest
- Salary Calculator

**阶段 3 - 健康工具**:
- Calorie Calculator
- BMR Calculator
- Body Fat Calculator
- Ideal Weight Calculator

**阶段 4 - 数学和其他工具**:
- Scientific Calculator
- Unit Converter
- GPA Calculator
- Date Calculator

## 技术实现建议

### 前端框架
- **React / Vue.js**: 组件化开发，易于管理多个工具
- **Next.js**: SSR 支持，有利于 SEO
- **Nuxt.js**: Vue 的 SSR 方案

### 样式方案
- **Tailwind CSS**: 快速开发，响应式设计
- **Material-UI**: 组件库，界面美观
- **Ant Design**: 企业级 UI 组件

### 状态管理
- **输入状态**: 使用 React hooks 或 Vuex
- **计算结果**: 实时计算或按钮触发
- **历史记录**: 可选的本地存储

### 路由设计
```
/                          # 首页
/calculators               # 所有计算器列表
/calculators/financial     # 金融工具分类
/calculators/health        # 健康工具分类
/calculators/math          # 数学工具分类
/calculators/other         # 其他工具分类
/calculators/mortgage      # 房贷计算器
/calculators/bmi           # BMI 计算器
...
```

### SEO 优化
1. 每个工具页面独立的 meta 标签
2. 结构化数据（JSON-LD）
3. sitemap.xml 生成
4. robots.txt 配置
5. 内部链接优化

## 下一步行动

1. ✅ **数据爬取完成** - 所有 50 个工具的信息已爬取
2. ✅ **SEO 分析完成** - 网站结构和 SEO 策略已分析
3. ✅ **文档生成完成** - 所有 MD 文档已生成

**建议下一步**:
1. 选择要优先实现的工具
2. 设计系统架构
3. 创建项目框架
4. 逐个实现工具功能

---

**爬取工具**: Playwright
**数据格式**: Markdown + JSON
**最后更新**: 2026-04-11
