# Random Number Generator

## 基本信息
- **URL**: /random-number-generator.html
- **文件名**: random_number_generator
- **分类**: math

## 页面标题
Random Number Generator

## 描述
Two free random number generators that work in user-defined min and max range. Both random integers and decimal numbers can be generated with high precision.

## 页面结构
### H1 标题
- Random Number Generator

### H2 标题
- Comprehensive Version

## 输入字段

### slower
- **类型**: number
- **名称**: slower
- **占位符**: 无
- **必填**: 否





### supper
- **类型**: number
- **名称**: supper
- **占位符**: 无
- **必填**: 否





### clower
- **类型**: text
- **名称**: clower
- **占位符**: 无
- **必填**: 否





### cupper
- **类型**: text
- **名称**: cupper
- **占位符**: 无
- **必填**: 否





### cnums
- **类型**: text
- **名称**: cnums
- **占位符**: 无
- **必填**: 否





### cprec
- **类型**: text
- **名称**: cprec
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
未找到公式说明

## 页面内容摘要
home / math / random number generatorRandom Number Generator
This version of the generator creates a random integer. It can deal with very large integers up to a few thousand digits.




	Lower Limit
	


	Upper Limit
	


	
	
	




Comprehensive Version
This version of the generator can create one or many random integers or decimals. It can deal with very large numbers with up to 999 digits of precision.



	Lower Limit
	


	Upper Limit
	


	Generate
	 numbers


	
		
			Allow duplication in results?
			
				Yes  
				No
			
			Sort the results?
			
				Ascend  
				Descend  
				No
			
		
		Type of result to generate?
		
			Integer  
			Decimal
		
			Precision:
				 digits
			
		
	


	
	
	




function shDupSort(inVal){
	var tempInVal = inVal+"";
	if ((tempInVal.length>0)&&(!isNaN(tempInVal))&&(inVal % 1 === 0)&&(parseInt(tempInVal)>1)){
		document.getElementById('dupsort').style.display = 'block';
	}else{
		document.getElementById('dupsort').style.display = 'none';
	}
	return false;
}
...

---

**爬取时间**: 2026-04-11T07:23:33.103Z
