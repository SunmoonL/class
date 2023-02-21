//인트로 슬라이드
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

//사이트맵

$(function(){
    $("#site > img").click(function(){
        $("#site_map").toggle();
    });
    $("#site_map > a").click(function(){
        $("#site_map").hide();
    });
});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고양이1" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $(".author > a").prepend(msg.documents[2].authors);
        $(".translators > a").prepend(msg.documents[2].translators);
        $(".publisher > a").prepend(msg.documents[2].publisher);
        $(".datetime").append(msg.documents[2].datetime);
    });