$(document).ready(function(){

    // clone 
    $("#btn").click(function(){
        $('#parent p').clone().appendTo("#child");
        $('#parent h2').clone().prependTo("#child");
    });

    // replace 
    $("#btn2").click(function(){
        $('#test p:nth-child(2)').replaceWith("<b>Neel</b>");       
    });

    $("#btn3").click(function(){
        $('<b>Neel</b>').replaceAll("#test p");       
    });

    // wrap 
    $("#wrap").click(function(){
        $('#test p:first').wrap("<b class='display-1'></b>");       
    });

    $("#uw").click(function(){
        $('#test p:first').unwrap();       
    });

    $("#wa").click(function(){
        $('#test p').wrapAll("<div class='bg-success'></div>");       
    });

    $("#wi").click(function(){
        $('#test p:last').wrapInner("<b class='bg-warning'></b>");       
    });




});