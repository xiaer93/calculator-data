// 爬取所有工具页面的脚本
const tools = {
  financial: [
    { name: 'Mortgage Calculator', url: 'mortgage_cal.php', file: 'mortgage_calculator' },
    { name: 'Loan Calculator', url: 'loan_cal.php', file: 'loan_calculator' },
    { name: 'Auto Loan Calculator', url: 'auto_loan_cal.php', file: 'auto_loan_calculator' },
    { name: 'Interest Calculator', url: 'interest_cal.php', file: 'interest_calculator' },
    { name: 'Payment Calculator', url: 'payment_cal.php', file: 'payment_calculator' },
    { name: 'Retirement Calculator', url: 'retirement_cal.php', file: 'retirement_calculator' },
    { name: 'Investment Calculator', url: 'investment.php', file: 'investment_calculator' },
    { name: 'Inflation Calculator', url: 'inflation_cal.php', file: 'inflation_calculator' },
    { name: 'Tax Calculator', url: 'income_tax.php', file: 'tax_calculator' },
    { name: 'Compound Interest', url: 'compound_interest.php', file: 'compound_interest' },
    { name: 'Salary Calculator', url: 'salary_cal.php', file: 'salary_calculator' },
    { name: 'Amortization Calculator', url: 'amortization_cal.php', file: 'amortization_calculator' },
    { name: 'Finance Calculator', url: 'finance.php', file: 'finance_calculator' },
    { name: 'Interest Rate Calculator', url: 'interest_rate.php', file: 'interest_rate_calculator' },
    { name: 'Sales Tax Calculator', url: 'sales_tax.php', file: 'sales_tax_calculator' }
  ],
  health_fitness: [
    { name: 'BMI Calculator', url: 'bmi.php', file: 'bmi_calculator' },
    { name: 'Calorie Calculator', url: 'calorie.php', file: 'calorie_calculator' },
    { name: 'Body Fat Calculator', url: 'body_fat.php', file: 'body_fat_calculator' },
    { name: 'BMR Calculator', url: 'bmr.php', file: 'bmr_calculator' },
    { name: 'Ideal Weight Calculator', url: 'ideal_weight.php', file: 'ideal_weight_calculator' },
    { name: 'Pace Calculator', url: 'pace.php', file: 'pace_calculator' },
    { name: 'Pregnancy Calculator', url: 'pregnancy.php', file: 'pregnancy_calculator' },
    { name: 'Due Date Calculator', url: 'Due_date_cal.php', file: 'due_date_calculator' },
    { name: 'Pregnancy Conception Calculator', url: 'pregnancy_conception.php', file: 'pregnancy_conception_calculator' },
    { name: 'Army Body Fat Calculator', url: 'Army_fat.php', file: 'army_body_fat_calculator' },
    { name: 'Ovulation Calculator', url: 'ovulation.php', file: 'ovulation_calculator' },
    { name: 'Calories Burned Calculator', url: 'Calories_burned.php', file: 'calories_burned_calculator' }
  ],
  math: [
    { name: 'Scientific Calculator', url: 'scientific_cal.php', file: 'scientific_calculator' },
    { name: 'Fraction Calculator', url: 'fraction_cal.php', file: 'fraction_calculator' },
    { name: 'Percentage Calculator', url: 'percentage_cal.php', file: 'percentage_calculator' },
    { name: 'Random Number Generator', url: 'random_num_cal.php', file: 'random_number_generator' },
    { name: 'Triangle Calculator', url: 'triangle_cal.php', file: 'triangle_calculator' },
    { name: 'Standard Deviation', url: 'standard_dev_cal.php', file: 'standard_deviation' },
    { name: 'Matrix Calculator', url: 'matrix.php', file: 'matrix_calculator' },
    { name: 'Equation Solver', url: 'equation.php', file: 'equation_solver' },
    { name: 'Mean Median Mode Range', url: 'mmmr.php', file: 'mean_median_mode_range' },
    { name: 'Circle Calculator', url: 'Circle.php', file: 'circle_calculator' },
    { name: 'Factor Calculator', url: 'factor.php', file: 'factor_calculator' }
  ],
  other: [
    { name: 'Age Calculator', url: 'Age_cal.php', file: 'age_calculator' },
    { name: 'Date Calculator', url: 'date_cal.php', file: 'date_calculator' },
    { name: 'Time Calculator', url: 'time_cal.php', file: 'time_calculator' },
    { name: 'Hours Calculator', url: 'hours.php', file: 'hours_calculator' },
    { name: 'GPA Calculator', url: 'GPA_cal.php', file: 'gpa_calculator' },
    { name: 'Grade Calculator', url: 'grade_cal.php', file: 'grade_calculator' },
    { name: 'Password Generator', url: 'password.php', file: 'password_generator' },
    { name: 'Concrete Calculator', url: 'Concrete_cal.php', file: 'concrete_calculator' },
    { name: 'Subnet Calculator', url: 'subnet.php', file: 'subnet_calculator' },
    { name: 'Unit Converter', url: 'conversion.php', file: 'unit_converter' },
    { name: 'Voltage Drop Calculator', url: 'voltage.php', file: 'voltage_drop_calculator' },
    { name: 'Electricity Calculator', url: 'Electricity.php', file: 'electricity_calculator' }
  ]
};

module.exports = tools;
