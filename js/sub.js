$(function(){
    $(".next").click(function(){
        $("#intro-slide").stop().animate({marginLeft:-165},400,function(){
            $("#intro-slide > li:first-child").appendTo("#intro-slide");
            $('#intro-slide').css({ marginLeft: 0 });
        });
    });
    $(".prev").click(function(){
        $("#intro-slide > li:last-child").prependTo("#intro-slide");
        $('#intro-slide').css({ marginLeft: -165 });
        $('#intro-slide').stop().animate({ marginLeft: 0 }, 400);
    });
});