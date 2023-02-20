var wind;

function openfunc(){
    // wind = window.open("https://google.com","_blank","height=300px, width=300px, left=100px, top=150px");
    wind = window.open("","","");
    wind.document.write("<h1>Neel</h1>");
    console.log(wind);
}
function clos(){
    wind.close();
}

function movewin(){
    wind.moveto(200,200);
    wind.focus();
}
