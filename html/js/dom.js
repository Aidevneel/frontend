
var a = document.querySelectorAll("#test")[1];

console.log(a);

document.getElementById("test").setAttribute("onmouseenter", "abc()");

function absc() {
    document.getElementsByTagName("legend")[0].innerHTML = "<h1>Fill Information</h1>";
    document.getElementsByTagName("option")[1].innerText = "Great India";
    document.getElementById("test").setAttribute("style", "border:10px dotted red");
    document.getElementById("test").innerHTML = "<a>method name is correct via javascript</a>";
}