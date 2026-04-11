# Refinance Calculator

## 基本信息
- **URL**: /refinance-calculator.html
- **文件名**: refinance_calculator
- **分类**: financial

## 页面标题
Refinance Calculator

## 描述
Free calculator to plan the refinancing of loans by comparing existing and refinanced loans side by side, with options for cash out, mortgage points, and fees.

## 页面结构
### H1 标题
- Refinance Calculator

### H2 标题
无

## 输入字段

### cloandata
- **类型**: select-one
- **名称**: cloandata
- **占位符**: 无
- **必填**: 否





### crbalance
- **类型**: text
- **名称**: crbalance
- **占位符**: 无
- **必填**: 否





### cmpay
- **类型**: text
- **名称**: cmpay
- **占位符**: 无
- **必填**: 否





### cloanamount
- **类型**: text
- **名称**: cloanamount
- **占位符**: 无
- **必填**: 否





### cloanterm
- **类型**: text
- **名称**: cloanterm
- **占位符**: 无
- **必填**: 否





### cyears
- **类型**: text
- **名称**: cyears
- **占位符**: 无
- **必填**: 否





### cmonths
- **类型**: text
- **名称**: cmonths
- **占位符**: 无
- **必填**: 否





### cinterestrate
- **类型**: text
- **名称**: cinterestrate
- **占位符**: 无
- **必填**: 否





### cnyears
- **类型**: text
- **名称**: cnyears
- **占位符**: 无
- **必填**: 否





### cninterestrate
- **类型**: text
- **名称**: cninterestrate
- **占位符**: 无
- **必填**: 否





### cpoints
- **类型**: text
- **名称**: cpoints
- **占位符**: 无
- **必填**: 否





### ccosts
- **类型**: text
- **名称**: ccosts
- **占位符**: 无
- **必填**: 否





### ccashout
- **类型**: text
- **名称**: ccashout
- **占位符**: 无
- **必填**: 否





### calcSearchTerm
- **类型**: text
- **名称**: calcSearchTerm
- **占位符**: 无
- **必填**: 否





## 按钮

### 未命名按钮
- **类型**: submit
- **点击事件**: 无


### 未命名按钮
- **类型**: button
- **点击事件**: clearForm(document.calform);


## 计算公式
- When refinancing mortgages, there are a number of common fees that may apply. There is an input in the calculator to consider these in the subsequent calculations.
- For more information about or to do calculations involving mortgages, please visit the Mortgage Calculator.
- Student loan consolidation is different from student loan refinancing; the former is a special program offered by the Department of Education in the U.S. that allows all federal student loans to be combined into a single loan. Student loan refinancing is the process of taking out a new loan in order to pay off or replace other student loans. For more information about or to do calculations involving student loans, please visit the Student Loan Calculator.
- For more information about or to do calculations involving auto loans, please visit the Auto Loan Calculator.
- Credit card debt can also be consolidated into debt consolidation loans. Borrowers with good credit scores have a high chance of finding one with a low interest rate. For more information about or to do calculations involving a credit card, please visit the Credit Card Calculator. For more information about or to do calculations that involve paying off multiple credit cards, please visit the Credit Cards Payoff Calculator.

## 页面内容摘要
home / financial / refinance calculator		Refinance Calculator
The refinance calculator can help plan the refinancing of a loan given various situations, and also allows the side-by-side comparison of the existing or refinanced loan.


	
		
		Current loan
		
			
				I know my remaining balance
				I know the original loan amount
			
		
		
			
				Remaining balance
				Monthly payment
			
			
				Original loan amount
				Loan termyears
				Time remainingyearsmonths
			
		
		Interest rate
		
	
	
		
		New loan
		New loan termyears
		Interest rate
		Points 
		Costs and fees 

		
		Cash out amount 
		
	
	
	
		
		
	




function swCLoanInputs(sciVal){
	if ("b"==sciVal){
		document.getElementById("inputrbalance").style.display = "block";
		document.getElementById("inputlamount").style.display = "none";
	}else{
		document.getElementById("inputrbalance").style.display = "none";
		document.getElementById("inputlamount").style.display = "block";
	}
	return false;
}
swCLoanInputs("b");

function in...

---

**爬取时间**: 2026-04-11T07:20:34.717Z
