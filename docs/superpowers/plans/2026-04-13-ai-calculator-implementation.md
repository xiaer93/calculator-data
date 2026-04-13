# AI增强万能计算器 - 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一个AI增强的万能计算器平台，包含254个计算器工具，通过AI降低使用门槛并提供个性化建议

**Architecture:** Monorepo架构，前后端分离。前端使用Next.js 14 + Tailwind CSS，后端使用NestJS。采用PC优先的响应式设计，支持中美双版本国际化。

**Tech Stack:** Next.js 14, NestJS, TypeScript, Tailwind CSS, PostgreSQL, Redis, GPT-4o-mini

---

## 文件结构

此计划将创建以下文件结构：

```
orange-calculator/
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
│   │   │   └── api/
│   │   │       └── ai/
│   │   │           ├── extract/route.ts
│   │   │           └── recommend/route.ts
│   │   ├── components/
│   │   │   ├── ContentRenderer.tsx
│   │   │   ├── CalculatorCard.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── AIAssistant.tsx
│   │   ├── contexts/
│   │   │   └── CalculatorContext.tsx
│   │   ├── lib/
│   │   │   └── api-client.ts
│   │   ├── public/
│   │   ├── tailwind.config.ts
│   │   ├── next.config.js
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── api/                            # NestJS后端
│       ├── src/
│       │   ├── modules/
│       │   │   ├── ai/
│       │   │   │   ├── ai.service.ts
│       │   │   │   ├── ai.controller.ts
│       │   │   │   ├── rule-engine.service.ts
│       │   │   │   ├── llm-client.service.ts
│       │   │   │   └── dto/
│       │   │   │       ├── extract.dto.ts
│       │   │   │       └── recommend.dto.ts
│       │   │   ├── calculators/
│       │   │   │   ├── calculators.service.ts
│       │   │   │   ├── calculators.controller.ts
│       │   │   │   └── dto/
│       │   │   │       └── calculator.dto.ts
│       │   │   └── health/
│       │   │       └── health.controller.ts
│       │   ├── common/
│       │   │   ├── filters/
│       │   │   │   └── http-exception.filter.ts
│       │   │   └── interceptors/
│       │   │       └── logging.interceptor.ts
│       │   ├── main.ts
│       │   └── app.module.ts
│       ├── test/
│       │   └── ai/
│       │       └── ai.service.spec.ts
│       ├── .env.example
│       ├── nest-cli.json
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── shared/                        # 共享类型
│   │   ├── src/
│   │   │   ├── types/
│   │   │   │   ├── calculator.types.ts
│   │   │   │   ├── user.types.ts
│   │   │   │   └── api.types.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── calculators/                   # 计算器协议
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
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ui/                             # 共享UI组件
│       ├── src/
│       │   ├── components/
│       │   │   ├── Button/
│       │   │   │   ├── Button.tsx
│       │   │   │   └── index.ts
│       │   │   ├── Input/
│       │   │   │   ├── Input.tsx
│       │   │   │   └── index.ts
│       │   │   ├── Card/
│       │   │   │   ├── Card.tsx
│       │   │   │   └── index.ts
│       │   │   └── Form/
│       │   │       ├── Form.tsx
│       │   │       └── index.ts
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
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-04-13-ai-calculator-design.md
│
├── package.json                        # Monorepo根配置
├── pnpm-workspace.yaml
├── turbo.json
├── .gitignore
└── README.md
```

---

## 第一阶段：基础框架搭建（Week 1-2）

### Task 1: 初始化Monorepo项目结构

**Files:**
- Create: `package.json`
- Create: `pnpm-workspace.yaml`
- Create: `turbo.json`
- Create: `.gitignore`

- [ ] **Step 1: 创建根package.json**

```bash
cat > package.json << 'EOF'
{
  "name": "orange-calculator",
  "version": "1.0.0",
  "private": true,
  "description": "AI-enhanced universal calculator platform",
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\""
  },
  "devDependencies": {
    "prettier": "^3.1.1",
    "turbo": "^1.11.0",
    "typescript": "^5.3.3"
  },
  "packageManager": "pnpm@8.11.0"
}
EOF
```

- [ ] **Step 2: 创建pnpm workspace配置**

```bash
cat > pnpm-workspace.yaml << 'EOF'
packages:
  - 'apps/*'
  - 'packages/*'
EOF
```

- [ ] **Step 3: 创建Turborepo配置**

```bash
cat > turbo.json << 'EOF'
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "outputs": []
    }
  }
}
EOF
```

- [ ] **Step 4: 创建.gitignore**

```bash
cat > .gitignore << 'EOF'
# Dependencies
node_modules
.pnp
.pnp.js

# Testing
coverage
*.lcov

# Next.js
.next/
out/
build
dist

# Production
*.log
*.tsbuildinfo

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env
.env*.local
.env.production

# Vercel
.vercel

# Turbo
.turbo

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
EOF
```

- [ ] **Step 5: 提交初始化配置**

```bash
git add package.json pnpm-workspace.yaml turbo.json .gitignore
git commit -m "chore: initialize monorepo with pnpm and turbo"
```

---

### Task 2: 创建共享类型包（packages/shared）

