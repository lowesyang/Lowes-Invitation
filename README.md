# Lowes-Invitation
An automatic invitation producer plugin

##Installation
Import css:
```html
<link rel="stylesheet" href="LowesInvite.css" />
```
Import js:
```javascript
<script src="LowesInvite.min.js"></script>
```
or
```javascript
import LowesInvite from "LowesInvite.es6.js"
```

##Usage
```javascript
import LowesInvite from "LowesInvite.es6.js"

//Please create invitation after window loaded.
window.onload=()=>{   
  let name="LowesYang"
  const options={
    color:"#ffffff",
    x:40,
    y:400,
    fontSize:24,
    fontFamily:"Microsoft Yahei",
    bold:true
  }
  
  const invitation=new LowesInvite(options);
  
  submitBtn.onclick=()=>{
    invitation.drawName(name);  //Add your name to the invitation
  }
  resetBtn.onclick=()=>{
    invitation.init();  //init invitation
  }
  downloadBtn.onclick=()=>{
    invitation.exportImt(); //download the ready invitation
  }
}
```
##Options
- ```color``` hex string  
Set color of your name.
- ```x```  number  
Set X-coordinate of your name.
- ```y```  number  
Set Y-coordinate of your name.
- ```fontSize```  number  
Set font-size of your name.
- ```fontFamily```  string  
Set font-family of your name.
- ```bold``` bool  
Set bold or not of your name.  

##Example
[Smartisan Inivitation](http://www.baidu.com)
