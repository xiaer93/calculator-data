# Target Heart Rate Calculator

## 基本信息
- **URL**: /target-heart-rate-calculator.html
- **文件名**: target_heart_rate_calculator
- **分类**: health_fitness

## 页面标题
Target Heart Rate Calculator

## 描述
This free calculator calculates the target heart rate range for maximizing exercise benefit based on age and resting heart rate.

## 页面结构
### H1 标题
- Target Heart Rate Calculator

### H2 标题
无

## 输入字段

### age
- **类型**: text
- **名称**: age
- **占位符**: 无
- **必填**: 否





### mhr
- **类型**: text
- **名称**: mhr
- **占位符**: 无
- **必填**: 否





### rhr
- **类型**: text
- **名称**: rhr
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
- Max Heart Rate
	
		Estimate from age   Test result
		
			Age
		
		
			Tested Max Heart Ratebpm
		
	


	Resting Heart Rate
	bpm (optional)


	
		+ Settings
		
			
			Max heart rate estimation formula: 
			
				 Haskell & Fox (1971)
				 Tanaka, Monahan, & Seals (2001)
				 Nes, Janszky, Wisloff, Stoylen, Karlsen (2013)
			

			Activity intensity scale: 
			
				 The Karvonen Formula
				 Rating of perceived exertion with Borg scale
				 Rating of perceived exertion with modified Borg CR10 scale
- Max heart rate estimation formula: 
			
				 Haskell & Fox (1971)
				 Tanaka, Monahan, & Seals (2001)
				 Nes, Janszky, Wisloff, Stoylen, Karlsen (2013)
			

			Activity intensity scale: 
			
				 The Karvonen Formula
				 Rating of perceived exertion with Borg scale
				 Rating of perceived exertion with modified Borg CR10 scale
- Max heart rate estimation formula:
- The Karvonen Formula
				 Rating of perceived exertion with Borg scale
				 Rating of perceived exertion with modified Borg CR10 scale
- The Karvonen Formula

## 页面内容摘要
home / fitness & health / target heart rate calculator		Target Heart Rate Calculator





	Max Heart Rate
	
		Estimate from age   Test result
		
			Age
		
		
			Tested Max Heart Ratebpm
		
	


	Resting Heart Rate
	bpm (optional)


	
		+ Settings
		
			
			Max heart rate estimation formula: 
			
				 Haskell & Fox (1971)
				 Tanaka, Monahan, & Seals (2001)
				 Nes, Janszky, Wisloff, Stoylen, Karlsen (2013)
			

			Activity intensity scale: 
			
				 The Karvonen Formula
				 Rating of perceived exertion with Borg scale
				 Rating of perceived exertion with modified Borg CR10 scale
			
		
	


	
		
		
	





function shMHR(optVar){
	if (optVar=='a'){
		document.getElementById("mhrage").style.display = 'block';
		document.getElementById("mhrtest").style.display = 'none';
	}else{
		document.getElementById("mhrage").style.display = 'none';
		document.getElementById("mhrtest").style.display = 'block';
	}
	return false;
}
shMHR('a');

function cshmoreoption(optVar){
	if (optVar==1){
		docum...

---

**爬取时间**: 2026-04-11T07:22:31.845Z
