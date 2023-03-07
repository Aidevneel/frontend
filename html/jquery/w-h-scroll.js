$(document).ready(function(){

    // width
    $("#btn").click(function(){
       console.log("width : " + $('#base').width()) ;
       console.log("InnerWidth (with padding) : " + $('#base').innerWidth()) ;
       console.log("outerWidth (with border) : " + $('#base').outerWidth()) ;
       console.log("outerWidth(true) (with margin): " + $('#base').outerWidth(true)) ;        
    });

    // height
    $("#btn2").click(function(){
        
        console.log("height : " + $('#base').height()) ;
        console.log("InnerHeight (with padding) : " + $('#base').innerHeight()) ;
        console.log("outerHeight (with border) : " + $('#base').outerHeight()) ;
        console.log("outerHeight(true) (with margin) : " + $('#base').outerHeight(true)) ;  
    });
     $("#btn22").click(function(){
        $('#base').height("500px") ;      
     });

     

    // scroll 
    $(window).scroll(function(){
        $('#fix').html("Scrolling <br>");
        $('#fix').append('Top : ' + $(window).scrollTop());
        $('#fix').append('<br>Left : ' + $(window).scrollLeft());
    });

    $("#st").click(function(){
        $(window).scrollTop("100");
     });

     $("#sl").click(function(){
        $(window).scrollLeft("100");    
     });

});