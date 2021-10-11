var b = 0
$(".checkbox_show").click(function(){
    if(b==0){
        $("._hidden").css("display","flex")
        b=1;
    }else{
        $("._hidden").css("display","none")
        b=0
    }
    
})