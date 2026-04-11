# HELOC Calculator

## 基本信息
- **URL**: /heloc-calculator.html
- **文件名**: heloc_calculator
- **分类**: financial

## 页面标题
HELOC Calculator

## 描述
Free calculator that finds the HELOC amount you can borrow, along with the monthly payment, interest, total cost, and APR after factoring in closing costs and fees.

## 页面结构
### H1 标题
- Home Equity Line of Credit (HELOC) Calculator

### H2 标题
- Results
- The amount of line of credit you can borrow
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





### cdrawperiod
- **类型**: text
- **名称**: cdrawperiod
- **占位符**: 无
- **必填**: 否





### crepayperiod
- **类型**: text
- **名称**: crepayperiod
- **占位符**: 无
- **必填**: 否





### cclosecost
- **类型**: text
- **名称**: cclosecost
- **占位符**: 无
- **必填**: 否





### cclosecostisa
- **类型**: select-one
- **名称**: cclosecostisa
- **占位符**: 无
- **必填**: 否





### cannualfee
- **类型**: text
- **名称**: cannualfee
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
home / financial / heloc calculator		Home Equity Line of Credit (HELOC) Calculator




Loan amount
Interest rate
Draw period years
Repayment period years
Include closing costs and fees

	
	Closing costs 
	
		
			Amount
			
			%$
		
		
			to be
			
				paid upfront
				deducted from loan
			
		
		
		Annual fee /year
	
	


	
	




function cUpdateSymb(ofType){
	var cloanamount = (document.getElementById("cloanamount").value+"").replaceAll(',', '').replaceAll(' ', '');
	var cclosecost = (document.getElementById("cclosecost").value+"").replaceAll(',', '').replaceAll(' ', '');

	if (isNumber(cloanamount)&&isNumber(cclosecost)){
		cloanamount = parseFloat(cloanamount);
		cclosecost = parseFloat(cclosecost);
		if (ofType=='percentage'){
			document.getElementById("cclosecost").value = Math.round(100000.0*cclosecost/cloanamount)/1000;
			document.getElementById("cclosecost").classList.remove('indollar');
			document.getElementById("cclosecost").classList.add('inpct');
		}else{
			document.getE...

---

**爬取时间**: 2026-04-11T07:21:05.124Z
