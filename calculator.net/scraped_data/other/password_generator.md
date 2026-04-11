# Password Generator

## 基本信息
- **URL**: /password-generator.html
- **文件名**: password_generator
- **分类**: other

## 页面标题
Password Generator

## 描述
A random password generator to create strong and secure passwords. To ensure security, they are generated on the webpage without being sent over the internet.

## 页面结构
### H1 标题
- Random Password Generator

### H2 标题
- Password

## 输入字段

### lennumber
- **类型**: number
- **名称**: lennumber
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
- **点击事件**: return generatePass();


## 计算公式
未找到公式说明

## 页面内容摘要
home / other / password generator
Random Password Generator
This tool can generate secure, strong, random passwords. To ensure security, the password is generated completely on the webpage without being sent across the Internet.

Password#*@P9Fg8*aPassword Strength:StrongPassword Entropy:60.9 bitsCopy Password   Regenerate



	Password Length:		
		
	


	
		Include Lower Case (a-z)
		Include Upper Case (A-Z)
		Include Numbers (0-9)
		Include Symbols (!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)
		Exclude Ambiguous Characters (iIl1L| o0O `'-_":;.,)
		Exclude Brackets (<>()[]{})
		No Repeated Characters
	


	 
	Save Settings




function genMathRand(){if (window.crypto){var tempGRArray = new Uint32Array(1);return (window.crypto.getRandomValues(tempGRArray)/65536/65536);}else{return Math.random();}}
function saveSettings(){
	var frm = document.calform;
	var cvalue='';
	if (frm.ilower.checked){
		cvalue+='1';
	}else{
		cvalue+='0';
	}
	if (frm.iupper.checked){
		cvalue+='1';
	}else{
		cvalue+='0';
	}
...

---

**爬取时间**: 2026-04-11T07:26:17.720Z
