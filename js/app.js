var toggle=false;

document.body.querySelector(".menu_icon").addEventListener("click",function(){

    toggle=!toggle;

    if (toggle) {
        document.body.querySelector(".menu").style.right = "0";
        document.body.querySelector(".garbo").style.display = "flex";
    }else{
        document.body.querySelector(".menu").style.right = "-250px";
        document.body.querySelector(".garbo").style.display = "none";

    }
})

document.body.querySelector(".spoilers").addEventListener("click",function (){
        document.body.querySelector(".simon").style.display="none";
        document.body.querySelector(".contain_last").style.display="flex";
})
document.body.querySelector(".spoiler").addEventListener("click",function (){
        document.body.querySelector(".simon").style.display="flex";
        document.body.querySelector(".contain_last").style.display="none";
})