**Files:**
- Create: `packages/shared/package.json`
- Create: `packages/shared/tsconfig.json`
- Create: `packages/shared/src/types/calculator.types.ts`
- Create: `packages/shared/src/types/user.types.ts`
- Create: `packages/shared/src/types/api.types.ts`
- Create: `packages/shared/src/index.ts`

- [ ] **Step 1: 创建packages/shared/package.json**

```bash
mkdir -p packages/shared/src/types
cat > packages/shared/package.json << 'EOF'
{
  "name": "@orange-calculator/shared",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src --ext .ts"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}
EOF
```

- [ ] **Step 2: 创建packages/shared/tsconfig.json**

```bash
cat > packages/shared/tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF
```

- [ ] **Step 3: 创建计算器类型定义**

```bash
cat > packages/shared/src/types/calculator.types.ts << 'EOF'
// 计算器分类
export type CalculatorCategory = 'financial' | 'health_fitness' | 'math' | 'other';

// 表单字段类型
export type FieldType = 'number' | 'select' | 'text' | 'date' | 'boolean';

// 表单字段配置
export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  unit?: string;
  placeholder?: string;
  required: boolean;
  min?: number;
  max?: number;
  step?: number;
  options?: Array<{ value: string; label: string }>;
  defaultValue?: any;
}

// 验证结果
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

// 计算结果
export interface CalculationResult {
  [key: string]: any;
}

// 格式化结果
export interface FormattedResult {
  title: string;
  value: string | number;
  unit?: string;
  category?: string;
  color?: string;
  summary: string;
}

// 计算逻辑
export interface CalculationLogic {
  validate: (inputs: Record<string, any>) => ValidationResult;
  calculate: (inputs: Record<string, any>) => CalculationResult;
  format: (result: CalculationResult) => FormattedResult;
}

// 内容节点类型
export type ContentNode = MarkdownNode | ComponentNode | DataNode;

export interface MarkdownNode {
  type: 'markdown';
  content: string;
}

export interface ComponentNode {
  type: 'component';
  component: any; // React.ComponentType
  props?: Record<string, any>;
}

export interface DataNode {
  type: 'data';
  data: any;
}

// UI配置
export interface UIConfig {
  form: {
    fields: FormField[];
    submitButton: {
      text: string;
      style: 'primary' | 'secondary' | 'outline';
    };
  };
  card: {
    compact: CardView;
    detailed: CardView;
  };
  result: {
    format: string;
    chart?: any;
    relatedTools?: string[];
  };
}

export interface CardView {
  title: string;
  description: string;
  icon: string;
  action?: string;
  color?: string;
  size?: string;
}

// SEO配置
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  ogImage?: string;
  canonical?: string;
}

// LLM配置
export interface LLMConfig {
  toolDefinition: {
    name: string;
    description: string;
    parameters: any; // JSONSchema
  };
  systemPrompt: string;
  extractionPrompt: string;
  interpretationPrompt?: string;
}

// 国际化配置
export interface I18nConfig {
  regions: string[];
  variants: {
    [region: string]: RegionVariant;
  };
}

export interface RegionVariant {
  translations: {
    name: string;
    description: string;
    ui: Record<string, string>;
    content: Record<string, string>;
  };
  calculation?: {
    formula: string;
    parameters?: any[];
    defaults?: Record<string, any>;
  };
  units: {
    system: 'metric' | 'imperial' | 'mixed';
    overrides?: Record<string, any>;
  };
  content: {
    formula: string;
    examples: any[];
    faq: any[];
    tips: string;
  };
  regulations?: {
    standards: string[];
    disclaimer: string;
  };
}

// 内容配置
export interface ContentConfig {
  nodes: ContentNode[];
}

// 元数据
export interface CalculatorMetadata {
  id: string;
  name: string;
  category: CalculatorCategory;
  tags: string[];
  version: string;
  author?: string;
  createdAt: Date;
  updatedAt: Date;
}

// 计算器协议（主接口）
export interface CalculatorProtocol {
  metadata: CalculatorMetadata;
  seo: SEOConfig;
  llm: LLMConfig;
  ui: UIConfig;
  content: ContentConfig;
  i18n: I18nConfig;
  calculation: CalculationLogic;
}
EOF
```

- [ ] **Step 4: 创建用户类型定义**

```bash
cat > packages/shared/src/types/user.types.ts << 'EOF'
export interface User {
  id: string;
  email: string;
  name?: string;
  subscription: 'free' | 'premium';
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSubscription {
  userId: string;
  plan: 'free' | 'premium';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate?: Date;
}
EOF
```

- [ ] **Step 5: 创建API类型定义**

```bash
cat > packages/shared/src/types/api.types.ts << 'EOF'
// AI提取请求
export interface ExtractRequest {
  input: string;
  locale?: string;
}

// AI提取响应
export interface ExtractResponse {
  calculator: string;
  params: Record<string, any>;
  confidence: number;
}

// AI推荐请求
export interface RecommendRequest {
  query: string;
  locale?: string;
  limit?: number;
}

// AI推荐响应
export interface RecommendResponse {
  calculators: Array<{
    id: string;
    name: string;
    description: string;
    category: string;
    confidence: number;
  }>;
}

// API错误响应
export interface APIError {
  statusCode: number;
  message: string;
  error?: string;
}
EOF
```

- [ ] **Step 6: 创建导出索引**

