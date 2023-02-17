

document.getElementById("b").addEventListener("click",replace);

function replace(){
var target = document.getElementById("child");

var newEle = document.createElement("h1");
var newTxt = document.createTextNode("wow, this is replaced and removed");
newEle.appendChild(newTxt);

target.replaceChild(newEle,target.children[4]);

target.removeChild(target.children[3])
// document.getElementById("child").replaceChild(document.createElement("h1").appendChild(document.createTextNode("wow")),document.getElementById("child").children[2]);
}