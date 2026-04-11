# Auto Lease Calculator

## 基本信息
- **URL**: /auto-lease-calculator.html
- **文件名**: auto_lease_calculator
- **分类**: financial

## 页面标题
Auto Lease Calculator

## 描述
Free auto lease calculator to find the monthly payment and total cost for an auto lease. It also compares the cost of leasing to that of purchasing a vehicle.

## 页面结构
### H1 标题
- Auto Lease Calculator

### H2 标题
无

## 输入字段

### cloanamount
- **类型**: text
- **名称**: cloanamount
- **占位符**: 无
- **必填**: 否





### cmonthlypay
- **类型**: text
- **名称**: cmonthlypay
- **占位符**: 无
- **必填**: 否





### cloanterm
- **类型**: text
- **名称**: cloanterm
- **占位符**: 无
- **必填**: 否





### cratetype
- **类型**: select-one
- **名称**: cratetype
- **占位符**: 无
- **必填**: 否





### cinterestrate
- **类型**: text
- **名称**: cinterestrate
- **占位符**: 无
- **必填**: 否





### cdownpayment
- **类型**: text
- **名称**: cdownpayment
- **占位符**: 无
- **必填**: 否





### ctradeinvalue
- **类型**: text
- **名称**: ctradeinvalue
- **占位符**: 无
- **必填**: 否





### csaletax
- **类型**: text
- **名称**: csaletax
- **占位符**: 无
- **必填**: 否





### cresidualvalue
- **类型**: text
- **名称**: cresidualvalue
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
- The Auto Lease Calculator can help estimate monthly lease payments based on total auto price or vice versa. For more information about or to do calculations involving leases in general, please use the Lease Calculator.

## 页面内容摘要
home / financial / auto lease calculatorPrint		Auto Lease Calculator




Total Price Monthly Payment



		Auto Price
		Monthly Pay
	
		
		
	 
Lease Termmonths
Interest Rate(%)Money Factor
Down Payment
Trade-in Value 
Sales Tax 
Residual Value 

	
	
	
	





function insertComma2(t,l){d=t.value.toString().replaceAll(",",""),a="";if("i"==l)a=(d=d.replace(/[^\d.-]/g,"")).toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");else if("d"==l){let g=(d=d.replace(/[^\d.-]/g,"")).toString().split(".");a=g[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),g.length>1&&(a+="."+g[1])}else"c"==l&&(a=d.replace(/\B(?=(\d{3})+(?!\d))/g,","));t.value=a}
function proComma2(p){let m=document.getElementById(p);m.onblur=function(){insertComma2(m, 'd');};insertComma2(m, 'd');}
proComma2("cloanamount");
proComma2("cmonthlypay");
proComma2("cdownpayment");
proComma2("ctradeinvalue");
proComma2("cresidualvalue");

function switchMF(smfVal){
	var cucthisunitval = (document.getElementById("cinterestrate").value+"")...

---

**爬取时间**: 2026-04-11T07:19:57.943Z
