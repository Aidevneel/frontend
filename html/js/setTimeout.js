var target = document.getElementById("column");

var x = 0;

var a = setTimeout(anim,5000);

    function anim()
    {   
        x = x + 3;    
        target.style.marginLeft = x + "px";
        target.style.borderColor = "white";
        target.style.borderRadius = 300 + "px";
        target.style.backgroundColor = "green";        
    }
        
function stop(){
    clearTimeout(a);
    target.style.backgroundColor = "black";
}