```bash
cat > packages/shared/src/index.ts << 'EOF'
// 导出所有类型
export * from './types/calculator.types';
export * from './types/user.types';
export * from './types/api.types';
EOF
```

- [ ] **Step 7: 提交共享类型包**

```bash
git add packages/shared/
git commit -m "feat: add shared types package with calculator, user, and API types"
```

---

### Task 3: 创建共享UI组件包（packages/ui）

**Files:**
- Create: `packages/ui/package.json`
- Create: `packages/ui/tsconfig.json`
- Create: `packages/ui/src/components/Button/Button.tsx`
- Create: `packages/ui/src/components/Input/Input.tsx`
- Create: `packages/ui/src/components/Card/Card.tsx`
- Create: `packages/ui/src/styles/globals.css`
- Create: `packages/ui/src/index.ts`

- [ ] **Step 1: 创建packages/ui/package.json**

```bash
mkdir -p packages/ui/src/components/{Button,Input,Card}
mkdir -p packages/ui/src/styles
cat > packages/ui/package.json << 'EOF'
{
  "name": "@orange-calculator/ui",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles.css": "./src/styles/globals.css"
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src --ext .ts,.tsx"
  },
  "dependencies": {
    "react": "^18.2.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.47",
    "typescript": "^5.3.3"
  },
  "peerDependencies": {
    "react": "^18.2.0"
  }
}
EOF
```

- [ ] **Step 2: 创建Button组件**

```bash
cat > packages/ui/src/components/Button/Button.tsx << 'EOF'
import React from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-900 hover:bg-gray-300': variant === 'secondary',
          'border-2 border-blue-600 text-blue-600 hover:bg-blue-50': variant === 'outline',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
EOF
```

- [ ] **Step 3: 创建Input组件**

```bash
cat > packages/ui/src/components/Input/Input.tsx << 'EOF'
import React from 'react';
import { clsx } from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'w-full px-3 py-2 border rounded-lg',
          'focus:outline-none focus:ring-2 focus:ring-blue-500',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'border-red-500 focus:ring-red-500': error,
            'border-gray-300': !error,
          },
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
EOF
```

- [ ] **Step 4: 创建Card组件**

```bash
cat > packages/ui/src/components/Card/Card.tsx << 'EOF'
import React from 'react';
import { clsx } from 'clsx';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ children, className, padding = 'md' }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow',
        {
          'p-0': padding === 'none',
          'p-4': padding === 'sm',
          'p-6': padding === 'md',
          'p-8': padding === 'lg',
        },
        className
      )
    >
      {children}
    </div>
  );
}
EOF
```

- [ ] **Step 5: 创建全局样式**

```bash
cat > packages/ui/src/styles/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-gray-200;
  }
  body {
    @apply bg-gray-50 text-gray-900;
  }
}
EOF
```

- [ ] **Step 6: 创建导出索引**

```bash
cat > packages/ui/src/index.ts << 'EOF'
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

export { Card } from './components/Card/Card';
export type { CardProps } from './components/Card/Card';
EOF
```

- [ ] **Step 7: 提交UI组件包**

```bash
git add packages/ui/
git commit -m "feat: add shared UI components package with Button, Input, and Card"
```

---

### Task 4: 初始化前端项目（apps/web）

**Files:**
- Create: `apps/web/package.json`
- Create: `apps/web/next.config.js`
- Create: `apps/web/tailwind.config.ts`
- Create: `apps/web/tsconfig.json`
- Create: `apps/web/app/layout.tsx`
- Create: `apps/web/app/page.tsx`
- Create: `apps/web/app/globals.css`

- [ ] **Step 1: 创建前端package.json**

```bash
mkdir -p apps/web/app
cat > apps/web/package.json << 'EOF'
{
  "name": "@orange-calculator/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@orange-calculator/shared": "*",
    "@orange-calculator/ui": "*",
    "@orange-calculator/calculators": "*",
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-markdown": "^9.0.1",
    "recharts": "^2.10.3"
  },
  "devDependencies": {
    "@types/node": "^20.10.6",
    "@types/react": "^18.2.47",
    "@types/react-dom": "^18.2.18",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.1.0",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.3"
  }
}
EOF
```

- [ ] **Step 2: 创建Next.js配置**

```bash
cat > apps/web/next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
EOF
```

- [ ] **Step 3: 创建Tailwind配置**

```bash
cat > apps/web/tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      screens: {
        'max-md': { max: '767px' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
EOF
```

- [ ] **Step 4: 创建TypeScript配置**

```bash
cat > apps/web/tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }],
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF
```

- [ ] **Step 5: 创建根布局**

```bash
cat > apps/web/app/layout.tsx << 'EOF'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orange Calculator - AI-Enhanced Universal Calculator',
  description: '254+ calculators with AI assistance. BMI, mortgage, loan, and more.',
  keywords: ['calculator', 'BMI', 'mortgage', 'loan', 'AI'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
EOF
```

- [ ] **Step 6: 创建首页**

