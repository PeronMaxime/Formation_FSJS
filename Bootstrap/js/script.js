$(function(){
    $(".progress-bar").each(function(){
        
        $(this).animate({width:$(this).attr("aria-valuenow")+"%"},5000, );
        
    });

    $(window).scroll(function(){
        console.log($(window).scrollTop());
    });
});