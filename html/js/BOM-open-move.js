var wind;

function openfunc(){
    // wind = window.open("https://google.com","_blank","height=300px, width=300px, left=100px, top=150px");
    wind = window.open("","","width=150px,height=150px");
    // wind.document.write("<h1>Neel</h1>");
    console.log(wind);
}
function clos(){
    wind.close();
}

function movetofun(){
    wind.moveTo(200,200);
    
}

function movebyfun(){
    wind.moveBy(200,200);
   
}

function resizetofun(){
    wind.resizeTo(400,400);
  
}

function resizebyfun(){
    wind.resizeBy(400,400);
  
}