```bash
cat > apps/web/app/page.tsx << 'EOF'
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">Orange Calculator</h1>
          <p className="text-gray-600">AI-Enhanced Universal Calculator</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">254+ Free Online Calculators</h2>
          <p className="text-xl text-gray-600">
            Powered by AI for smarter, faster calculations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Financial</h3>
            <p className="text-gray-600 mb-4">Mortgage, loan, investment calculators</p>
            <Link href="/calculators" className="text-blue-600 hover:underline">
              Explore →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Health & Fitness</h3>
            <p className="text-gray-600 mb-4">BMI, calorie, body fat calculators</p>
            <Link href="/calculators" className="text-blue-600 hover:underline">
              Explore →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Math</h3>
            <p className="text-gray-600 mb-4">Percentage, fraction, scientific calculators</p>
            <Link href="/calculators" className="text-blue-600 hover:underline">
              Explore →
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Orange Calculator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
EOF
```

- [ ] **Step 7: 创建全局样式**

```bash
cat > apps/web/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-gray-200;
  }
  body {
    @apply bg-gray-50 text-gray-900;
  }
}
EOF
```

- [ ] **Step 8: 提交前端初始化**

```bash
git add apps/web/
git commit -m "feat: initialize Next.js frontend with Tailwind CSS and basic layout"
```

---

### Task 5: 初始化后端项目（apps/api）

**Files:**
- Create: `apps/api/package.json`
- Create: `apps/api/tsconfig.json`
- Create: `apps/api/nest-cli.json`
- Create: `apps/api/src/main.ts`
- Create: `apps/api/src/app.module.ts`
- Create: `apps/api/.env.example`

- [ ] **Step 1: 创建后端package.json**

```bash
mkdir -p apps/api/src/modules/health
cat > apps/api/package.json << 'EOF'
{
  "name": "@orange-calculator/api",
  "version": "1.0.0",
  "description": "Orange Calculator API",
  "private": true,
  "scripts": {
    "build": "nest build",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage"
  },
  "dependencies": {
    "@nestjs/common": "^10.3.0",
    "@nestjs/core": "^10.3.0",
    "@nestjs/config": "^3.1.1",
    "@nestjs/platform-express": "^10.3.0",
    "@orange-calculator/shared": "*",
    "class-validator": "^0.14.0",
    "class-transformer": "^0.5.1",
    "openai": "^4.20.1",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^7.8.1"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.3.0",
    "@nestjs/schematics": "^10.1.0",
    "@nestjs/testing": "^10.3.0",
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.11",
    "@types/node": "^20.10.6",
    "@typescript-eslint/eslint-plugin": "^6.17.0",
    "@typescript-eslint/parser": "^6.17.0",
    "eslint": "^8.56.0",
    "jest": "^29.7.0",
    "prettier": "^3.1.1",
    "source-map-support": "^0.5.21",
    "ts-jest": "^29.1.1",
    "ts-loader": "^9.5.1",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.3.3"
  },
  "jest": {
    "moduleFileExtensions": ["js", "json", "ts"],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": ["**/*.(t|j)s"],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}
EOF
```

- [ ] **Step 2: 创建NestJS配置**

```bash
cat > apps/api/nest-cli.json << 'EOF'
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "webpack": true
  }
}
EOF
```

- [ ] **Step 3: 创建TypeScript配置**

```bash
cat > apps/api/tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2021",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": false,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "forceConsistentCasingInFileNames": false,
    "noFallthroughCasesInSwitch": false
  }
}
EOF
```

- [ ] **Step 4: 创建主入口文件**

```bash
cat > apps/api/src/main.ts << 'EOF'
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用验证管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // 启用CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);

  console.log(`🚀 API server running on http://localhost:${port}`);
}

bootstrap();
EOF
```

- [ ] **Step 5: 创建应用模块**

```bash
cat > apps/api/src/app.module.ts << 'EOF'
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
EOF
```

- [ ] **Step 6: 创建健康检查模块**

```bash
cat > apps/api/src/modules/health/health.controller.ts << 'EOF'
import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get('health')
  health() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'orange-calculator-api',
    };
  }
}
EOF
```

```bash
cat > apps/api/src/modules/health/health.module.ts << 'EOF'
import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';

@Module({
  controllers: [HealthController],
})
export class HealthModule {}
EOF
```

- [ ] **Step 7: 创建环境变量示例**

```bash
cat > apps/api/.env.example << 'EOF'
# Server
PORT=3001
NODE_ENV=development

# Frontend
FRONTEND_URL=http://localhost:3000

# OpenAI
OPENAI_API_KEY=your_openai_api_key_here

# Database (PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/orange_calculator

# Redis
REDIS_URL=redis://localhost:6379
EOF
```

- [ ] **Step 8: 提交后端初始化**

```bash
git add apps/api/
git commit -m "feat: initialize NestJS backend with health check endpoint"
```

---

### Task 6: 创建基础TypeScript配置

**Files:**
- Create: `tsconfig.base.json`

- [ ] **Step 1: 创建基础TypeScript配置**

```bash
cat > tsconfig.base.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "incremental": true
  }
}
EOF
```

- [ ] **Step 2: 提交TypeScript配置**

```bash
git add tsconfig.base.json
git commit -m "chore: add base TypeScript configuration for monorepo"
```

---

### Task 7: 安装依赖并验证项目结构

**Files:**
- Modify: No files created, just commands

- [ ] **Step 1: 安装所有依赖**

```bash
pnpm install
```

Expected output: Dependencies installed successfully

- [ ] **Step 2: 验证构建**

```bash
pnpm build
```

Expected output: All packages build successfully

- [ ] **Step 3: 启动开发服务器（测试）**

```bash
# 在一个终端启动后端
cd apps/api && pnpm start:dev

