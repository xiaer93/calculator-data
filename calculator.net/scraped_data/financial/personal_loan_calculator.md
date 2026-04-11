# Personal Loan Calculator

## 基本信息
- **URL**: /personal-loan-calculator.html
- **文件名**: personal_loan_calculator
- **分类**: financial

## 页面标题
Personal Loan Calculator

## 描述
Free personal loan calculator that returns the monthly payment, real loan cost, and the APR after considering the fee, insurance, interest of a personal loan.

## 页面结构
### H1 标题
- Personal Loan Calculator

### H2 标题
- Monthly pay:   $424.94
- Amortization schedule

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





### cstartmonth
- **类型**: select-one
- **名称**: cstartmonth
- **占位符**: 无
- **必填**: 否





### cstartyear
- **类型**: text
- **名称**: cstartyear
- **占位符**: 无
- **必填**: 否





### corigamount
- **类型**: text
- **名称**: corigamount
- **占位符**: 无
- **必填**: 否





### corigisa
- **类型**: select-one
- **名称**: corigisa
- **占位符**: 无
- **必填**: 否





### cinsurance
- **类型**: text
- **名称**: cinsurance
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
home / financial / personal loan calculatorPrint		Personal Loan Calculator




Loan amount
Interest rate
Loan term
		years 
		months

Start dateJanFebMarAprMayJunJulAugSepOctNovDec 

Include fee and insurance

	
	Origination fee 
	
		
			Amount
			
			%$
		
		
			to be
			
				deducted from loan
				paid upfront
			
		
		
		Insurance /month
	
	


	
	
	




function cUpdateSymb(ofType){
	var cloanamount = (document.getElementById("cloanamount").value+"").replaceAll(',', '').replaceAll(' ', '');
	var corigamount = (document.getElementById("corigamount").value+"").replaceAll(',', '').replaceAll(' ', '');

	if (isNumber(cloanamount)&&isNumber(corigamount)){
		cloanamount = parseFloat(cloanamount);
		corigamount = parseFloat(corigamount);
		if (ofType=='percentage'){
			document.getElementById("corigamount").value = Math.round(100000.0*corigamount/cloanamount)/1000;
			document.getElementById("corigamount").classList.remove('indollar');
			document.getElementById("corigamount").classList.ad...

---

**爬取时间**: 2026-04-11T07:20:26.276Z
