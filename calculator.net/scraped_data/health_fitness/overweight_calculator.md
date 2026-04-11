# Overweight Calculator

## 基本信息
- **URL**: /overweight-calculator.html
- **文件名**: overweight_calculator
- **分类**: health_fitness

## 页面标题
Overweight Calculator

## 描述
This free calculator computes BMI and relates the calculated value to standards used to indicate the possible state of being overweight.

## 页面结构
### H1 标题
- Overweight Calculator

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
未找到公式说明

## 页面内容摘要
home / fitness & health / overweight calculator		Overweight Calculator
This calculator can be used to calculate your overweight status.

US Units Metric Units Other Units



	Age
	


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




	
		
		
		
		
	





ResultYour weight is Normal.Normal weight range for the height: 59.9 - 81.0 kgs.


function popMenu(inval, insubmit){
	htmlVal = "";
	if (inval == "metric"){
		htmlVal = htmlVal + "<li><a href=\"#\" onclick=\"popMenu('standard',1);return false;\">US Units</a></li> <li id='menuon'><a href=\"#\" onclick=\"popMenu('metric',1);return false;\">Metric Units</a></li> <li><a href=\"#\" onclick=\"popMenu('other',0);return false;\">Other Units</a></li>";
		document.getElementById("ctype").value="metric";
		document.getElementById("standardheightweight").style.display = 'none';
		document.getElementById("metricheightweight").style.display = 'block';
		htmlVal = "<ul>" + htmlVal +...

---

**爬取时间**: 2026-04-11T07:23:09.443Z
