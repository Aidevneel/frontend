var ele = document.createElement("h1");
console.log(ele);

var text = document.createTextNode("this is text by javascript");
console.log(text);

var comment = document.createComment("this comment from javascript");
console.log(comment);


ele.appendChild(text);  // merge text in ele
console.log(ele);

document.getElementById("child").appendChild(ele); //it always put element at last childern of element

