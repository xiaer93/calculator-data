# Bond Calculator

## 基本信息
- **URL**: /bond-calculator.html
- **文件名**: bond_calculator
- **分类**: financial

## 页面标题
Bond Calculator

## 描述
Free calculator to compute various parameters of a bond. It also provides the price and accrued interest for bonds not traded at the coupon date.

## 页面结构
### H1 标题
- Bond Calculator

### H2 标题
- Results
- Bond pricing calculator
- Results

## 输入字段

### cprice
- **类型**: text
- **名称**: cprice
- **占位符**: 无
- **必填**: 否





### cface
- **类型**: text
- **名称**: cface
- **占位符**: 无
- **必填**: 否





### cyield
- **类型**: text
- **名称**: cyield
- **占位符**: 无
- **必填**: 否





### cyears
- **类型**: text
- **名称**: cyears
- **占位符**: 无
- **必填**: 否





### ccoupon
- **类型**: text
- **名称**: ccoupon
- **占位符**: 无
- **必填**: 否





### cunit
- **类型**: select-one
- **名称**: cunit
- **占位符**: 无
- **必填**: 否





### cfrequency
- **类型**: select-one
- **名称**: cfrequency
- **占位符**: 无
- **必填**: 否





### cface2
- **类型**: text
- **名称**: cface2
- **占位符**: 无
- **必填**: 否





### cyield2
- **类型**: text
- **名称**: cyield2
- **占位符**: 无
- **必填**: 否





### ccoupon2
- **类型**: text
- **名称**: ccoupon2
- **占位符**: 无
- **必填**: 否





### cunit2
- **类型**: select-one
- **名称**: cunit2
- **占位符**: 无
- **必填**: 否





### cfrequency2
- **类型**: select-one
- **名称**: cfrequency2
- **占位符**: 无
- **必填**: 否





### cmdate
- **类型**: date
- **名称**: cmdate
- **占位符**: 无
- **必填**: 否





### csdate
- **类型**: date
- **名称**: csdate
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
- Calculating the bond price involves discounting the future cash flows, which include interest payments and the principal repayment, to their present value using the required yield or discount rate. The bond price is the sum of the present values of all these cash flows. The basic formula for calculating the price of a bond is as follows:
- The bond price is calculated by discounting each semi-annual payment and the face value at maturity back to their present value, using a 3% per period rate. For this case, the calculated bond price is $925.61. This process involves performing calculations for each payment and then summing them up, a task that can be complex without the aid of a financial calculator or software. Our calculators above are designed to facilitate this purpose.
- Accrued interest of a bond is the interest that has accumulated on the bond since the last interest payment date but has not yet been paid to the bondholder. The accrued interest can be calculated using the formula:
- This formula highlights that the dirty price, which is the total price paid by the buyer, includes both the clean price of the bond (its market value excluding accrued interest) and the accrued interest earned on the bond from the last coupon payment date up to the purchase date.
- As seen in the accrued interest calculation formula above, the accrued interest is closely related to the methods of counting the number of days since the last coupon payment and the total days in a year. Day-count conventions in the bond market are rules that determine how days are counted for the calculation of interest that accrues over time on bonds. The main day-count conventions used in the bond market include:

## 页面内容摘要
home / financial / bond calculator		Bond Calculator
Please enter any four values into the fields below to calculate the remaining value of a bond. This calculator is for bonds issued/traded at the coupon date.





	Price
	

Face value
Yield
Time to maturity
	years

	Annual coupon
	
	%$

Coupon frequency
	
		annually
		semiannually
		quarterly
		monthly
	


	
	




 
ResultsGiven the face value, yield, time to maturity, and annual coupon, the price is: $97.3270.



Bond pricing calculator
Use this calculator to value the price of bonds not traded at the coupon date. It provides the dirty price, clean price, accrued interest, and the days since the last coupon payment.




Face value
Yield

	Annual coupon
	
	%$

Coupon frequency
	
		annually
		semiannually
		quarterly
		monthly
	


	Maturity date 
	


	Settlement date 
	



Day-count convention to use:

	30/360
	Actual/360
	Actual/365
	Actual/Actual



	
	




 
ResultsDirty price:$97.3900Clean price:$97.3345Accrued interest:$0.0556Inte...

---

**爬取时间**: 2026-04-11T07:19:27.754Z
