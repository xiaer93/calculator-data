# Triangle Calculator

## 基本信息
- **URL**: /triangle-calculator.html
- **文件名**: triangle_calculator
- **分类**: math

## 页面标题
Triangle Calculator

## 描述
This free triangle calculator computes the edges, angles, area, height, perimeter, median, as well as other values and a diagram of the resulting triangle.

## 页面结构
### H1 标题
- Triangle Calculator

### H2 标题
无

## 输入字段

### vc
- **类型**: text
- **名称**: vc
- **占位符**: 无
- **必填**: 否





### vx
- **类型**: text
- **名称**: vx
- **占位符**: 无
- **必填**: 否





### vy
- **类型**: text
- **名称**: vy
- **占位符**: 无
- **必填**: 否





### va
- **类型**: text
- **名称**: va
- **占位符**: 无
- **必填**: 否





### vz
- **类型**: text
- **名称**: vz
- **占位符**: 无
- **必填**: 否





### vb
- **类型**: text
- **名称**: vb
- **占位符**: 无
- **必填**: 否





### angleunits
- **类型**: select-one
- **名称**: angleunits
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
- Given the lengths of all three sides of any triangle, each angle can be calculated using the following equation. Refer to the triangle above, assuming that a, b, and c are known values.
- There are multiple different equations for calculating the area of a triangle, dependent on what information is known. Likely the most commonly known equation for calculating the area of a triangle involves its base, b, and height, h. The "base" refers to any side of the triangle where the height is represented by the length of the line segment drawn from the vertex opposite the base, to a point on the base that forms a perpendicular.
- Given the length of two sides and the angle between them, the following formula can be used to determine the area of the triangle. Note that the variables used are in reference to the triangle shown in the calculator above. Given a = 9, b = 7, and C = 30°:
- Another method for calculating the area of a triangle uses Heron's formula. Unlike the previous equations, Heron's formula does not require an arbitrary choice of a side as a base, or a vertex as an origin. However, it does require that the lengths of the three sides are known. Again, in reference to the triangle provided in the calculator, if a = 3, b = 4, and c = 5:
- For the purposes of this calculator, the inradius is calculated using the area (Area) and semiperimeter (s) of the triangle along with the following formulas:

## 页面内容摘要
home / math / triangle calculator		Triangle Calculator
Please provide 3 values including at least one side to the following 6 fields, and click the "Calculate" button. When radians are selected as the angle unit, it can take values such as pi/2, pi/4, etc.

	
		
			
				°
			
		
		
			
			 
			
		
		
			°
			 
			
			 
			°
		
		
			
				Angle Unit:
				
					degree °
					radian
				
			
		
		
			
				
				
			
		
	


function showDegUnit(inVal){
	if (inVal!='r') inVal = '&#176;';
	document.getElementById('dg1').innerHTML=inVal;
	document.getElementById('dg2').innerHTML=inVal;
	document.getElementById('dg3').innerHTML=inVal;

}
showDegUnit("d")



A triangle is a polygon that has three vertices. A vertex is a point where two or more curves, lines, or edges meet; in the case of a triangle, the three vertices are joined by three line segments called edges. A triangle is usually referred to by its vertices. Hence, a triangle with vertices a, b, and c is typically denoted as Δabc. Further...

---

**爬取时间**: 2026-04-11T07:23:22.805Z
