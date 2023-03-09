$(document).ready(function () {

    $('#prevent').click(function(event){
        event.preventDefault();
        alert("event :" + event.isDefaultPrevented());
    });



    $('#base').click(function(){       
        alert("div");
    });
    $('#p1').click(function(){       
        alert("p1");
    });
    $('#p2').click(function(event){   
        event.stopPropagation();    
        alert("p2 : " + event.isPropagationStopped());
    });
    $('#p3').click(function(){       
        alert("p3");
    });

    
});