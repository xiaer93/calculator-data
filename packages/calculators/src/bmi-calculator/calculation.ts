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
