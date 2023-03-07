$(document).ready(function(){
    $('#btn').click(function(){
        $('#div').animate({left : '+=400px', width : "+=200px",fontSize : "+=20px"},1000);
        $('#div').animate({top : '+=200px', width : "-=200px",fontSize : "-=20px"});       
        $('#div').animate({left : '+=200px', width : "+=200px",fontSize : "+=20px"});
        $('#div').animate({top : '+=200px', width : "-=200px",fontSize : "-=20px"});
        $('#div').animate({left : '+=200px', width : "+=200px",fontSize : "+=20px"});
        $('#div').animate({top : '+=200px', width : "-=200px",fontSize : "-=20px"});
        $('#div').slideUp(1000).slideDown(1000);

    });

    $('#stop').click(function(){
        $('#div').stop();
    });


    $('#stopAll').click(function(){
        $('#div').stop(true);
    });

    $('#stopAll2').click(function(){
        $('#div').stop(true,true);
    });

    $('#chain').click(function(){
        $('#div2').css('background','pink').slideUp(1000).slideDown(1000);
    });
});