# 在另一个终端启动前端
cd apps/web && pnpm dev
```

Expected output:
- API: `🚀 API server running on http://localhost:3001`
- Web: `✓ Ready on http://localhost:3000`

- [ ] **Step 4: 测试健康检查端点**

```bash
curl http://localhost:3001/health
```

Expected output:
```json
{"status":"ok","timestamp":"...","service":"orange-calculator-api"}
```

- [ ] **Step 5: 提交项目结构完成**

```bash
git add .
git commit -m "chore: install dependencies and verify monorepo structure"
```

---

## 第二阶段：MVP计算器 - BMI计算器（Week 3-4）

### Task 8: 创建计算器协议包框架

**Files:**
- Create: `packages/calculators/package.json`
- Create: `packages/calculators/tsconfig.json`
- Create: `packages/calculators/src/index.ts`

- [ ] **Step 1: 创建计算器包package.json**

```bash
mkdir -p packages/calculators/src
cat > packages/calculators/package.json << 'EOF'
{
  "name": "@orange-calculator/calculators",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src --ext .ts,.tsx"
  },
  "dependencies": {
    "@orange-calculator/shared": "*",
    "@orange-calculator/ui": "*",
    "react": "^18.2.0",
    "recharts": "^2.10.3"
  },
  "devDependencies": {
    "@types/react": "^18.2.47",
    "typescript": "^5.3.3"
  }
}
EOF
```

- [ ] **Step 2: 创建TypeScript配置**

```bash
cat > packages/calculators/tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react",
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF
```

- [ ] **Step 3: 创建导出索引**

```bash
cat > packages/calculators/src/index.ts << 'EOF'
export * from './bmi-calculator/protocol';
// 未来添加更多计算器
// export * from './mortgage-calculator/protocol';
EOF
```

- [ ] **Step 4: 提交计算器包框架**

```bash
git add packages/calculators/
git commit -m "feat: add calculators package with basic structure"
```

---

### Task 9: 实现BMI计算器协议

**Files:**
- Create: `packages/calculators/src/bmi-calculator/protocol.ts`
- Create: `packages/calculators/src/bmi-calculator/calculation.ts`
- Create: `packages/calculators/src/bmi-calculator/content/index.ts`

- [ ] **Step 1: 创建BMI计算器协议**

```bash
mkdir -p packages/calculators/src/bmi-calculator/content
cat > packages/calculators/src/bmi-calculator/protocol.ts << 'EOF'
import type { CalculatorProtocol } from '@orange-calculator/shared';
import { calculation } from './calculation';
import { content } from './content';

export const BMICalculator: CalculatorProtocol = {
  metadata: {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    category: 'health_fitness',
    tags: ['health', 'weight', 'fitness', 'bmi'],
    version: '1.0.0',
    createdAt: new Date('2026-04-13'),
    updatedAt: new Date('2026-04-13'),
  },

  seo: {
    title: 'BMI Calculator - Free Online Body Mass Index',
    description: 'Calculate your BMI (Body Mass Index) instantly. Metric units supported with health recommendations.',
    keywords: ['BMI', 'body mass index', 'weight', 'health', 'calculator'],
    slug: '/calculators/bmi-calculator',
  },

  llm: {
    toolDefinition: {
      name: 'calculate_bmi',
      description: 'Calculate Body Mass Index (BMI) from height and weight',
      parameters: {
        type: 'object',
        properties: {
          height: {
            type: 'number',
            description: 'Height in centimeters',
            minimum: 100,
            maximum: 250,
          },
          weight: {
            type: 'number',
            description: 'Weight in kilograms',
            minimum: 20,
            maximum: 300,
          },
        },
        required: ['height', 'weight'],
      },
    },
    systemPrompt: `You are a BMI calculator assistant. Use this tool when users ask about:
- BMI or body mass index
- Weight assessment
- "I'm X cm tall and weigh Y kg"
- Healthy weight range

Example inputs:
- "I'm 175cm tall and weigh 70kg"
- "Calculate my BMI"
- "Is my weight healthy?"`,
    extractionPrompt: `Extract the following parameters from user input:
- height: in centimeters (e.g., 175 for "175cm" or "1.75m")
- weight: in kilograms (e.g., 70 for "70kg")

Return only JSON format.`,
    interpretationPrompt: `Based on BMI result, provide health recommendations:
- BMI < 18.5: Underweight - suggest healthy weight gain
- 18.5-24.9: Normal - maintain healthy lifestyle
- 25-29.9: Overweight - suggest weight loss strategies
- ≥ 30: Obese - recommend consulting a doctor

