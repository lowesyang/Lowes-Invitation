import LowesInvite from "../build/LowesInvite.es6";
window.onload=()=> {
    const input = document.querySelector(".editForm>input");
    const submitBtn = document.querySelector(".editForm>.submitBtn");
    const resetBtn = document.querySelector(".editForm>.resetBtn");
    const download = document.querySelector(".editForm>.download");
    const options={
        color:"#ffffff",
        x:40,
        y:400,
        fontSize:24,
        fontFamily:"Microsoft Yahei"
    }
    const drawing = new LowesInvite(options);

    submitBtn.addEventListener("click", (e)=> {
        e.preventDefault();
        let name = input.value;
        drawing.drawName(name);
    });

    resetBtn.addEventListener("click",()=>{
        input.value="";
        drawing.init();
    });

    download.addEventListener("click",()=>{
        drawing.exportImg();
    });
}
