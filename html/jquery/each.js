$(document).ready(function(){
    $('#btn').click(function(){
        $('li').each(function(){
            console.log($(this).text());
        });
    });
});