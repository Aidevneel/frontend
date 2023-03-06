$(document).ready(function(){

    // form events 
    $('#text,#class,#select').focus(function(){
        $(this).css('background-color','green');
    });
    $('#text,#class,#select').blur(function(){
        $(this).css('background-color','');
    });
    $('#text,#class,#select').select(function(){
        $(this).css('background-color','yellow');
    });
    $('#select').change(function(){
        $(this).css('background-color','pink');
    });
    $('#sform').submit(function(){
        var a = $('#select').val();        
        alert(a);
    });

    
    // window events 
    $(window).scroll(function(){
        console.log("you are scrolling");
    });
    $('#of').scroll(function(){
        console.log("you are scrolling div");
    });
    $(window).resize(function(){
        console.log("you are resizing window");
    });


    // get methods 
    var a = $('#parent').text();
    console.log(a);
    var a = $('#parent').html();
    console.log(a);
    var a = $('#of').attr('style');
    console.log(a);

    // set methods
    $('#btn').click(function(){
        $('#parent2 h2').text("<b>Hello</b>");
        $('#parent2 p').html("<b>Hello</b>");
        $('#parent b').attr("class","bg-warning");
        $('#sform #text').val("Neel");
        $('#sform #class').val("Computer");
        $('#sform #select').val("china");
    });

    // class methods 
    $('#ac-btn').click(function(){
        $('#parent #of').addClass("text-primary");        
    });

    $('#rc-btn').click(function(){
        $('#parent #of').removeClass("text-primary");        
    });

    $('#tc-btn').click(function(){
        $('#parent #of').toggleClass("bg-warning");        
    });




});