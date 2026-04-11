# Discount Calculator

## 基本信息
- **URL**: /discount-calculator.html
- **文件名**: discount_calculator
- **分类**: financial

## 页面标题
Discount Calculator

## 描述
Online calculator to determine the final price after discount, the amount saved, or the original price before discount related to a discounted purchase.

## 页面结构
### H1 标题
- Discount Calculator

### H2 标题
无

## 输入字段

### pricebefore
- **类型**: text
- **名称**: pricebefore
- **占位符**: 无
- **必填**: 否





### discount
- **类型**: text
- **名称**: discount
- **占位符**: 无
- **必填**: 否





### priceafter
- **类型**: text
- **名称**: priceafter
- **占位符**: 无
- **必填**: 否





### savedamount
- **类型**: text
- **名称**: savedamount
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
- The above examples are two of the most common discount methods. There are numerous others that can be more confusing, such as stackable discounts where you can get 20% off the original price, then 15% more off of that discounted price. If you need to do these kinds of calculations, refer to the Percent Off Calculator.

## 页面内容摘要
home / financial / discount calculator		Discount Calculator
Please provide any 2 values below to calculate.




	
		Price before discount
		
	
	
		Discount
		
	
	
		Price after discount
		
	
	
		You saved
		
	
	
		
			Discount type  
			
				Percent off
				Fixed amount off
			
		
	
	
		
		
	


function formatChange(fcV){
	if (fcV=="p"){
		document.getElementById("savedamountlabel").style.display = "block";
		document.getElementById("savedamountinput").style.display = "block";
		document.getElementById("discountinput").classList.remove("indollar");
		document.getElementById("discountinput").classList.add("inpct");
	}else{
		document.getElementById("savedamountlabel").style.display = "none";
		document.getElementById("savedamountinput").style.display = "none";
		document.getElementById("discountinput").classList.remove("inpct");
		document.getElementById("discountinput").classList.add("indollar");
	}
	return false;
}
formatChange("p");
function insertComma2(t,l){d=t.value.toString().rep...

---

**爬取时间**: 2026-04-11T07:20:08.496Z
