$(window).scroll(function(){
    $(".opacity").css("opacity", 1 - $(window).scrollTop() / 300);
});