Be specific and actionable.`,
  },

  ui: {
    form: {
      fields: [
        {
          name: 'height',
          label: 'Height',
          type: 'number',
          unit: 'cm',
          placeholder: '175',
          required: true,
          min: 100,
          max: 250,
        },
        {
          name: 'weight',
          label: 'Weight',
          type: 'number',
          unit: 'kg',
          placeholder: '70',
          required: true,
          min: 20,
          max: 300,
        },
      ],
      submitButton: {
        text: 'Calculate BMI',
        style: 'primary',
      },
    },
    card: {
      compact: {
        title: 'BMI Calculator',
        description: 'Calculate your Body Mass Index',
        icon: '⚖️',
        action: 'Calculate',
        color: 'green',
      },
      detailed: {
        title: 'BMI Calculator',
        description: 'Calculate BMI to assess your weight status',
        icon: '⚖️',
      },
    },
    result: {
      format: 'bmi_standard',
      relatedTools: ['calorie-calculator', 'body-fat-calculator', 'ideal-weight-calculator'],
    },
  },

  content,

  i18n: {
    regions: ['en', 'zh'],
    variants: {
      en: {
        translations: {
          name: 'BMI Calculator',
          description: 'Calculate your Body Mass Index',
        },
        units: {
          system: 'metric',
        },
        content: {
          formula: 'BMI = weight (kg) / height² (m)',
          examples: [],
          faq: [],
          tips: '',
        },
      },
      zh: {
        translations: {
          name: 'BMI计算器',
          description: '计算身体质量指数',
        },
        units: {
          system: 'metric',
        },
        content: {
          formula: 'BMI = 体重÷ 身高²',
          examples: [],
          faq: [],
          tips: '',
        },
      },
    },
  },

  calculation,
};
EOF
```

- [ ] **Step 2: 创建BMI计算逻辑**

```bash
cat > packages/calculators/src/bmi-calculator/calculation.ts << 'EOF'
import type { CalculationLogic, ValidationResult, CalculationResult, FormattedResult } from '@orange-calculator/shared';

export const calculation: CalculationLogic = {
  validate(inputs: Record<string, any>): ValidationResult {
    const errors: string[] = [];
    const { height, weight } = inputs;

    if (!height) {
      errors.push('Height is required');
    } else if (height < 100 || height > 250) {
      errors.push('Height must be between 100 and 250 cm');
    }

    if (!weight) {
      errors.push('Weight is required');
    } else if (weight < 20 || weight > 300) {
      errors.push('Weight must be between 20 and 300 kg');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  },

  calculate(inputs: Record<string, any>): CalculationResult {
    const { height, weight } = inputs;
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let category: string;
    let color: string;

    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'blue';
    } else if (bmi < 25) {
      category = 'Normal weight';
      color = 'green';
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'yellow';
    } else {
      category = 'Obese';
      color = 'red';
    }

    return {
      bmi: parseFloat(bmi.toFixed(1)),
      category,
      color,
      height,
      weight,
    };
  },

  format(result: CalculationResult): FormattedResult {
    return {
      title: 'Your BMI',
      value: result.bmi,
      category: result.category,
      color: result.color,
      summary: `Your BMI is ${result.bmi}, which is in the ${result.category} range`,
    };
  },
};
EOF
```

- [ ] **Step 3: 创建BMI内容节点**

```bash
cat > packages/calculators/src/bmi-calculator/content/index.ts << 'EOF'
import type { ContentConfig } from '@orange-calculator/shared';

export const content: ContentConfig = {
  nodes: [
    {
      type: 'markdown',
      content: `
## What is BMI?

BMI (Body Mass Index) is a simple measure using your height and weight to determine if you're at a healthy weight.

### Why BMI Matters

- Quick health assessment
- Disease risk indicator
- Fitness planning tool
      `,
    },
    {
      type: 'markdown',
      content: `
## BMI Formula

\`\`\`
BMI = weight (kg) / height² (m)
\`\`\`

### Example

For a person who is 175cm tall and weighs 70kg:

BMI = 70 / (1.75 × 1.75) = **22.86**
      `,
    },
    {
      type: 'markdown',
      content: `
## Understanding Your Results

| BMI Range | Category | Health Risk |
|-----------|----------|-------------|
| < 18.5    | Underweight | Nutritional risk |
| 18.5-24.9 | Normal range | Ideal weight |
| 25-29.9   | Overweight | Increased risk |
| ≥ 30      | Obese | High health risk |
      `,
    },
    {
      type: 'markdown',
      content: `
## Frequently Asked Questions

### What is a normal BMI?

A normal BMI ranges from **18.5 to 24.9**. This is considered the healthy weight range.

### How accurate is BMI?

BMI is a good general indicator, but has limitations. It doesn't distinguish between muscle and fat. Athletes may have high BMI due to muscle mass.
      `,
    },
  ],
};
EOF
```

- [ ] **Step 4: 提交BMI计算器协议**

```bash
git add packages/calculators/
git commit -m "feat: implement BMI calculator protocol with calculation logic and content"
```

---

### Task 10: 实现CalculatorContext

**Files:**
- Create: `apps/web/contexts/CalculatorContext.tsx`

- [ ] **Step 1: 创建CalculatorContext**

```bash
mkdir -p apps/web/contexts
cat > apps/web/contexts/CalculatorContext.tsx << 'EOF'
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { CalculatorProtocol, ValidationResult, CalculationResult } from '@orange-calculator/shared';

interface CalculatorContextValue<T = any> {
  inputs: Record<string, any>;
  result: T | null;
  loading: boolean;
  error: string | null;
  setInputs: (inputs: Record<string, any>) => void;
  calculate: () => void;
  reset: () => void;
}

const CalculatorContext = createContext<CalculatorContextValue | null>(null);

