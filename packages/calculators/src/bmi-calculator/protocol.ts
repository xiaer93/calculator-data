import type { CalculatorProtocol } from '@orange-calculator/shared'
import { calculation } from './calculation'
import { content } from './content'

export const bmiCalculatorProtocol: CalculatorProtocol = {
  metadata: {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    version: '1.0.0',
    category: 'health',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    author: 'Orange Calculator',
    status: 'published',
  },

  formFields: [
    {
      id: 'height',
      name: 'height',
      type: 'number',
      label: 'Height',
      placeholder: '175',
      required: true,
      order: 1,
      group: 'input',
      helpText: 'Enter your height in centimeters (100-250 cm)',
    },
    {
      id: 'weight',
      name: 'weight',
      type: 'number',
      label: 'Weight',
      placeholder: '70',
      required: true,
      order: 2,
      group: 'input',
      helpText: 'Enter your weight in kilograms (20-300 kg)',
    },
  ],

  calculation,

  ui: {
    cardView: {
      title: 'BMI Calculator',
      description: 'Calculate your Body Mass Index (BMI) and understand your health category',
      icon: '⚖️',
      tags: ['health', 'fitness', 'bmi'],
      featured: true,
    },
  },

  seo: {
    title: 'BMI Calculator - Free Body Mass Index Calculator',
    description: 'Calculate your BMI (Body Mass Index) instantly. Free online BMI calculator with health category analysis. Understand your weight status.',
    keywords: ['BMI calculator', 'body mass index', 'BMI', 'health calculator', 'weight calculator'],
    ogImage: '/og-bmi-calculator.png',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'BMI Calculator',
      applicationCategory: 'HealthApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  },

  llm: {
    systemPrompt: `You are a BMI (Body Mass Index) calculator assistant. Help users calculate their BMI and understand their health category.

BMI Formula: BMI = weight (kg) / height (m)²

BMI Categories:
- Underweight: BMI < 18.5
- Normal weight: BMI 18.5-24.9
- Overweight: BMI 25-29.9
- Obese: BMI ≥ 30

Validation Rules:
- Height: 100-250 cm (or 1.0-2.5 m)
- Weight: 20-300 kg

When interacting with users:
1. Ask for height and weight if not provided
2. Validate the input values
3. Calculate BMI using the formula
4. Determine the health category
5. Provide interpretation and health tips
6. Be encouraging and non-judgmental
7. Suggest consulting healthcare professionals for personalized advice`,
    temperature: 0.7,
    maxTokens: 500,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    translations: {
      en: {
        title: 'BMI Calculator',
        description: 'Calculate your Body Mass Index',
        height: 'Height',
        weight: 'Weight',
        calculate: 'Calculate BMI',
        result: 'Your BMI',
        category: 'Category',
      },
      'zh-CN': {
        title: 'BMI 计算器',
        description: '计算您的身体质量指数',
        height: '身高',
        weight: '体重',
        calculate: '计算 BMI',
        result: '您的 BMI',
        category: '分类',
      },
    },
  },

  content,
}
