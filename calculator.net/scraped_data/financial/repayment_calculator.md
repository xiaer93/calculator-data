# Repayment Calculator

## 基本信息
- **URL**: /repayment-calculator.html
- **文件名**: repayment_calculator
- **分类**: financial

## 页面标题
Repayment Calculator

## 描述
Free repayment calculator to find different ways to repay a loan, based on compounding periods, payment frequency, and fixed loan term or fixed payback amount.

## 页面结构
### H1 标题
- Repayment Calculator

### H2 标题
- Result

## 输入字段

### cloanamount
- **类型**: text
- **名称**: cloanamount
- **占位符**: 无
- **必填**: 否





### cinterestrate
- **类型**: text
- **名称**: cinterestrate
- **占位符**: 无
- **必填**: 否





### ccompound
- **类型**: select-one
- **名称**: ccompound
- **占位符**: 无
- **必填**: 否





### cpayback
- **类型**: select-one
- **名称**: cpayback
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





### cpaybackwayamount
- **类型**: text
- **名称**: cpaybackwayamount
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
未找到公式说明

## 页面内容摘要
home / financial / repayment calculatorPrint		Repayment Calculator

The Repayment Calculator can be used to find the repayment amount or length of debts, such as credit cards, mortgages, auto loans, and personal loans. It can be utilized for both ongoing debts and new loans.



Loan balance
Interest rate
Compound
annually (APY)
semi-annually
quarterly
monthly (APR)
semi-monthly
biweekly
weekly
daily
continuously
Pay back
every day
every week
every 2 weeks
every half month
every month
every quarter
every 6 months
every year


Repay within a fixed time
ofyearsmonths
Repay with a fixed installment
of every month



	
	
	






function switchPaybackWay(spwType){
	if (spwType=='t'){
		document.getElementById("cpaybackwayterm").style.display = "inline";
		document.getElementById("cpaybackwayamount").style.display = "none";
	}else{
		document.getElementById("cpaybackwayterm").style.display = "none";
		document.getElementById("cpaybackwayamount").style.display = "inline";
	}
}
function switch...

---

**爬取时间**: 2026-04-11T07:19:09.863Z
