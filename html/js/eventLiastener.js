
document.getElementById("parent").addEventListener("mouseenter",changecolor);
function changecolor(){
    document.getElementById("parent").style.backgroundColor="blue";
}

document.getElementById("parent").addEventListener("mouseout",function(){
    this.style.backgroundColor="yellow";        //use this instead of document.getElementById("parent")
});


document.getElementById("parent").addEventListener("click",function(){
    alert("this is (parent ): use of capture in eventlistener");
},true);
document.getElementById("child").addEventListener("click",function(){
    alert("this is (child) : use of capture in eventlistener");
},true);


// Remove event listener
document.getElementById("parent").addEventListener("contextmenu",function(){
    this.removeEventListener("mouseenter",changecolor)
});