interface CalculatorProviderProps {
  children: ReactNode;
  calculator: CalculatorProtocol;
}

export function CalculatorProvider({ children, calculator }: CalculatorProviderProps) {
  const [inputs, setInputs] = useState<Record<string, any>>({});
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculate = async () => {
    setLoading(true);
    setError(null);

    try {
      // Validate inputs
      const validation: ValidationResult = calculator.calculation.validate(inputs);
      if (!validation.valid) {
        setError(validation.errors.join(', '));
        return;
      }

      // Simulate calculation delay
      await new Promise(resolve => setTimeout(resolve, 300));

      // Execute calculation
      const result: CalculationResult = calculator.calculation.calculate(inputs);
      setResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
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
EOF
```

- [ ] **Step 2: 提交CalculatorContext**

```bash
git add apps/web/contexts/
git commit -m "feat: add CalculatorContext for state management"
```

---

### Task 11: 实现BMI计算器表单组件

**Files:**
- Create: `apps/web/components/BMICalculatorForm.tsx`

- [ ] **Step 1: 创建BMI计算器表单组件**

```bash
mkdir -p apps/web/components
cat > apps/web/components/BMICalculatorForm.tsx << 'EOF'
'use client';

import { useCalculator } from '@/contexts/CalculatorContext';
import { Input } from '@orange-calculator/ui';
import { Button } from '@orange-calculator/ui';

export function BMICalculatorForm() {
  const { inputs, setInputs, calculate, loading, error } = useCalculator();

  const handleChange = (field: string, value: any) => {
    setInputs({ ...inputs, [field]: value });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); calculate(); }} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Height"
          type="number"
          unit="cm"
          placeholder="175"
          value={inputs.height || ''}
          onChange={(e) => handleChange('height', parseFloat(e.target.value))}
          min={100}
          max={250}
          required
        />

        <Input
          label="Weight"
          type="number"
          unit="kg"
          placeholder="70"
          value={inputs.weight || ''}
          onChange={(e) => handleChange('weight', parseFloat(e.target.value))}
          min={20}
          max={300}
          required
        />
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        fullWidth
        size="lg"
      >
        {loading ? 'Calculating...' : 'Calculate BMI'}
      </Button>
    </form>
  );
}
EOF
```

- [ ] **Step 2: 提交表单组件**

```bash
git add apps/web/components/
git commit -m "feat: add BMI calculator form component with validation"
```

---

### Task 12: 实现BMI计算器结果展示组件

**Files:**
- Create: `apps/web/components/BMIResult.tsx`

- [ ] **Step 1: 创建结果展示组件**

```bash
cat > apps/web/components/BMIResult.tsx << 'EOF'
'use client';

import { useCalculator } from '@/contexts/CalculatorContext';
import { Card } from '@orange-calculator/ui';

export function BMIResult() {
  const { result } = useCalculator<{ bmi: number; category: string; color: string }>();

  if (!result) {
    return null;
  }

  const { bmi, category, color } = result;

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    red: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <Card padding="md">
      <div className="text-center space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Your BMI</p>
          <p className="text-5xl font-bold text-gray-900">{bmi}</p>
        </div>

        <div className={`inline-block px-4 py-2 rounded-lg border ${colorClasses[color as keyof typeof colorClasses]}`}>
          <p className="text-lg font-semibold">{category}</p>
        </div>

        <p className="text-sm text-gray-600">
          A healthy BMI range is 18.5 to 24.9
        </p>
      </div>
    </Card>
  );
}
EOF
```

- [ ] **Step 2: 提交结果组件**

```bash
git add apps/web/components/BMIResult.tsx
git commit -m "feat: add BMI result display component with color-coded categories"
```

---

### Task 13: 实现BMI计算器页面

**Files:**
- Create: `apps/web/app/calculators/[calculator]/page.tsx`

- [ ] **Step 1: 创建BMI计算器页面**

```bash
mkdir -p apps/web/app/calculators/[calculator]
cat > apps/web/app/calculators/[calculator]/page.tsx << 'EOF'
import { notFound } from 'next/navigation';
import { BMICalculator } from '@orange-calculator/calculators';
import { CalculatorProvider } from '@/contexts/CalculatorContext';
import { BMICalculatorForm } from '@/components/BMICalculatorForm';
import { BMIResult } from '@/components/BMIResult';

const CALCULATORS: Record<string, any> = {
  'bmi-calculator': BMICalculator,
};

export async function generateMetadata({ params }: { params: { calculator: string } }) {
  const calculator = CALCULATORS[params.calculator];

  if (!calculator) {
    return {
      title: 'Calculator Not Found',
    };
  }

  return {
    title: calculator.seo.title,
    description: calculator.seo.description,
    keywords: calculator.seo.keywords.join(', '),
  };
}

