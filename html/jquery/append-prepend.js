$(document).ready(function(){


    $('#btn').click(function(){
        $('#parent').append('<b>append</b> <br>');
    });


    $('#btn2').click(function(){
        $('#parent').prepend('<b class="bg-warning ">prepend</b> <br>');
    });


    $('#btn3').click(function(){
        $('#parent').after('<b>after</b> <br>');
    });


    $('#btn4').click(function(){
        $('#parent').before('<b class="bg-warning ">before</b> <br>');
    });

    $('#btn5').click(function(){
        $('<b>appendTo</b> <br>').appendTo('#parent');
    });


    $('#btn6').click(function(){
        $('<b class="bg-success ">prependTo</b> <br>').prependTo('#parent');
    });


    $('#emt').click(function(){
        $('#parent').empty();
    });


    $('#rm').click(function(){
        $('#parent').remove();
    });


});