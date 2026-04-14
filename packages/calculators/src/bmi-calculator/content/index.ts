import type { ContentNode } from '@orange-calculator/shared'

export const bmiContentNodes: ContentNode[] = [
  {
    type: 'markdown',
    content: `# What is BMI?

**Body Mass Index (BMI)** is a simple measure using your height and weight to determine if your weight is in a healthy range.

## How is BMI Calculated?

BMI is calculated using the following formula:

\`\`\`
BMI = weight (kg) / height (m)²
\`\`\`

For example:
- If you weigh 70 kg and are 1.75 m tall
- BMI = 70 / (1.75)² = 70 / 3.0625 = 22.86

## BMI Categories

| Category | BMI Range | Health Risk |
|----------|-----------|-------------|
| Underweight | < 18.5 | High |
| Normal weight | 18.5 - 24.9 | Minimal |
| Overweight | 25 - 29.9 | Increased |
| Obese | ≥ 30 | High |

## Why BMI Matters

BMI is a useful screening tool for:
- Assessing weight-related health risks
- Monitoring weight changes over time
- Guiding health and fitness goals

However, BMI has limitations:
- Doesn't distinguish between muscle and fat
- May not be accurate for athletes or elderly
- Should be used alongside other health indicators

*Always consult healthcare professionals for personalized health advice.*`,
  },

  {
    type: 'markdown',
    content: `# Understanding BMI Categories

## Underweight (BMI < 18.5)

**Characteristics:**
- Body weight may be insufficient for health
- Potential nutritional deficiencies
- Weakened immune system

**Health Risks:**
- Malnutrition
- Osteoporosis
- Anemia
- Immune system deficiencies

**Recommendations:**
- Consult a healthcare provider
- Work with a nutritionist
- Focus on nutrient-dense foods
- Gradual weight gain through balanced diet

## Normal Weight (BMI 18.5 - 24.9)

**Characteristics:**
- Ideal weight range for most people
- Lower risk of weight-related diseases
- Good overall health indicator

**Health Benefits:**
- Lower risk of heart disease
- Reduced risk of type 2 diabetes
- Better overall health outcomes

**Maintenance:**
- Continue balanced diet
- Regular physical activity
- Regular health check-ups
- Healthy lifestyle habits

## Overweight (BMI 25 - 29.9)

**Characteristics:**
- Excess body weight
- Increased health risks
- May benefit from weight management

**Health Risks:**
- Increased risk of heart disease
- Higher blood pressure
- Elevated cholesterol levels
- Greater risk of type 2 diabetes

**Recommendations:**
- Increase physical activity
- Improve diet quality
- Consult healthcare provider
- Set realistic weight loss goals

## Obese (BMI ≥ 30)

**Characteristics:**
- Significant excess body weight
- High risk of health complications
- Requires medical attention

**Health Risks:**
- Heart disease and stroke
- Type 2 diabetes
- Certain cancers
- Sleep apnea
- Joint problems

**Recommendations:**
- Seek medical supervision
- Professional weight management program
- Comprehensive health evaluation
- Long-term lifestyle changes

*These categories are general guidelines. Individual health factors vary.*`,
  },

  {
    type: 'markdown',
    content: `# Health Tips for Each BMI Category

## For Underweight Individuals

### Nutrition
- **Eat nutrient-dense foods:** Avocados, nuts, cheese, lean meats
- **Increase calorie intake:** Add healthy fats to meals
- **Regular meal schedule:** 5-6 smaller meals throughout the day
- **Protein intake:** Include protein with every meal

### Exercise
- **Strength training:** Build muscle mass
- **Moderate cardio:** Improve overall fitness
- **Avoid excessive cardio:** Can burn too many calories

### Lifestyle
- **Adequate sleep:** 7-9 hours per night
- **Stress management:** Chronic stress affects weight
- **Regular check-ups:** Monitor health progress

## For Normal Weight Individuals

### Maintenance
- **Balanced diet:** Continue eating variety of foods
- **Portion control:** Maintain appropriate serving sizes
- **Regular exercise:** 150 minutes moderate activity per week
- **Stay hydrated:** Drink plenty of water

### Prevention
- **Monitor weight:** Check weight regularly
- **Limit processed foods:** Choose whole foods
- **Maintain routine:** Consistent healthy habits
- **Regular health screenings:** Annual check-ups

## For Overweight Individuals

### Diet Changes
- **Reduce calorie intake:** Create modest calorie deficit
- **Increase vegetables:** Fill half your plate with veggies
- **Choose lean proteins:** Chicken, fish, legumes
- **Limit sugary drinks:** Water, tea, coffee instead

### Physical Activity
- **Start slowly:** 30 minutes walking daily
- **Gradually increase:** Add intensity and duration
- **Mix cardio and strength:** Both are important
- **Find activities you enjoy:** Better adherence

### Behavior Changes
- **Keep food diary:** Track eating patterns
- **Eat mindfully:** Pay attention to hunger cues
- **Limit screen time:** Reduce sedentary behavior
- **Get support:** Friends, family, or groups

## For Obese Individuals

### Medical Supervision
- **Consult doctor:** Before starting any program
- **Consider professional help:** Registered dietitian
- **Health assessment:** Check for related conditions
- **Medication review:** Some medications affect weight

### Sustainable Changes
- **Set realistic goals:** 5-10% weight loss initially
- **Focus on habits:** Not just the scale
- **Patience is key:** Healthy weight loss takes time
- **Celebrate non-scale victories:** Energy, mood, sleep

### Support Systems
- **Join support groups:** Share experiences
- **Work with professionals:** Get expert guidance
- **Include family:** Create supportive environment
- **Consider therapy:** Address emotional eating

## Universal Tips for Everyone

1. **Stay Hydrated:** Drink 8 glasses of water daily
2. **Sleep Well:** 7-9 hours of quality sleep
3. **Manage Stress:** Practice relaxation techniques
4. **Limit Alcohol:** Moderation is key
5. **Don't Smoke:** Seek help quitting if needed
6. **Regular Check-ups:** Preventive care is essential

*Always consult healthcare professionals before making significant changes to your diet or exercise routine.*`,
  },

  {
    type: 'markdown',
    content: `# BMI Limitations and Considerations

## What BMI Doesn't Tell You

### Body Composition
BMI is a simple calculation that only considers:
- Total weight
- Height

It **does not** distinguish between:
- Muscle mass
- Fat mass
- Bone density
- Water weight

### Common Limitations

#### 1. Athletes and Bodybuilders
- **Issue:** High muscle mass increases BMI
- **Result:** May be classified as overweight/obese
- **Reality:** Low body fat percentage, excellent health

#### 2. Elderly Individuals
- **Issue:** Natural muscle loss with age
- **Result:** BMI may appear normal despite health risks
- **Reality:** Higher body fat percentage than indicated

#### 3. Children and Teens
- **Issue:** BMI changes with growth and development
- **Result:** Adult BMI categories don't apply
- **Solution:** Use age- and sex-specific BMI percentiles

#### 4. Pregnant Women
- **Issue:** Expected weight gain during pregnancy
- **Result:** BMI calculation not applicable
- **Alternative:** Pre-pregnancy BMI for assessment

#### 5. Different Ethnicities
- **Issue:** Health risks may vary by ethnicity
- **Result:** Same BMI may have different implications
- **Example:** Asian populations may have higher health risks at lower BMI

## Better Alternatives or Complements

### Waist Circumference
- **What it measures:** Abdominal fat
- **Why it matters:** Visceral fat is more harmful
- **Guidelines:**
  - Men: < 40 inches (102 cm)
  - Women: < 35 inches (89 cm)

### Waist-to-Hip Ratio
- **Calculation:** Waist circumference ÷ Hip circumference
- **Healthy ranges:**
  - Men: < 0.9
  - Women: < 0.85

### Body Fat Percentage
- **Methods:**
  - DEXA scan (most accurate)
  - Bioelectrical impedance
  - Skinfold measurements
- **Healthy ranges:**
  - Men: 10-22%
  - Women: 20-32%

### Other Measurements
- **Blood pressure:** Cardiovascular health
- **Cholesterol levels:** Heart disease risk
- **Blood sugar:** Diabetes risk
- **Inflammation markers:** Overall health status

## When to See a Doctor

### Regardless of BMI, consult a healthcare provider if you experience:

- **Unexplained weight changes:** Rapid gain or loss
- **Fatigue:** Persistent lack of energy
- **Sleep issues:** Insomnia or sleep apnea
- **Joint pain:** Especially in weight-bearing joints
- **Shortness of breath:** During normal activities
- **Digestive issues:** Chronic problems
- **Mood changes:** Depression or anxiety

## Making the Most of BMI

### Best Practices

1. **Use BMI as a screening tool:** Not a definitive diagnosis
2. **Consider your overall health:** Multiple factors matter
3. **Track trends over time:** Changes are more important than single measurements
4. **Combine with other metrics:** Waist size, body fat, blood work
5. **Consult professionals:** Get personalized assessment

### Context Matters

Your BMI should be interpreted in context of:
- Age and gender
- Muscle mass and body composition
- Ethnicity and family history
- Overall lifestyle and habits
- Other health indicators

## Bottom Line

BMI is a useful **starting point** for assessing weight-related health risks, but it's **not the whole picture**. It works best when:
- Used as part of a comprehensive health assessment
- Combined with other measurements and tests
- Interpreted by healthcare professionals
- Considered alongside lifestyle factors

For personalized health advice, always consult with qualified healthcare providers who can evaluate your complete health profile.

*Remember: Health is more than a number on a scale or a calculator. Focus on overall wellness rather than BMI alone.*`,
  },
]
