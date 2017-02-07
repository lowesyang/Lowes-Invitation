class LowesInvite{
    /* options{
    *   color: 签名颜色 默认为#333333
    *   x: 签名x坐标
    *   y: 签名y坐标
    *   fontSize:  签名字号
    *   fontFamily: 签名字体
    *   bold: true or false 签名是否加粗
    * }*/
    constructor(options={}){
        this.root=document.querySelector(".lowesInvite");
        this.createDom(this.root.getAttribute("data-img"),this.root);

        this.canvas=document.querySelector(".lowesInvite>canvas");
        this.context=this.canvas.getContext("2d");
        this.image=document.querySelector(".lowesInvite>img");

        //必须等待图片下载完后再进行canvas渲染
        this.image.onload=()=>{

            //动态设置canvas的宽高
            this.canvas.setAttribute("width",''+this.image.offsetWidth);
            this.canvas.setAttribute("height",''+this.image.offsetHeight);

            //保存原始图片源
            this.originalData=this.image.src;

            //保存画布宽高
            this.width=this.image.offsetWidth;
            this.height=this.image.offsetHeight;

            //设置签名属性
            this.context.font=options.fontSize+"px "+options.fontFamily;
            if(options.bold) this.context.font="bold "+this.context.font;
            this.context.textAlign="left";
            this.context.baseline="middle";

            this.setNamePos(options.x,options.y);
            this.setNameColor(options.color);

            //初始化
            this.init();
        };
    }

    //创建DOM元素
    createDom(src,root){
        let img=document.createElement("img");
        let canvas=document.createElement("canvas");
        img.src=src;
        canvas.style.opacity=0;
        canvas.style.position="absolute";
        canvas.style.zIndex=-999;
        canvas.style.left=0;
        canvas.style.top=0;
        root.appendChild(img);
        root.appendChild(canvas);
    }

    //重绘原始图像,cb为redraw后的回调函数
    redraw(cb){
        this.image.onload=()=>{
            this.context.drawImage(this.image,0,0,this.width,this.height);
            cb();
            this.image.onload=null; //防止图片重复onload
        };
        this.image.src=this.originalData;
    }

    //初始化函数
    init(){
        this.redraw(()=>{
            this.name=null;
            this.context.fillText('您的名字',this.signX,this.signY);
            this.image.src=this.canvas.toDataURL("image/png");
        });
    }

    //设置签名起始位置
    setNamePos(x=0,y=0){
        this.signX=x;
        this.signY=y;
    }

    //设置签名颜色
    setNameColor(color="#333333"){
        this.context.fillStyle=color;
    }

    //添加被邀者姓名
    drawName(name){
        this.redraw(()=>{
            this.name=name;
            this.context.fillText(name,this.signX,this.signY);
            this.image.src=this.canvas.toDataURL("image/png");
        });
    }

    //下载图片
    exportImg(){
        // let imageData=this.context.getImageData(0,0,this.width,this.height);
        // let data=imageData.data;
        if(!this.name){
            return alert('请输入您的姓名后再下载!');
        }
        let alink=document.createElement("a");
        alink.download="invitation";
        alink.href=this.image.src;
        let evt=document.createEvent('MouseEvents');
        evt.initEvent('click',true,true);
        alink.dispatchEvent(evt);
    }
}

export default LowesInvite;