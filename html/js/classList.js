
document.getElementById("child").addEventListener('click',function(){
    
    document.querySelector('#para').classList.remove("base");
    document.querySelector('#para').classList.add("base2");
});


var a = document.querySelector('#para').classList.contains("base3");
console.log(a);
