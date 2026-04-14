import type { CalculatorProtocol } from '@orange-calculator/shared'

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

  calculation: {
    calculate: (inputs: Record<string, any>) => {
      const height = Number(inputs.height)
      const weight = Number(inputs.weight)

      // Validation
      if (height < 100 || height > 250) {
        throw new Error('Height must be between 100 and 250 cm')
      }
      if (weight < 20 || weight > 300) {
        throw new Error('Weight must be between 20 and 300 kg')
      }

      // Calculate BMI
      const heightInMeters = height / 100
      const bmi = weight / (heightInMeters * heightInMeters)
      const roundedBMI = Math.round(bmi * 10) / 10

      // Determine category
      let category = ''
      let tip = ''
      if (roundedBMI < 18.5) {
        category = 'Underweight'
        tip = 'Consider consulting a nutritionist to develop a healthy weight gain plan.'
      } else if (roundedBMI < 25) {
        category = 'Normal weight'
        tip = 'Great! Maintain your current lifestyle with balanced diet and regular exercise.'
      } else if (roundedBMI < 30) {
        category = 'Overweight'
        tip = 'Consider increasing physical activity and consulting a healthcare provider.'
      } else {
        category = 'Obese'
        tip = 'Please consult a healthcare professional for personalized weight management advice.'
      }

      return {
        data: {
          bmi: roundedBMI,
          category,
          tip,
        },
        type: 'single',
        labels: {
          bmi: 'BMI',
          category: 'Category',
          tip: 'Health Tip',
        },
        decimals: 1,
        timestamp: Date.now(),
      }
    },

    format: (result) => {
      const bmi = result.data.bmi as number
      const category = result.data.category as string
      return {
        primary: `Your BMI is ${bmi}`,
        secondary: [category],
        details: result.data,
      }
    },
  },

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

  content: {
    introduction: [
      {
        type: 'markdown',
        content: `# What is BMI?

**Body Mass Index (BMI)** is a simple measure using your height and weight to determine if your weight is in a healthy range.

## How is BMI Calculated?

BMI is calculated using the following formula:

\`\`\`
BMI = weight (kg) / height (m)²
\`\`\`

## BMI Categories

| Category | BMI Range | Health Risk |
|----------|-----------|-------------|
| Underweight | < 18.5 | High |
| Normal weight | 18.5 - 24.9 | Minimal |
| Overweight | 25 - 29.9 | Increased |
| Obese | ≥ 30 | High |

*Always consult healthcare professionals for personalized health advice.*`,
      },
    ],

    instructions: [
      {
        type: 'markdown',
        content: `# How to Use This Calculator

1. **Enter Your Height**: Input your height in centimeters (cm)
   - Valid range: 100-250 cm
   - Example: 175 cm

2. **Enter Your Weight**: Input your weight in kilograms (kg)
   - Valid range: 20-300 kg
   - Example: 70 kg

3. **Calculate**: Click the "Calculate BMI" button

4. **View Results**: See your BMI value and health category

5. **Get Tips**: Read personalized health tips based on your category`,
      },
    ],

    faq: [
      {
        question: 'What is a normal BMI?',
        answer: 'A normal BMI is between 18.5 and 24.9. This range is associated with the lowest health risks for most people.',
      },
      {
        question: 'Is BMI always accurate?',
        answer: 'BMI has limitations. It may not be accurate for athletes with high muscle mass, elderly individuals, or pregnant women. Consider it as a screening tool, not a definitive health assessment.',
      },
      {
        question: 'How often should I check my BMI?',
        answer: 'Check your BMI periodically, especially if you notice changes in your weight or lifestyle. Annual check-ups are recommended for most adults.',
      },
    ],

    examples: [
      {
        title: 'Normal Weight Example',
        description: 'A person with normal BMI',
        inputs: {
          height: 175,
          weight: 70,
        },
        outputs: {
          bmi: 22.9,
          category: 'Normal weight',
          tip: 'Great! Maintain your current lifestyle with balanced diet and regular exercise.',
        },
      },
      {
        title: 'Overweight Example',
        description: 'A person with elevated BMI',
        inputs: {
          height: 180,
          weight: 95,
        },
        outputs: {
          bmi: 29.3,
          category: 'Overweight',
          tip: 'Consider increasing physical activity and consulting a healthcare provider.',
        },
      },
    ],
  },
}
