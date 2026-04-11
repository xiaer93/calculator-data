# Home Equity Loan Calculator

## 基本信息
- **URL**: /home-equity-loan-calculator.html
- **文件名**: home_equity_loan_calculator
- **分类**: financial

## 页面标题
Home Equity Loan Calculator

## 描述
Free calculator that finds the home equity loan amount you can borrow, along with the monthly payment, interest, total cost, and APR after factoring in closing costs.

## 页面结构
### H1 标题
- Home Equity Loan Calculator

### H2 标题
- Monthly pay:   $1,433.48
- The loan amount you can borrow
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





### cyears
- **类型**: text
- **名称**: cyears
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





### chousevalue
- **类型**: text
- **名称**: chousevalue
- **占位符**: 无
- **必填**: 否





### cmbalance
- **类型**: text
- **名称**: cmbalance
- **占位符**: 无
- **必填**: 否





### ltv
- **类型**: select-one
- **名称**: ltv
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


### 未命名按钮
- **类型**: submit
- **点击事件**: return calLoanAmount(1);


### 未命名按钮
- **类型**: button
- **点击事件**: clearForm(document.calform2);document.getElementById('canBorrowResult').innerHTML='';


## 计算公式
未找到公式说明

## 页面内容摘要
home / financial / home equity loan calculator		Home Equity Loan Calculator




Loan amount
Interest rate
Loan term
		years 

Include closing costs

	
	Closing costs 
	
		
			Amount
			
			%$
		
		
			to be
			
				deducted from loan
				paid upfront
			
		
	
	


	
	




function cUpdateSymb(ofType){
	var cloanamount = (document.getElementById("cloanamount").value+"").replaceAll(',', '').replaceAll(' ', '');
	var corigamount = (document.getElementById("corigamount").value+"").replaceAll(',', '').replaceAll(' ', '');

	if (isNumber(cloanamount)&&isNumber(corigamount)){
		cloanamount = parseFloat(cloanamount);
		corigamount = parseFloat(corigamount);
		if (ofType=='percentage'){
			document.getElementById("corigamount").value = Math.round(100000.0*corigamount/cloanamount)/1000;
			document.getElementById("corigamount").classList.remove('indollar');
			document.getElementById("corigamount").classList.add('inpct');
		}else{
			document.getElementById("corigamount").value = Math.round(cloan...

---

**爬取时间**: 2026-04-11T07:21:01.895Z
