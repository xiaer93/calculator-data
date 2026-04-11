# Percent Off Calculator

## 基本信息
- **URL**: /percent-off-calculator.html
- **文件名**: percent_off_calculator
- **分类**: financial

## 页面标题
Percent Off Calculator

## 描述
Online calculator to compute the final price of something after a given percent off. It can also calculate a final price given a stackable additional discount.

## 页面结构
### H1 标题
- Percent Off Calculator

### H2 标题
无

## 输入字段

### originalprice
- **类型**: text
- **名称**: originalprice
- **占位符**: 无
- **必填**: 否





### pctoff
- **类型**: text
- **名称**: pctoff
- **占位符**: 无
- **必填**: 否





### finalprice
- **类型**: text
- **名称**: finalprice
- **占位符**: 无
- **必填**: 否





### saved
- **类型**: text
- **名称**: saved
- **占位符**: 无
- **必填**: 否





### extrapctoff
- **类型**: text
- **名称**: extrapctoff
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
- This equates to a 32% discount, rather than a 35% discount, and this calculation is how the calculator is intended to be used. As an example, to more efficiently compute the discount described above:

## 页面内容摘要
home / financial / percent off calculator		Percent Off Calculator


Please provide two values below to calculate.




	
		Original price
		
	
	
		1st Percent off
		
	
	
		Final price
		
	
	
		Saved
		
	
	
		Has stackable additional discount?
		
				No    
				Yes
		
	
	
		Additional discount
		
	
	
		
			
			
		
	



function showExtra(seV){
	if (seV=="y"){
		document.getElementById("extraofflabel").style.display = "block";
		document.getElementById("extraoffinput").style.display = "block";
		document.getElementById("pctofflabel").style.display = "inline-block";
	}else{
		document.getElementById("extraofflabel").style.display = "none";
		document.getElementById("extraoffinput").style.display = "none";
		document.getElementById("pctofflabel").style.display = "none";
	}
	return false;
}
showExtra("n");
function insertComma2(t,l){d=t.value.toString().replaceAll(",",""),a="";if("i"==l)a=(d=d.replace(/[^\d.-]/g,"")).toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");else if("d"==...

---

**爬取时间**: 2026-04-11T07:21:33.926Z
