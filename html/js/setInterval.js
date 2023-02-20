var target = document.getElementById("column");

var x = 0;
var y = 0 ;

var a = setInterval(anim,20);

function anim(){   
    x = x + 3;
    y = y + 1;
    if(x == 300){
        clearInterval(a);
        target.style.backgroundColor = "black";          
    }else{
                
    target.style.marginLeft = x + "px";
    target.style.borderColor = "white";
    target.style.borderRadius = y + "px";
     }
}
        
target.style.borderColor = "BLACK";

function stop(){
    clearInterval(a);
    target.style.borderColor = "YELLOW";
}



