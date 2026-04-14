import type { ContentConfig } from '@orange-calculator/shared'

export const content: ContentConfig = {
  introduction: [
    {
      type: 'markdown',
      content: `## What is BMI?

BMI (Body Mass Index) is a simple measure using your height and weight to determine if you're at a healthy weight.

### Why BMI Matters

- Quick health assessment
- Disease risk indicator
- Fitness planning tool`,
    },
    {
      type: 'markdown',
      content: `## BMI Formula

\`\`\`
BMI = weight (kg) / height² (m)
\`\`\`

### Example

For a person who is 175cm tall and weighs 70kg:

BMI = 70 / (1.75 × 1.75) = **22.86**`,
    },
    {
      type: 'markdown',
      content: `## Understanding Your Results

| BMI Range | Category | Health Risk |
|-----------|----------|-------------|
| < 18.5    | Underweight | Nutritional risk |
| 18.5-24.9 | Normal range | Ideal weight |
| 25-29.9   | Overweight | Increased risk |
| ≥ 30      | Obese | High health risk |`,
    },
    {
      type: 'markdown',
      content: `## Frequently Asked Questions

### What is a normal BMI?

A normal BMI ranges from **18.5 to 24.9**. This is considered the healthy weight range.

### How accurate is BMI?

BMI is a good general indicator, but has limitations. It doesn't distinguish between muscle and fat. Athletes may have high BMI due to muscle mass.`,
    },
  ],
}
