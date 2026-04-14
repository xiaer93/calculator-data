export interface BMIInput {
  height: number
  weight: number
}

export interface BMIResult {
  bmi: number
  category: 'Underweight' | 'Normal weight' | 'Overweight' | 'Obese'
  tip: string
}

export interface ValidationError {
  field: 'height' | 'weight'
  message: string
}

/**
 * Validate BMI input values
 */
export function validate(input: BMIInput): ValidationError[] {
  const errors: ValidationError[] = []

  if (input.height < 100 || input.height > 250) {
    errors.push({
      field: 'height',
      message: 'Height must be between 100 and 250 cm',
    })
  }

  if (input.weight < 20 || input.weight > 300) {
    errors.push({
      field: 'weight',
      message: 'Weight must be between 20 and 300 kg',
    })
  }

  return errors
}

/**
 * Calculate BMI from height and weight
 * Formula: BMI = weight (kg) / height (m)²
 */
export function calculate(input: BMIInput): number {
  const heightInMeters = input.height / 100
  const bmi = input.weight / (heightInMeters * heightInMeters)
  return Math.round(bmi * 10) / 10 // Round to 1 decimal place
}

/**
 * Determine BMI category based on BMI value
 */
export function getCategory(bmi: number): BMIResult['category'] {
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi < 25) {
    return 'Normal weight'
  } else if (bmi < 30) {
    return 'Overweight'
  } else {
    return 'Obese'
  }
}

/**
 * Get health tip based on BMI category
 */
export function getTip(category: BMIResult['category']): string {
  const tips: Record<BMIResult['category'], string> = {
    Underweight: 'Consider consulting a nutritionist to develop a healthy weight gain plan.',
    'Normal weight': 'Great! Maintain your current lifestyle with balanced diet and regular exercise.',
    Overweight: 'Consider increasing physical activity and consulting a healthcare provider.',
    Obese: 'Please consult a healthcare professional for personalized weight management advice.',
  }

  return tips[category]
}

/**
 * Format BMI result for display
 */
export function format(result: BMIResult): string {
  return `Your BMI is ${result.bmi} (${result.category})`
}

/**
 * Main calculation function with validation
 */
export function calculateBMI(input: BMIInput): BMIResult {
  const bmi = calculate(input)
  const category = getCategory(bmi)
  const tip = getTip(category)

  return {
    bmi,
    category,
    tip,
  }
}
