$(document).ready(function(){

    // multiple style 
    $('#btn').click(function(){
        $('#parent p').css({"background":"black",
                            "color":"yellow",
                            "border":"2px solid black"});
    });

    // on method 
    $('#parent').on({
        "click":function(){
            $(this).addClass("ps-5")
        },
        "mouseover":function(){
            $(this).addClass("bg-warning")
        },
        "mouseout":function(){
            $(this).addClass("text-primary")
        }
    });

    // off method 
    $('#off-btn').click(function(){
        $('#parent').off("mouseover mouseout click");
    });

});