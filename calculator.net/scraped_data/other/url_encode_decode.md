# URL Encode Decode

## 基本信息
- **URL**: /url-encode-decode.html
- **文件名**: url_encode_decode
- **分类**: other

## 页面标题
URL Encode / Decode

## 描述
This free online tool can encode or decode data to and from a URL-compatible format.

## 页面结构
### H1 标题
- URL Encode / Decode

### H2 标题
无

## 输入字段

### calcSearchTerm
- **类型**: text
- **名称**: calcSearchTerm
- **占位符**: 无
- **必填**: 否





## 按钮

### 未命名按钮
- **类型**: submit
- **点击事件**: return ucEncode();


### 未命名按钮
- **类型**: submit
- **点击事件**: return ucDecode();


### 未命名按钮
- **类型**: button
- **点击事件**: clearForm(document.calcform);


## 计算公式
未找到公式说明

## 页面内容摘要
home / other / url encode / decode		URL Encode / Decode

Use the tool below to encode or decode data to and from a URL-compatible format. To ensure data safety, the encoding and decoding are performed within the browser without being sent across the internet.



	
		Text to encode or decode:
			
		
	
	
		
		
		
	
	
		
			
		
	




function ucEncode(){
	let uceInTxt = document.calcform.toprocess.value + "";
	let uceOutputdesc = document.getElementById("coutputdesc");
	try {
		if (uceInTxt.length < 1){
			uceOutputdesc.innerHTML = '<font color="red">Please enter text to encode.</font>';
		}else{
			uceOutputdesc.innerHTML = 'processing...';
			document.getElementById("coutputarea").style.display = "block";
			document.calcform.coutput.value = encodeURIComponent(uceInTxt.trim());
			uceOutputdesc.innerHTML = '<b>Encoded result:</b> <a href="#" onClick="return ucCopyOutput();"><img src="/img/copy.svg" width="16" height="20" alt="copy" align="absmiddle">copy</a>';
		}
	} catch (err) {
		uce...

---

**爬取时间**: 2026-04-11T07:29:26.938Z
