# Sales Tax Calculator

## 基本信息
- **URL**: /sales-tax-calculator.html
- **文件名**: sales_tax_calculator
- **分类**: financial

## 页面标题
Sales Tax Calculator

## 描述
Free calculator to find the sales tax amount/rate, before tax price, and after-tax price. Also, check the sales tax rates in different states of the U.S.

## 页面结构
### H1 标题
- Sales Tax Calculator

### H2 标题
无

## 输入字段

### beforetax
- **类型**: text
- **名称**: beforetax
- **占位符**: 无
- **必填**: 否





### taxrate
- **类型**: text
- **名称**: taxrate
- **占位符**: 无
- **必填**: 否





### finalprice
- **类型**: text
- **名称**: finalprice
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
- For more information about or to do calculations involving income tax, please visit the Income Tax Calculator.

## 页面内容摘要
home / financial / sales tax calculator
Sales Tax Calculator

The Sales Tax Calculator can compute any one of the following, given inputs for the remaining two: before-tax price, sale tax rate, and final, or after-tax price.

	
		Before Tax Price
		
	
	
		Sales Tax Rate
		
	
	
		After Tax Price
		
	
	
		
			
			
		
	





function insertComma2(t,l){d=t.value.toString().replaceAll(",",""),a="";if("i"==l)a=(d=d.replace(/[^\d.-]/g,"")).toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");else if("d"==l){let g=(d=d.replace(/[^\d.-]/g,"")).toString().split(".");a=g[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),g.length>1&&(a+="."+g[1])}else"c"==l&&(a=d.replace(/\B(?=(\d{3})+(?!\d))/g,","));t.value=a}
function proComma2(p){let m=document.getElementById(p);m.onblur=function(){insertComma2(m, 'd');};insertComma2(m, 'd');}
proComma2("beforetax");
proComma2("finalprice");

RelatedVAT Calculator


What is Sales Tax?
A sales tax is a consumption tax paid to a government on the sale of certain g...

---

**爬取时间**: 2026-04-11T07:18:27.100Z
