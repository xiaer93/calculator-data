import type { CalculationLogic, CalculationResult, FormattedResult } from '@orange-calculator/shared'

export const calculation: CalculationLogic = {
  calculate(inputs: Record<string, any>): CalculationResult {
    const { height, weight } = inputs
    const heightInMeters = height / 100
    const bmi = weight / (heightInMeters * heightInMeters)
    const roundedBMI = Math.round(bmi * 10) / 10

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

  format(result: CalculationResult): FormattedResult {
    const bmi = result.data.bmi as number
    const category = result.data.category as string
    return {
      primary: `Your BMI is ${bmi}`,
      secondary: [category],
      details: result.data,
    }
  },
}
