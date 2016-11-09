# Lowes-Invitation
An automatic invitation producer plugin

##Installation
Body:
```html
<div class="lowesInvite" data-img="..."></div>
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
javascript:
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
    invitation.exportImg(); //download the ready invitation
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

##API
- ```init()```  init invitation
- ```setNamePos(x,y)``` set the position of your name in the invitation
- ```setNameColor(color)```  set the color of your name
- ```drawName(name)```  draw your name in the invitation
- ```exportImg()``` download the final invitation

##Example
[Smartisan Inivitation](https://github.com/yyh1102/Lowes-Invitation/tree/master/example)
