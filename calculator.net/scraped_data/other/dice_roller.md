# Dice Roller

## 基本信息
- **URL**: /dice-roller.html
- **文件名**: dice_roller
- **分类**: other

## 页面标题
Dice Roller

## 描述
Online virtual dice roller that is capable of simultaneously rolling up to 100 dice randomly. A virtual dice roller with any number of sides is also provided.

## 页面结构
### H1 标题
- Virtual Dice Roller

### H2 标题
- Non-Conventional Dice Roller

## 输入字段

### lennumber
- **类型**: number
- **名称**: lennumber
- **占位符**: 无
- **必填**: 否





### diceside
- **类型**: number
- **名称**: diceside
- **占位符**: 无
- **必填**: 否





### dicenum
- **类型**: number
- **名称**: dicenum
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
- **点击事件**: return rollDice();


### 未命名按钮
- **类型**: submit
- **点击事件**: return rollDice2();


## 计算公式
未找到公式说明

## 页面内容摘要
home / other / dice roller
Virtual Dice Roller






	Number of Dice:		
		
	


	




function genMathRand(){if (window.crypto){var tempGRArray = new Uint32Array(1);return (window.crypto.getRandomValues(tempGRArray)/65536/65536);}else{return Math.random();}}
function preShow(){
	var rdAmt = parseInt(document.calform.lennumber.value);
	var outImgs = '';
	for (i=0; i<rdAmt; i++) {
		var tempid = Math.floor((genMathRand()*6))+1;
		outImgs += '<span id="rdice'+i+'" style="display: inline-block;width:110px; height:110px;"><img src="/img/dice'+tempid+'.png" width="110" height="110" alt="dice '+tempid+'"></span>';
	}
	document.getElementById("resultid").innerHTML = outImgs+'<div id="summulti" style="padding:10px 10px 0px 10px;"></div>';
}
preShow();
function doInput(diin){
	var frm = document.calform;
	if (diin<1){
		frm.lenrange.value = 1;
		frm.lennumber.value = 1;
	}else if (diin>100){
		frm.lenrange.value = 100;
		frm.lennumber.value = 100;
	}else{
		frm.lenrange.value = diin;
	}
	preShow(...

---

**爬取时间**: 2026-04-11T07:26:24.254Z
