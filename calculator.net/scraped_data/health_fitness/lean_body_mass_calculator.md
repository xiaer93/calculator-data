# Lean Body Mass Calculator

## 基本信息
- **URL**: /lean-body-mass-calculator.html
- **文件名**: lean_body_mass_calculator
- **分类**: health_fitness

## 页面标题
Lean Body Mass Calculator

## 描述
This free lean body mass (LBM) calculator estimates LBM based on body weight, height, age, and gender. It compares the results of several popular formulas.

## 页面结构
### H1 标题
- Lean Body Mass Calculator

### H2 标题
- Result

## 输入字段

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
- The Lean Body Mass Calculator computes a person's estimated lean body mass (LBM) based on body weight, height, gender, and age. For comparison purposes, the calculator provides the results of multiple formulas.
- ResultThe lean body mass based on different formulas:FormulaLean Body MassBody FatBoer153.3 kg (89%)11%James251.8 kg (86%)14%Hume351.2 kg (85%)15%
- The lean body mass based on different formulas:
- Multiple formulas have been developed for calculating estimated LBM (eLBM) and the calculator above provides the results for all of them.
- The Boer Formula:1

## 页面内容摘要
home / fitness & health / lean body mass calculator		Lean Body Mass Calculator
The Lean Body Mass Calculator computes a person's estimated lean body mass (LBM) based on body weight, height, gender, and age. For comparison purposes, the calculator provides the results of multiple formulas.

US Units Metric Units Other Units




	Gender
	male   female


	Age 14 or younger?
		yes   no
	




	Height
	
		
			feet
		 
			inches
		
	


	Weight
	pounds




	Height
	cm


	Weight
	kg




	
		
		
		
	




ResultThe lean body mass based on different formulas:FormulaLean Body MassBody FatBoer153.3 kg (89%)11%James251.8 kg (86%)14%Hume351.2 kg (85%)15%
function popMenu(inval, insubmit){
	htmlVal = "";
	if (inval == "metric"){
		htmlVal = htmlVal + "<li><a href=\"#\" onclick=\"return popMenu('standard',1);\">US Units</a></li> <li id='menuon'><a href=\"#\" onclick=\"return popMenu('metric',1);\">Metric Units</a></li> <li><a href=\"#\" onclick=\"return popMenu('other');\">Other Units</a></li>";
		docum...

---

**爬取时间**: 2026-04-11T07:22:19.759Z
