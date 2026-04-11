# GPA Calculator

## 基本信息
- **URL**: /gpa-calculator.html
- **文件名**: gpa_calculator
- **分类**: other

## 页面标题
GPA Calculator

## 描述
This GPA calculator computes GPA and generates a report based on course credits and the achieved grade. It accepts both numerical and letter grades.

## 页面结构
### H1 标题
- GPA Calculator

### H2 标题
- GPA Planning Calculator
- Guidelines for raising GPA

## 输入字段

### da1
- **类型**: text
- **名称**: da1
- **占位符**: 无
- **必填**: 否





### ca1
- **类型**: text
- **名称**: ca1
- **占位符**: 无
- **必填**: 否





### la1
- **类型**: select-one
- **名称**: la1
- **占位符**: 无
- **必填**: 否





### sa1
- **类型**: text
- **名称**: sa1
- **占位符**: 无
- **必填**: 否





### da2
- **类型**: text
- **名称**: da2
- **占位符**: 无
- **必填**: 否





### ca2
- **类型**: text
- **名称**: ca2
- **占位符**: 无
- **必填**: 否





### la2
- **类型**: select-one
- **名称**: la2
- **占位符**: 无
- **必填**: 否





### sa2
- **类型**: text
- **名称**: sa2
- **占位符**: 无
- **必填**: 否





### da3
- **类型**: text
- **名称**: da3
- **占位符**: 无
- **必填**: 否





### ca3
- **类型**: text
- **名称**: ca3
- **占位符**: 无
- **必填**: 否





### la3
- **类型**: select-one
- **名称**: la3
- **占位符**: 无
- **必填**: 否





### sa3
- **类型**: text
- **名称**: sa3
- **占位符**: 无
- **必填**: 否





### da4
- **类型**: text
- **名称**: da4
- **占位符**: 无
- **必填**: 否





### ca4
- **类型**: text
- **名称**: ca4
- **占位符**: 无
- **必填**: 否





### la4
- **类型**: select-one
- **名称**: la4
- **占位符**: 无
- **必填**: 否





### sa4
- **类型**: text
- **名称**: sa4
- **占位符**: 无
- **必填**: 否





### da5
- **类型**: text
- **名称**: da5
- **占位符**: 无
- **必填**: 否





### ca5
- **类型**: text
- **名称**: ca5
- **占位符**: 无
- **必填**: 否





### la5
- **类型**: select-one
- **名称**: la5
- **占位符**: 无
- **必填**: 否





### sa5
- **类型**: text
- **名称**: sa5
- **占位符**: 无
- **必填**: 否





### pgpa
- **类型**: text
- **名称**: pgpa
- **占位符**: 无
- **必填**: 否





### pcredit
- **类型**: text
- **名称**: pcredit
- **占位符**: 无
- **必填**: 否





### grcCurrentGPA
- **类型**: text
- **名称**: grcCurrentGPA
- **占位符**: 无
- **必填**: 否





### grcTargetGPA
- **类型**: text
- **名称**: grcTargetGPA
- **占位符**: 无
- **必填**: 否





### grcCurrentCredit
- **类型**: text
- **名称**: grcCurrentCredit
- **占位符**: 无
- **必填**: 否





### grcAdditionalCredit
- **类型**: text
- **名称**: grcAdditionalCredit
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
- **点击事件**: clearForm(document.gpaform);


### 未命名按钮
- **类型**: submit
- **点击事件**: 无


### 未命名按钮
- **类型**: button
- **点击事件**: clearForm(document.gparaiseform);


## 计算公式
- There is no sure formula for raising a person's GPA, and strategies that work for one person may not work for another. However, there are some common guidelines and study habits that can be helpful when trying to raise GPA. The guidelines below are mostly anecdotal and are not intended as fail-safe ways to raise one's GPA, but are generally good habits that can have positive effects on learning, which may in turn increase GPA.

## 页面内容摘要
home / other / gpa calculator		GPA Calculator
Use this calculator to calculate grade point average (GPA) and generate a GPA report. If you use percentage grades, have grades on a different scale or in high school with AP/IB classes, please change the "Settings" to input specific values. Also use the settings to group courses into semesters or to include past GPA.

Semester 1Course (optional)CreditsGrade -A+AA-B+BB-C+CC-D+DD-FPNP -A+AA-B+BB-C+CC-D+DD-FPNP -A+AA-B+BB-C+CC-D+DD-FPNP -A+AA-B+BB-C+CC-D+DD-FPNP -A+AA-B+BB-C+CC-D+DD-FPNP+ add more courses

+ add a semester


	Prior Semester's GPA (optional)
	
		Prior Semester's GPA
		Credits Completed
	


	Settings 
		
			Grade Format:
				Letter
				Percentage
				Point Value
			
			
				Add GPA of prior semesters
			
			
				Group courses into semesters
			
		



	
	
	  Settings



function changePrior(){
	if (document.getElementById('prior').checked){
		document.getElementById("priorsemesters").style.display="block";
	}else{
		document.get...

---

**爬取时间**: 2026-04-11T07:25:57.563Z
