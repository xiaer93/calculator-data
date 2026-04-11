# BMI Calculator

## 基本信息
- **URL**: /bmi-calculator.html
- **文件名**: bmi_calculator
- **分类**: health_fitness

## 页面标题
BMI Calculator

## 描述
Free Body Mass Index calculator gives out the BMI value and categorizes BMI based on provided information from WHO and CDC for both adults and children.

## 页面结构
### H1 标题
- BMI Calculator

### H2 标题
- Result

## 输入字段

### cage
- **类型**: text
- **名称**: cage
- **占位符**: 无
- **必填**: 否





### cheightfeet
- **类型**: text
- **名称**: cheightfeet
- **占位符**: 无
- **必填**: 否





### cheightinch
- **类型**: text
- **名称**: cheightinch
- **占位符**: 无
- **必填**: 否





### cpound
- **类型**: text
- **名称**: cpound
- **占位符**: 无
- **必填**: 否





### cheightmeter
- **类型**: text
- **名称**: cheightmeter
- **占位符**: 无
- **必填**: 否





### ckg
- **类型**: text
- **名称**: ckg
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
- Below are the equations used for calculating BMI in the International System of Units (SI) and the US customary system (USC) using a 5'10", 160-pound individual as an example:
- The BMI prime formula is:

## 页面内容摘要
home / fitness & health / bmi calculatorPrint		BMI Calculator



US Units Metric Units Other Units





	Age
	  ages: 2 - 120


	Gender
	Male   Female




	Height
	
		
			feet
		  
			inches
		
	


	Weight
	pounds




	Height
	cm


	Weight
	kg




	
		
		
		
		
	







ResultBMI = 20.1 kg/m2   (Normal)161718.525303540UnderweightNormalOverweightObesityBMI = 20.1Healthy BMI range: 18.5 kg/m2 - 25 kg/m2Healthy weight for the height: 59.9 kg - 81 kgBMI Prime: 0.8Ponderal Index: 11.1 kg/m3


function popMenu(inval, insubmit){
	htmlVal = "";
	if (inval == "metric"){
		htmlVal = htmlVal + "<li><a href=\"#\" onclick=\"return popMenu('standard',1);\">US Units</a></li> <li id='menuon'><a href=\"#\" onclick=\"return popMenu('metric',1);\">Metric Units</a></li> <li><a href=\"#\" onclick=\"return popMenu('other',0);\">Other Units</a></li>";
		document.getElementById("ctype").value="metric";
		document.getElementById("standardheightweight").style.display = 'none';
		document.getElementById("metrich...

---

**爬取时间**: 2026-04-11T07:21:40.020Z
