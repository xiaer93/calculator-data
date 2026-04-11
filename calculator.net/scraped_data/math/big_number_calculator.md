# Big Number Calculator

## 基本信息
- **URL**: /big-number-calculator.html
- **文件名**: big_number_calculator
- **分类**: math

## 页面标题
Big Number Calculator

## 描述
This free big number calculator can perform calculations involving very large integers or decimals at a high level of precision.

## 页面结构
### H1 标题
- Big Number Calculator

### H2 标题
无

## 输入字段

### cp
- **类型**: text
- **名称**: cp
- **占位符**: 无
- **必填**: 否





### calcSearchTerm
- **类型**: text
- **名称**: calcSearchTerm
- **占位符**: 无
- **必填**: 否





## 按钮

### X + Y
- **类型**: submit
- **点击事件**: return checkGetPost();


### X – Y
- **类型**: submit
- **点击事件**: return checkGetPost();


### X × Y
- **类型**: submit
- **点击事件**: return checkGetPost();


### X / Y
- **类型**: submit
- **点击事件**: return checkGetPost();


### X^Y
- **类型**: submit
- **点击事件**: return checkGetPost();


### √X
- **类型**: submit
- **点击事件**: return checkGetPost();


### X ^ 2
- **类型**: submit
- **点击事件**: return checkGetPost();


### X!
- **类型**: submit
- **点击事件**: return checkGetPost();


### MOD
- **类型**: submit
- **点击事件**: return checkGetPost();


### GCD
- **类型**: submit
- **点击事件**: return checkGetPost();


### LCM
- **类型**: submit
- **点击事件**: return checkGetPost();


## 计算公式
未找到公式说明

## 页面内容摘要
home / math / big number calculatorBig Number CalculatorThe calculator below can compute very large numbers. Acceptable formats include: integers, decimal, or the E-notation form of scientific notation, i.e. 23E18, 3.5e19, etc.

	
		
		X = 		
	
	
		
		Y = 
	
	
		 		
		Precision:  digits
			after the decimal place in the result			
		
	
	
		 		
			Click the buttons below to calculate
			
			X + Y
			X – Y
			X × Y
						X / Y
			X^Y
			√X
			X ^ 2
						X!
			MOD
			GCD
			LCM
			
		
	



#submitbtn input, #submitbtn button{
	border: 0px;
	border-radius: 3px;
	background:#417516;
	padding: 8px 9px;
	font-size:16px;
	color:#fff;
}
#submitbtn input:hover, #submitbtn button:hover{
	background:#444;
	color:#fff;
}


function checkGetPost(){
	var allInputsVal = document.calc.cx.value + "|" + document.calc.cy.value + "|" + document.calc.cp.value;
	if (allInputsVal.length>1950) document.calc.method = "post";
	return true;
}


Most scientific and graphing calculators can only display possibly up...

---

**爬取时间**: 2026-04-11T07:25:26.336Z