export default function CalculatorPage({ params }: { params: { calculator: string } }) {
  const calculator = CALCULATORS[params.calculator];

  if (!calculator) {
    notFound();
  }

  return (
    <CalculatorProvider calculator={calculator}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl md:text-3xl font-bold">{calculator.metadata.name}</h1>
            <p className="text-gray-600 mt-1">{calculator.seo.description}</p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-8">
            <BMICalculatorForm />
          </div>

          <BMIResult />
        </main>
      </div>
    </CalculatorProvider>
  );
}
EOF
```

- [ ] **Step 2: 创建404页面**

```bash
cat > apps/web/app/not-found.tsx << 'EOF'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Calculator not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
EOF
```

- [ ] **Step 3: 提交计算器页面**

```bash
git add apps/web/app/calculators/ apps/web/app/not-found.tsx
git commit -m "feat: add BMI calculator page with form and result display"
```

---

### Task 14: 实现ContentRenderer组件

**Files:**
- Create: `apps/web/components/ContentRenderer.tsx`

- [ ] **Step 1: 创建内容渲染器**

```bash
cat > apps/web/components/ContentRenderer.tsx << 'EOF'
'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { ContentNode } from '@orange-calculator/shared';

interface ContentRendererProps {
  nodes: ContentNode[];
}

export function ContentRenderer({ nodes }: ContentRendererProps) {
  return (
    <article className="prose prose-lg max-w-none max-md:prose-base">
      {nodes.map((node, index) => {
        if (node.type === 'markdown') {
          return (
            <div
              key={index}
              className="markdown-content space-y-4"
            >
              <ReactMarkdown>{node.content}</ReactMarkdown>
            </div>
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
EOF
```

- [ ] **Step 2: 更新计算器页面以包含内容**

```bash
cat > apps/web/app/calculators/[calculator]/page.tsx << 'EOF'
import { notFound } from 'next/navigation';
import { BMICalculator } from '@orange-calculator/calculators';
import { CalculatorProvider } from '@/contexts/CalculatorContext';
import { BMICalculatorForm } from '@/components/BMICalculatorForm';
import { BMIResult } from '@/components/BMIResult';
import { ContentRenderer } from '@/components/ContentRenderer';

const CALCULATORS: Record<string, any> = {
  'bmi-calculator': BMICalculator,
};

export async function generateMetadata({ params }: { params: { calculator: string } }) {
  const calculator = CALCULATORS[params.calculator];

  if (!calculator) {
    return {
      title: 'Calculator Not Found',
    };
  }

  return {
    title: calculator.seo.title,
    description: calculator.seo.description,
    keywords: calculator.seo.keywords.join(', '),
  };
}

export default function CalculatorPage({ params }: { params: { calculator: string } }) {
  const calculator = CALCULATORS[params.calculator];

  if (!calculator) {
    notFound();
  }

  return (
    <CalculatorProvider calculator={calculator}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl md:text-3xl font-bold">{calculator.metadata.name}</h1>
            <p className="text-gray-600 mt-1">{calculator.seo.description}</p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Calculator Form */}
          <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-8">
            <BMICalculatorForm />
          </div>

          {/* Result */}
          <BMIResult />

          {/* Content Sections */}
          <div className="mt-12">
            <ContentRenderer nodes={calculator.content.nodes} />
          </div>
        </main>
      </div>
    </CalculatorProvider>
  );
}
EOF
```

- [ ] **Step 3: 提交内容渲染器**

```bash
git add apps/web/components/ContentRenderer.tsx
git add apps/web/app/calculators/[calculator]/page.tsx
git commit -m "feat: add ContentRenderer and update calculator page to include content sections"
```

---

### Task 15: 测试BMI计算器完整流程

**Files:**
- Modify: No files created, just testing

- [ ] **Step 1: 启动开发服务器**

```bash
# Terminal 1: Start backend
cd apps/api && pnpm start:dev

# Terminal 2: Start frontend
cd apps/web && pnpm dev
```

Expected output: Both servers start successfully

- [ ] **Step 2: 测试BMI计算器页面**

1. Open browser: `http://localhost:3000/calculators/bmi-calculator`
2. Enter height: `175`
3. Enter weight: `70`
4. Click "Calculate BMI"

Expected result:
- BMI displays: `22.9`
- Category displays: `Normal weight`
- Green badge shown
- Content sections displayed below

- [ ] **Step 3: 测试验证**

```bash
# Test invalid input
1. Enter height: `50` (below minimum)
2. Enter weight: `70`
3. Click "Calculate BMI"

Expected: Error message "Height must be between 100 and 250 cm"

# Test edge cases
1. Enter height: `250`, weight: `300`
2. Click "Calculate BMI"

Expected: BMI = `48.0`, Category = `Obese`, Red badge
```

- [ ] **Step 4: 测试响应式布局**

1. Resize browser to mobile width (< 768px)
2. Verify form fields stack vertically
3. Verify content displays properly

Expected: Mobile layout works correctly

- [ ] **Step 5: 提交测试完成**

```bash
git add .
git commit -m "test: verify BMI calculator functionality and responsive design"
```

---

## 计划总结

此实施计划涵盖了：

✅ **第一阶段**：Monorepo基础框架搭建
- pnpm workspaces + Turborepo
- 共享类型包
- 共享UI组件包
- Next.js前端初始化
- NestJS后端初始化

✅ **第二阶段**：BMI计算器MVP
- 计算器协议实现
- 计算逻辑
- 内容节点
- React组件（表单、结果、渲染器）
- 响应式页面

**后续阶段**将在后续计划中扩展：
- 更多计算器（Mortgage, Loan等）
- AI功能集成（规则引擎、LLM）
- 国际化支持
- SEO优化
- 付费功能

---

**下一步：** 选择执行方式（Subagent-Driven 或 Inline Execution）
