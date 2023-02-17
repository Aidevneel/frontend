var target = document.getElementById("child");


// insert Adjacent Element
var ele = document.createElement("h1");
var txt = document.createTextNode("this text by javascript Adjacent Element");
ele.appendChild(txt);
target.insertAdjacentElement("afterbegin",ele);


// insert Adjacent Text
var text = "this text by javascript Adjacent Text";
target.insertAdjacentText("beforebegin",text);


// insert Adjacent HTML
var html = "<h1 style='color:green;'>this text by javascript Adjacent HTML</h1>";
target.insertAdjacentHTML("beforeend",html);

