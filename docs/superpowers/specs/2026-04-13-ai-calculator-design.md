# AI增强万能计算器 - 设计文档

**项目名称**: Orange Calculator
**文档日期**: 2026-04-13
**版本**: 1.0.0
**状态**: 设计阶段

---

## 目录

1. [项目概述](#项目概述)
2. [核心功能](#核心功能)
3. [架构设计](#架构设计)
4. [计算器协议](#计算器协议)
5. [技术栈](#技术栈)
6. [数据结构](#数据结构)
7. [状态管理](#状态管理)
8. [响应式设计](#响应式设计)
9. [国际化设计](#国际化设计)
10. [SEO策略](#seo策略)
11. [实施路线图](#实施路线图)

---

## 项目概述

### 目标

构建一个AI增强的万能计算器平台，包含254个计算器工具，通过AI降低使用门槛并提供个性化建议。

### 核心价值

- **降低使用门槛**：用户用自然语言描述需求，AI自动识别计算器并填充参数
- **保留工具属性**：每个计算器独立页面，支持SEO
- **智能推荐**：根据用户描述推荐最合适的计算器
- **个性化建议**：付费用户获得深度分析和长期跟踪

### 商业模式

**免费层（广告变现）**
- 所有254个计算器完整可用
- 基础AI：智能推荐 + 自动填充
- 广告收入覆盖成本

**付费层（订阅变现）**
- $9.99/月 或 $79.99/年
- AI深度建议 + 长期跟踪
- 无广告体验
- 导出报告功能

---

## 核心功能

### MVP功能（8个计算器）

1. Mortgage Calculator - 房贷计算器
2. BMI Calculator - BMI计算器
3. Percentage Calculator - 百分比计算器
4. Loan Calculator - 贷款计算器
5. Age Calculator - 年龄计算器
6. Calorie Calculator - 卡路里计算器
7. Investment Calculator - 投资计算器
8. GPA Calculator - GPA计算器

### AI功能

**免费层AI（最小可行）**
- 意图识别：用户描述问题 → 推荐计算器
- 参数提取：从自然语言提取结构化数据
- 自动填充：填充到表单字段
- 纯计算结果：不提供深度建议

**付费层AI（增值服务）**
- 深度分析：根据结果提供详细建议
- 长期跟踪：记录历史数据，生成趋势报告
- 个性化计划：30天减脂计划、理财规划等
- 数据可视化：图表、趋势分析

---

## 架构设计

### 系统架构

```
┌─────────────────────────────────────────────────────────┐
│                        用户层                            │
├─────────────────────────────────────────────────────────┤
│  SEO页面          AI对话        工具列表页               │
│  /calculators/*   /chat         /tools                  │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                     Next.js前端层                        │
├─────────────────────────────────────────────────────────┤
│  页面路由       组件渲染      状态管理                   │
│  App Router    React组件     Context API                │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                     API服务层                            │
├─────────────────────────────────────────────────────────┤
│  /api/ai/extract      /api/ai/recommend                 │
│  /api/calculators/*   /api/user/*                        │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                     AI服务层                             │
├─────────────────────────────────────────────────────────┤
│  规则引擎（70%）   小模型（20%）   大模型（10%）          │
│  免费处理         GPT-4o-mini    Claude 3.5             │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                     数据层                               │
├─────────────────────────────────────────────────────────┤
│  PostgreSQL      Redis        文件系统                  │
│  用户数据        缓存         协议/内容                  │
└─────────────────────────────────────────────────────────┘
```

### 请求流程

**场景1：用户通过AI使用计算器**

```
1. 用户："我身高175cm，体重70kg，BMI多少？"
   ↓
2. 前端调用 /api/ai/extract
   ↓
3. AI服务：
   a) 规则引擎：提取身高体重（免费）
   b) 识别意图：BMI计算器
   ↓
4. 返回：{ calculator: 'bmi', params: { height: 175, weight: 70 } }
   ↓
5. 前端自动填充表单
   ↓
6. 执行计算（前端）
   ↓
7. 显示结果
```

**场景2：用户直接使用计算器**

```
1. 访问 /calculators/bmi-calculator
   ↓
2. 加载计算器协议
   ↓
3. 渲染表单
   ↓
4. 用户手动输入或点击AI辅助
   ↓
5. 执行计算
   ↓
6. 显示结果 + 组件更新（图表、仪表盘）
```

---

## 计算器协议

### 协议结构

每个计算器是一个自包含的模块，包含以下层级：

```typescript
interface CalculatorProtocol {
  // === 1. 元数据层 ===
  metadata: CalculatorMetadata;

  // === 2. SEO层 ===
  seo: SEOConfig;

  // === 3. LLM工具定义层 ===
  llm: LLMConfig;

  // === 4. UI配置层 ===
  ui: UIConfig;

  // === 5. 内容层 ===
  content: ContentConfig;

  // === 6. 国际化层 ===
  i18n: I18nConfig;

  // === 7. 计算逻辑层 ===
  calculation: CalculationLogic;
}
```

### 详细定义

#### 1. 元数据层

```typescript
interface CalculatorMetadata {
  id: string;                    // 唯一标识：bmi-calculator
  name: string;                  // 显示名称：BMI Calculator
  category: CalculatorCategory;  // 分类：health_fitness
  tags: string[];                // 标签：["health", "weight", "fitness"]
  version: string;               // 版本：1.0.0
  author?: string;               // 作者（支持第三方扩展）
  createdAt: Date;
  updatedAt: Date;
}

type CalculatorCategory =
  | 'financial'
  | 'health_fitness'
  | 'math'
  | 'other';
```

#### 2. SEO层

```typescript
interface SEOConfig {
  title: string;                 // 页面标题
  description: string;           // Meta描述
  keywords: string[];            // 关键词
  slug: string;                  // URL路径：/calculators/bmi-calculator
  ogImage?: string;              // 社交分享图片
  canonical?: string;            // 规范链接
}
```

#### 3. LLM工具定义层

```typescript
interface LLMConfig {
  // 工具描述（给AI看的）
  toolDefinition: {
    name: string;                // 函数名：calculate_bmi
    description: string;         // 功能描述
    parameters: JSONSchema;      // 参数schema
  };

  // 系统提示词
  systemPrompt: string;          // 指导AI何时使用此工具

  // 参数提取提示词
  extractionPrompt: string;      // 从用户输入提取参数

  // 结果解释提示词（付费功能）
  interpretationPrompt?: string; // 根据结果给出建议
}
```

#### 4. UI配置层

```typescript
interface UIConfig {
  // 表单配置
  form: {
    fields: FormField[];
    submitButton: {
      text: string;
      style: 'primary' | 'secondary' | 'outline';
    };
  };

  // 卡片视图（AI聊天界面用）
  card: {
    compact: CardView;           // 紧凑视图
    detailed: CardView;          // 详细视图
  };

  // 结果展示
  result: {
    format: ResultFormat;
    chart?: ChartConfig;
    relatedTools?: string[];
  };
}

interface FormField {
  name: string;
  label: string;
  type: 'number' | 'select' | 'text' | 'date' | 'boolean';
  unit?: string;
  placeholder?: string;
  required: boolean;
  min?: number;
  max?: number;
  step?: number;
  options?: Array<{ value: string; label: string }>;
  defaultValue?: any;
}
```

#### 5. 内容层

```typescript
interface ContentConfig {
  // 内容节点数组（支持MD和组件交替）
  nodes: ContentNode[];
}

type ContentNode =
  | MarkdownNode
  | ComponentNode
  | DataNode;

interface MarkdownNode {
  type: 'markdown';
  content: string;              // Markdown字符串
}

interface ComponentNode {
  type: 'component';
  component: React.ComponentType;
  props?: Record<string, any>;
}

interface DataNode {
  type: 'data';
  data: any;
}
```

#### 6. 国际化层

```typescript
interface I18nConfig {
  // 支持的地区
  regions: string[];             // ['en', 'zh']

  // 每个地区的配置
  variants: {
    [region: string]: RegionVariant;
  };
}

interface RegionVariant {
  // 翻译
  translations: {
    name: string;
    description: string;
    ui: Record<string, string>;
    content: Record<string, string>;
  };

  // 计算逻辑差异
  calculation?: {
    formula: string;
    parameters?: ParameterOverride[];
    defaults?: Record<string, any>;
  };

  // 单位系统
  units: {
    system: 'metric' | 'imperial' | 'mixed';
    overrides?: Record<string, Unit>;
  };

  // 地区特定内容
  content: {
    formula: string;
    examples: Example[];
    faq: FAQ[];
    tips: string;
  };

  // 法规/标准差异
  regulations?: {
    standards: string[];
    disclaimer: string;
  };
}
```

#### 7. 计算逻辑层

```typescript
interface CalculationLogic {
  // 参数验证
  validate: (inputs: Record<string, any>) => ValidationResult;

  // 核心计算函数
  calculate: (inputs: Record<string, any>) => CalculationResult;

  // 结果格式化
  format: (result: CalculationResult) => FormattedResult;
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

interface CalculationResult {
  [key: string]: any;
}

interface FormattedResult {
  title: string;
  value: string | number;
  unit?: string;
  category?: string;
  color?: string;
  summary: string;
}
```

---

## 技术栈

### Monorepo架构

项目采用**前后端分离**的多仓架构：

```
orange-calculator/
├── apps/
│   ├── web/                    # Next.js前端项目
│   └── api/                    # 后端API项目
├── packages/
│   ├── shared/                 # 共享类型和工具
│   ├── calculators/            # 计算器协议和实现
│   └── ui/                     # 共享UI组件
└── package.json
```

### 前端（apps/web）

- **框架**: Next.js 14 (App Router)
- **UI库**: React 18
- **样式**: Tailwind CSS
- **组件**: shadcn/ui
- **状态管理**: React Context API
- **表单**: React Hook Form + Zod
- **Markdown**: react-markdown
- **图表**: Recharts
- **响应式**: Tailwind响应式工具类
- **部署**: Vercel

### 后端（apps/api）

- **框架**: NestJS (Node.js)
- **语言**: TypeScript
- **API**: RESTful API
- **AI服务**:
  - 规则引擎: 自定义
  - 小模型: GPT-4o-mini ($0.15/1M tokens)
  - 大模型: Claude 3.5 Sonnet (付费功能)
- **数据库**: PostgreSQL
- **缓存**: Redis
- **认证**: JWT + Passport
- **部署**: Railway / Render / AWS

### 部署

**前端部署（apps/web）**
- **平台**: Vercel
- **域名**: orange.com
- **CDN**: Vercel Edge Network
- **环境变量**: API_URL, NEXT_PUBLIC_SITE_URL

**后端部署（apps/api）**
- **平台**: Railway / Render / AWS
- **域名**: api.orange.com
- **数据库**: PostgreSQL (托管)
- **缓存**: Redis (托管)
- **环境变量**: DATABASE_URL, REDIS_URL, OPENAI_API_KEY

**CI/CD**
- GitHub Actions自动部署
- 推送到main分支自动触发
- 前后端独立部署流程

### 开发工具

- **语言**: TypeScript
- **包管理**: pnpm
- **代码质量**: ESLint + Prettier
- **测试**: Jest + React Testing Library
- **版本控制**: Git + GitHub

---

## 数据结构

### Monorepo目录结构

```
orange-calculator/                      # Monorepo根目录
├── apps/
│   ├── web/                            # Next.js前端
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── calculators/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [calculator]/
│   │   │   │       └── page.tsx
│   │   │   ├── [locale]/
│   │   │   │   └── calculators/
│   │   │   │       └── [calculator]/
│   │   │   │           └── page.tsx
│   │   │   └── chat/
│   │   │       └── page.tsx
│   │   ├── components/
│   │   │   ├── ContentRenderer.tsx
│   │   │   ├── CalculatorCard.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── AIAssistant.tsx
│   │   ├── contexts/
│   │   │   └── CalculatorContext.tsx
│   │   ├── lib/
│   │   │   └── api-client.ts          # API客户端
│   │   ├── public/
│   │   ├── next.config.js
│   │   ├── tailwind.config.ts
│   │   └── package.json
│   │
│   └── api/                            # NestJS后端
│       ├── src/
│       │   ├── modules/
│       │   │   ├── ai/
│       │   │   │   ├── ai.service.ts
│       │   │   │   ├── ai.controller.ts
│       │   │   │   ├── rule-engine.service.ts
│       │   │   │   └── llm-client.service.ts
│       │   │   ├── calculators/
│       │   │   │   ├── calculators.service.ts
│       │   │   │   ├── calculators.controller.ts
│       │   │   │   └── dto/
│       │   │   ├── users/
│       │   │   │   ├── users.service.ts
│       │   │   │   ├── users.controller.ts
│       │   │   │   └── dto/
│       │   │   └── subscriptions/
│       │   │       ├── subscriptions.service.ts
│       │   │       └── subscriptions.controller.ts
│       │   ├── common/
│       │   │   ├── guards/
│       │   │   ├── interceptors/
│       │   │   └── filters/
│       │   ├── database/
│       │   │   ├── migrations/
│       │   │   └── seeds/
│       │   └── main.ts
│       ├── test/
│       ├── .env.example
│       ├── nest-cli.json
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   ├── shared/                        # 共享类型和工具
│   │   ├── src/
│   │   │   ├── types/
│   │   │   │   ├── calculator.types.ts
│   │   │   │   ├── user.types.ts
│   │   │   │   └── api.types.ts
│   │   │   ├── utils/
│   │   │   │   └── helpers.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── calculators/                   # 计算器协议和实现
│   │   ├── src/
│   │   │   ├── bmi-calculator/
│   │   │   │   ├── protocol.ts
│   │   │   │   ├── calculation.ts
│   │   │   │   ├── content/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── BMICalculatorForm.tsx
│   │   │   │   │   ├── BMIChart.tsx
│   │   │   │   │   ├── BMIGauge.tsx
│   │   │   │   │   └── BMIInterpretation.tsx
│   │   │   │   └── variants/
│   │   │   │       ├── en.json
│   │   │   │       └── zh.json
│   │   │   ├── mortgage-calculator/
│   │   │   │   └── ...
│   │   │   └── index.ts               # 计算器注册表
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ui/                             # 共享UI组件
│       ├── src/
│       │   ├── components/
│       │   │   ├── Button/
│       │   │   ├── Input/
│       │   │   ├── Card/
│       │   │   ├── Modal/
│       │   │   └── Form/
│       │   ├── styles/
│       │   │   └── globals.css
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── locales/                            # 国际化内容
│   ├── en/
│   │   ├── common.json
│   │   └── calculators/
│   │       └── bmi-calculator/
│   │           ├── seo.json
│   │           ├── ui.json
│   │           └── content/
│   │               ├── introduction.md
│   │               ├── formula.md
│   │               └── faq.md
│   └── zh/
│       └── ...
│
├── docs/                               # 文档
│   └── superpowers/specs/
│       └── 2026-04-13-ai-calculator-design.md
│
├── package.json                        # Monorepo根配置
├── pnpm-workspace.yaml
├── turbo.json                          # Turborepo配置
├── .gitignore
└── README.md
```

### Monorepo工具链

- **包管理器**: pnpm workspaces
- **构建工具**: Turborepo
- **语言**: TypeScript
- **代码质量**: ESLint + Prettier
- **测试**: Jest (单元测试) + Playwright (E2E测试)
- **版本控制**: Git + GitHub

### 通信流程

```
前端（Next.js）
    ↓ HTTP/REST API
后端（NestJS）
    ↓
共享包（@org/calculators）
    ↓
计算器协议和逻辑
```

前端通过REST API调用后端，两者都依赖共享的`packages`：
- `@org/shared` - 类型定义
- `@org/calculators` - 计算器协议
- `@org/ui` - UI组件库

### 计算器注册表

```typescript
// calculators/index.ts

import { BMICalculator } from './bmi-calculator/protocol';
import { MortgageCalculator } from './mortgage-calculator/protocol';
// ... 其他计算器

export const CALCULATOR_REGISTRY: Record<string, CalculatorProtocol> = {
  'bmi-calculator': BMICalculator,
  'mortgage-calculator': MortgageCalculator,
  // ...
};

export function getCalculator(id: string): CalculatorProtocol | undefined {
  return CALCULATOR_REGISTRY[id];
}

export function getCalculatorsByCategory(category: CalculatorCategory): CalculatorProtocol[] {
  return Object.values(CALCULATOR_REGISTRY).filter(
    calc => calc.metadata.category === category
  );
}

export function searchCalculators(query: string): CalculatorProtocol[] {
  const q = query.toLowerCase();
  return Object.values(CALCULATOR_REGISTRY).filter(calc =>
    calc.metadata.name.toLowerCase().includes(q) ||
    calc.metadata.tags.some(tag => tag.toLowerCase().includes(q))
  );
}
```

---

## 状态管理

### CalculatorContext

```typescript
// contexts/CalculatorContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CalculatorContextValue<T = any> {
  // 输入数据
  inputs: Record<string, any>;

  // 计算结果
  result: T | null;

  // 状态
  loading: boolean;
  error: string | null;

  // 方法
  setInputs: (inputs: Record<string, any>) => void;
  calculate: () => void;
  reset: () => void;
}

const CalculatorContext = createContext<CalculatorContextValue | null>(null);

export function CalculatorProvider({
  children,
  calculator
}: {
  children: ReactNode;
  calculator: CalculatorProtocol;
}) {
  const [inputs, setInputs] = useState<Record<string, any>>({});
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculate = async () => {
    setLoading(true);
    setError(null);

    try {
      // 验证输入
      const validation = calculator.calculation.validate(inputs);
      if (!validation.valid) {
        setError(validation.errors.join(', '));
        return;
      }

      // 执行计算
      const result = calculator.calculation.calculate(inputs);
      setResult(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setInputs({});
    setResult(null);
    setError(null);
  };

  return (
    <CalculatorContext.Provider
      value={{ inputs, result, loading, error, setInputs, calculate, reset }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator<T = any>() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within CalculatorProvider');
  }
  return context as CalculatorContextValue<T>;
}
```

### 状态流程

```
用户输入
    ↓
setInputs() 更新 Context
    ↓
所有订阅的组件自动更新
    ↓
用户点击 Calculate
    ↓
calculate() 执行计算
    ↓
setResult() 更新 Context
    ↓
所有组件更新（图表、仪表盘、建议）
```

---

## 响应式设计

### 设计原则

**PC优先（Desktop First）**
- 从PC端（1024px+）开始设计
- 向下兼容到移动端（< 768px）
- 确保核心功能在所有设备可用

**断点系统**

```typescript
// tailwind.config.ts
export default {
  theme: {
    screens: {
      // 默认（PC端）: ≥ 768px
      'max-md': { max: '767px' },  // 移动端（max-width查询）
    },
  },
};
```

**使用原则**
- 默认样式：PC端
- `max-md:` 前缀：移动端样式
- 示例：`className="text-base max-md:text-sm"`（PC端正常字，移动端小字）

### 响应式布局策略

#### 1. 计算器页面布局

**移动端（< 768px）**
```
┌─────────────────┐
│  Header (汉堡菜单)│
├─────────────────┤
│  标题 + 描述     │
├─────────────────┤
│  表单（竖向）    │
│  ┌───────────┐  │
│  │  字段1    │  │
│  └───────────┘  │
│  ┌───────────┐  │
│  │  字段2    │  │
│  └───────────┘  │
│  [计算按钮]     │
├─────────────────┤
│  结果区域       │
│  (小尺寸图表)    │
├─────────────────┤
│  内容章节       │
│  (可折叠)       │
└─────────────────┘
```

**PC端（≥ 768px）**
```
┌─────────────────────────────────────────┐
│  Header (导航菜单)                       │
├─────────────────────────────────────────┤
│  标题 + 描述                             │
├─────────────────────────────────────────┤
│  表单（竖向）                            │
│  ┌─────────┐ ┌─────────┐               │
│  │ 字段1   │ │ 字段2   │  (多列横向)     │
│  └─────────┘ └─────────┘               │
│  [计算按钮]                             │
├─────────────────────────────────────────┤
│  结果区域                                │
│  (大尺寸图表)                            │
├─────────────────────────────────────────┤
│  内容章节                                │
│  • 公式说明                              │
│  • 使用指南                              │
│  • FAQ                                  │
└─────────────────────────────────────────┘
```

**布局特点**
- ✅ 全竖向布局，无左右分栏
- ✅ PC端表单字段可以横向排列（2-3列）
- ✅ 移动端表单字段全部竖向
- ✅ 内容区域全部竖向排列

#### 2. 代码实现

```tsx
// apps/web/app/calculators/[calculator]/page.tsx

export default function CalculatorPage({ params }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - 响应式 */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold">BMI Calculator</h1>
            <nav className="hidden md:flex space-x-6">
              {/* 桌面端导航 */}
            </nav>
            <button className="md:hidden">
              {/* 移动端汉堡菜单 */}
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content - 全竖向布局 */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 计算器表单 */}
        <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-8">
          <CalculatorForm />
        </div>

        {/* 结果卡片 */}
        {result && (
          <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-8">
            <CalculatorResult result={result} />
          </div>
        )}

        {/* 内容章节 */}
        <div className="space-y-8">
          {/* PC端：直接显示（默认） */}
          <div className="max-md:hidden">
            <ContentRenderer nodes={contentNodes} />
          </div>

          {/* 移动端：可折叠 */}
          <div className="hidden max-md:block">
            <Collapsible sections={contentSections} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Orange Calculator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
```

#### 3. 响应式表单组件

```tsx
// packages/ui/src/components/Form/index.tsx

export function ResponsiveForm({ fields, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* PC端：字段横向排列（2列），移动端：竖向 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label
              className={cn(
                "block text-base font-medium",
                "max-md:text-sm"  // 移动端字体稍小
              )}
            >
              {field.label}
            </label>

            {field.type === 'select' ? (
              <select
                className={cn(
                  "w-full px-3 py-2 border rounded-lg",
                  "focus:ring-2 focus:ring-blue-500",
                  "text-base max-md:text-sm"
                )}
              >
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                className={cn(
                  "w-full px-3 py-2 border rounded-lg",
                  "focus:ring-2 focus:ring-blue-500",
                  "text-base max-md:text-sm"
                )}
                placeholder={field.placeholder}
              />
            )}

            {field.unit && (
              <span className="text-sm max-md:text-xs text-gray-500">
                {field.unit}
              </span>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className={cn(
          "w-full py-3 px-8 rounded-lg font-medium",
          "bg-blue-600 text-white",
          "hover:bg-blue-700",
          "transition-colors",
          "text-base max-md:text-sm"  // 全宽按钮
        )}
      >
        Calculate
      </button>
    </form>
  );
}
```

#### 4. 响应式图表组件

```tsx
// packages/calculators/src/bmi-calculator/components/BMIChart.tsx

import { GaugeChart } from '@/ui/components/GaugeChart';

export function BMIChart({ value }) {
  return (
    <div className="w-full">
      {/* PC端：大尺寸（默认） */}
      <div className="max-md:hidden">
        <GaugeChart
          value={value}
          size="large"        // 500px
          showLabels={true}   // 显示标签
        />
      </div>

      {/* 移动端：小尺寸 */}
      <div className="hidden max-md:block">
        <GaugeChart
          value={value}
          size="small"        // 300px
          showLabels={false}  // 省略标签
        />
      </div>
    </div>
  );
}
```

#### 5. 响应式内容渲染

```tsx
// packages/ui/src/components/ContentRenderer/index.tsx

export function ContentRenderer({ nodes }) {
  return (
    <article className="prose prose-lg max-w-none max-md:prose-base">
      {nodes.map((node, index) => {
        if (node.type === 'markdown') {
          return (
            <div
              key={index}
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(node.content) }}
            />
          );
        }

        if (node.type === 'component') {
          const Component = node.component;
          return (
            <div key={index} className="my-8 max-md:my-6">
              <Component {...(node.props || {})} />
            </div>
          );
        }

        return null;
      })}
    </article>
  );
}
```

### 触摸优化

**移动端交互优化**

```tsx
// 增大触摸目标（最小44x44px）
<button className="min-h-[44px] min-w-[44px] px-4 py-2">
  Calculate
</button>

// 防止误触
<button className="touch-manipulation">
  Click Me
</button>

// 响应式间距
<div className="space-y-4 max-md:space-y-2">
  {/* PC端间距大，移动端间距小 */}
</div>
```

### 性能优化

**图片优化**
```tsx
import Image from 'next/image';

<Image
  src="/bmi-chart.png"
  alt="BMI Chart"
  width={800}
  height={600}
  className="w-full h-auto"
  priority={false}  // 懒加载
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**代码分割**
```tsx
import dynamic from 'next/dynamic';

// 动态导入重型组件
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <p>Loading...</p>,
  ssr: false,  // 客户端渲染
});
```

### 测试策略

**跨设备测试**
- 真机测试：iPhone SE, iPhone 14 Pro, iPad Pro
- 浏览器测试：Chrome DevSim, Responsive Design Mode
- 自动化测试：Playwright E2E测试多设备

```typescript
// tests/e2e/calculator.spec.ts

test('BMI calculator on mobile', async ({ page }) => {
  // 模拟移动设备
  await page.setViewportSize({ width: 375, height: 667 });

  await page.goto('/calculators/bmi-calculator');
  await page.fill('input[name="height"]', '175');
  await page.fill('input[name="weight"]', '70');
  await page.click('button[type="submit"]');

  // 验证响应式布局（移动端 - 竖向布局）
  const form = page.locator('form');
  await expect(form).toBeVisible();

  // 验证字段是竖向排列
  const field1 = page.locator('input[name="height"]');
  const field2 = page.locator('input[name="weight"]');
  const field1Box = await field1.boundingBox();
  const field2Box = await field2.boundingBox();
  expect(field2Box.y).toBeGreaterThan(field1Box.y); // field2在field1下方
});

test('BMI calculator on PC', async ({ page }) => {
  // 模拟PC设备
  await page.setViewportSize({ width: 1280, height: 720 });

  await page.goto('/calculators/bmi-calculator');

  // 验证PC端布局（竖向布局）
  const container = page.locator('main');
  await expect(container).toHaveClass(/max-w-4xl/); // 居中容器

  // 验证字段是横向排列（2列）
  const grid = page.locator('.grid');
  await expect(grid).toHaveClass(/md:grid-cols-2/);
});
```

---

## 国际化设计

### 路由结构

```
orange.com/                          → 英语版（默认）
orange.com/calculators/bmi-calculator → 英语版
orange.com/zh/calculators/bmi-calculator → 中文版
```

### Next.js配置

```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};
```

### SEO元数据

```typescript
// app/[locale]/calculators/[calculator]/page.tsx

export async function generateMetadata({ params }) {
  const { locale, calculator } = params;

  const calc = await getCalculator(calculator);
  const t = await getTranslations({ locale, namespace: `calculators.${calculator}` });

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    keywords: t('seo.keywords'),
    alternates: {
      canonical: `https://orange.com${locale === 'en' ? '' : '/zh'}/calculators/${calculator}`,
      languages: {
        'en': `https://orange.com/calculators/${calculator}`,
        'zh': `https://orange.com/zh/calculators/${calculator}`,
        'x-default': `https://orange.com/calculators/${calculator}`,
      },
    },
    openGraph: {
      locale: locale === 'en' ? 'en_US' : 'zh_CN',
    },
  };
}
```

### 内容加载

```typescript
// 根据locale加载对应内容
async function loadCalculator(id: string, locale: string) {
  const protocol = await import(`@/calculators/${id}/protocol.ts`);

  // 加载对应语言的内容
  const content = await import(`@/locales/${locale}/calculators/${id}/content/index.ts`);

  // 加载对应语言的计算逻辑（如果有差异）
  const calculation = protocol.calculation;

  return {
    ...protocol,
    content: content.default,
    calculation,
  };
}
```

---

## SEO策略

### 页面结构

每个计算器页面包含：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>BMI Calculator - Free Online Body Mass Index</title>
  <meta name="description" content="Calculate your BMI instantly...">
  <meta name="keywords" content="BMI, body mass index, weight, health">

  <!-- Hreflang标签 -->
  <link rel="alternate" hreflang="en" href="https://orange.com/calculators/bmi-calculator">
  <link rel="alternate" hreflang="zh" href="https://orange.com/zh/calculators/bmi-calculator">
  <link rel="alternate" hreflang="x-default" href="https://orange.com/calculators/bmi-calculator">

  <!-- Open Graph -->
  <meta property="og:title" content="BMI Calculator">
  <meta property="og:description" content="Calculate your BMI instantly...">
  <meta property="og:image" content="https://orange.com/images/bmi-og.png">
  <meta property="og:locale" content="en_US">

  <!-- 结构化数据 -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BMI Calculator",
    "description": "Calculate your Body Mass Index",
    "url": "https://orange.com/calculators/bmi-calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web"
  }
  </script>
</head>
<body>
  <h1>BMI Calculator</h1>

  <!-- 内容章节 -->
  <article>
    <h2>What is BMI?</h2>
    <p>BMI (Body Mass Index) is...</p>

    <h2>BMI Formula</h2>
    <p>BMI = weight / height²</p>

    <h2>How to Calculate BMI</h2>
    <!-- 计算器表单 -->

    <h2>BMI Results Interpretation</h2>
    <table>...</table>

    <h2>Frequently Asked Questions</h2>
    <section itemscope itemtype="https://schema.org/FAQPage">
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">What is a normal BMI?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <span itemprop="text">A normal BMI ranges from 18.5 to 24.9</span>
        </div>
      </div>
    </section>
  </article>

  <!-- 相关工具（内链） -->
  <section>
    <h2>Related Calculators</h2>
    <a href="/calculators/calorie-calculator">Calorie Calculator</a>
    <a href="/calculators/body-fat-calculator">Body Fat Calculator</a>
  </section>
</body>
</html>
```

### SEO优化要点

1. **URL结构**
   - 简洁、包含关键词
   - 例如：/calculators/bmi-calculator

2. **标题和描述**
   - 每个页面唯一
   - 包含目标关键词
   - 吸引点击

3. **内容质量**
   - 详细的使用说明
   - 公式解释
   - 示例和FAQ
   - 相关工具推荐

4. **结构化数据**
   - WebApplication
   - FAQPage
   - HowTo

5. **内链网络**
   - 相关工具互相链接
   - 面包屑导航

6. **性能优化**
   - 页面加载速度 < 2秒
   - 移动端友好
   - 图片优化

---

## 实施路线图

### 第一阶段：基础框架（2周）

**Week 1**
- [x] 项目初始化
- [ ] 设计计算器协议
- [ ] 实现CalculatorContext
- [ ] 实现ContentRenderer
- [ ] 实现计算器注册表

**Week 2**
- [ ] 实现规则引擎
- [ ] 集成LLM（GPT-4o-mini）
- [ ] 实现AI提取API
- [ ] 实现AI推荐API
- [ ] 设置国际化框架

### 第二阶段：MVP计算器（3周）

**Week 3-4**
- [ ] BMI计算器（完整实现）
  - [ ] 协议定义
  - [ ] 计算逻辑
  - [ ] 内容节点（MD+组件）
  - [ ] React组件（表单、图表、仪表盘）
  - [ ] 国际化（en/zh）

**Week 5**
- [ ] 其他7个计算器（简化版）
  - [ ] Mortgage Calculator
  - [ ] Percentage Calculator
  - [ ] Loan Calculator
  - [ ] Age Calculator
  - [ ] Calorie Calculator
  - [ ] Investment Calculator
  - [ ] GPA Calculator

### 第三阶段：AI功能（2周）

**Week 6**
- [ ] AI对话界面
- [ ] 意图识别优化
- [ ] 参数提取优化
- [ ] 错误处理

**Week 7**
- [ ] AI推荐卡片
- [ ] 自动填充功能
- [ ] 缓存优化
- [ ] 成本控制

### 第四阶段：SEO和优化（2周）

**Week 8**
- [ ] SEO元数据优化
- [ ] 结构化数据
- [ ] Hreflang标签
- [ ] 性能优化

**Week 9**
- [ ] 移动端优化
- [ ] 可访问性
- [ ] 测试和修复
- [ ] 文档完善

### 第五阶段：付费功能（2周）

**Week 10-11**
- [ ] 用户认证
- [ ] 订阅管理
- [ ] 付费AI功能
- [ ] 长期跟踪

### 第六阶段：部署和监控（1周）

**Week 12**
- [ ] 生产环境部署
- [ ] 监控设置
- [ ] 分析设置
- [ ] 用户反馈收集

---

## 成本估算

### 开发成本

- **开发时间**: 12周
- **开发人员**: 1-2人
- **总成本**: $20,000-$40,000

### 运营成本（月度）

| 项目 | 成本 | 说明 |
|------|------|------|
| 前端托管（Vercel Pro） | $20 | Next.js前端 |
| 后端托管（Railway） | $20 | NestJS后端 |
| 数据库（PostgreSQL） | $25 | 托管数据库 |
| 缓存（Redis） | $10 | 托管Redis |
| LLM API（免费层） | $60 | 1000次/天 × $0.001 |
| LLM API（付费层） | $30 | 100次/天 × $0.01 |
| 域名和CDN | $15 | 域名+带宽 |
| 监控和日志 | $10 | Sentry等 |
| **总计** | **$190/月** | |

### 收入预测

保守估计：
- 月活用户：10,000
- 付费转化率：2%
- 付费用户：200
- 月收入：200 × $9.99 = **$1,998/月**

乐观估计：
- 月活用户：50,000
- 付费转化率：3%
- 付费用户：1,500
- 月收入：1,500 × $9.99 = **$14,985/月**

---

## 风险和挑战

### 技术风险

1. **LLM准确性**
   - 风险：AI可能识别错误意图或参数
   - 缓解：规则引擎优先，用户可修正

2. **成本控制**
   - 风险：免费用户LLM调用成本过高
   - 缓解：70%规则处理，缓存常见问题

3. **性能**
   - 风险：LLM调用延迟影响体验
   - 缓解：异步处理，加载动画

### 商业风险

1. **竞争**
   - 风险：ChatGPT等通用AI的竞争
   - 缓解：专注计算器垂直领域，深度优化

2. **付费转化**
   - 风险：用户不愿付费
   - 缓解：提供独特价值，免费功能足够

3. **SEO竞争**
   - 风险：现有计算器网站排名高
   - 缓解：AI差异化，高质量内容

---

## 下一步

1. **评审设计文档**
   - 技术团队评审
   - 产品团队评审
   - 确认技术栈和架构

2. **创建实施计划**
   - 使用writing-plans技能
   - 详细的任务分解
   - 时间和资源估算

3. **开始开发**
   - 搭建项目框架
   - 实现第一个计算器
   - 快速迭代

---

**文档状态**: ✅ 已完成
**下一步**: 等待评审，确认后进入实施计划阶段
