# Tire Size Calculator

## 基本信息
- **URL**: /tire-size-calculator.html
- **文件名**: tire_size_calculator
- **分类**: other

## 页面标题
Tire Size Calculator

## 描述
Free calculator to find the dimensions of a tire based on its code. It also helps in choosing alternative tire sizes based on rim size or comparing two tires.

## 页面结构
### H1 标题
- Tire Size Calculator

### H2 标题
- Tire Size Comparison Calculator

## 输入字段

### ctw
- **类型**: text
- **名称**: ctw
- **占位符**: 无
- **必填**: 否





### car
- **类型**: text
- **名称**: car
- **占位符**: 无
- **必填**: 否





### cws
- **类型**: text
- **名称**: cws
- **占位符**: 无
- **必填**: 否





### cnws
- **类型**: text
- **名称**: cnws
- **占位符**: 无
- **必填**: 否





### ctw1
- **类型**: text
- **名称**: ctw1
- **占位符**: 无
- **必填**: 否





### car1
- **类型**: text
- **名称**: car1
- **占位符**: 无
- **必填**: 否





### cws1
- **类型**: text
- **名称**: cws1
- **占位符**: 无
- **必填**: 否





### ctw2
- **类型**: text
- **名称**: ctw2
- **占位符**: 无
- **必填**: 否





### car2
- **类型**: text
- **名称**: car2
- **占位符**: 无
- **必填**: 否





### cws2
- **类型**: text
- **名称**: cws2
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
- **点击事件**: 无


### 未命名按钮
- **类型**: button
- **点击事件**: clearForm(document.calform2);


## 计算公式
- The dimensions computed by our calculator use the following equations:

## 页面内容摘要
home / other / tire size calculator		Tire Size Calculator
Use the following calculators to find the dimensions of a tire based on its code. It can also provide a comparison of alternative tires that are compatible with a given wheel size.


function drawFrontTire(dfjg, dfLeftSpc, dfTopSpc, dfTDiaUse, dfTInnUse){
	var dftWall = (dfTDiaUse - dfTInnUse)/2
	dfjg.setColor("#999");
	dfjg.fillEllipse(dfLeftSpc, dfTopSpc, dfTDiaUse, dfTDiaUse);

	dfjg.setColor("#000000");
	dfjg.fillEllipse(dfLeftSpc+1, dfTopSpc+1, dfTDiaUse-2, dfTDiaUse-2);

	if (dftWall>25){
		var dfTempVal = Math.round(dftWall/2 - 5);
		dfjg.setColor("#333333");
		dfjg.fillEllipse(dfLeftSpc+dfTempVal, dfTopSpc+dfTempVal, dfTDiaUse-2*dfTempVal, dfTDiaUse-2*dfTempVal);

		dfTempVal = Math.round(dftWall/2 + 5);
		dfjg.setColor("#000000");
		dfjg.fillEllipse(dfLeftSpc+dfTempVal, dfTopSpc+dfTempVal, dfTDiaUse-2*dfTempVal, dfTDiaUse-2*dfTempVal);
	}

	dfjg.setColor("#dddddd");
	dfjg.fillEllipse((dfLeftSpc+dftWall), (dfTopSpc+dftWa...

---

**爬取时间**: 2026-04-11T07:28:36.027Z
