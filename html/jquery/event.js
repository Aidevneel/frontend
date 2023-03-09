$(document).ready(function () {

    $(document).mousemove(function (event) {
        $('#test2').text("mouse X : " + event.pageX + " mouse Y :" + event.pageY);
        var x = event.pageX;
        var y = event.pageY;
        // $('#test').offset({ top: y, left: x });
    });

    $('#lorem').on("click dblclick mouseover mouseout contextmenu mousedown",function(event){
        $('span').html("Event : " + event.type +"(" + event.which + ")");
        $('h2').html("<br> Event target : "+ event.target + "<br>Nodename: "+ event.target.nodeName);
    })

    $('#txt').on("keydown",function(event){
        $('h3').html(event.type +":" + event.which);
    })


    
});