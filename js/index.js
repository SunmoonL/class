$(window).scroll(function(){
    var ws=$(this).scrollTop();
    if(ws>130){
        $("#manybook h2").css("animation","fadeIn 2s forwards");
        $("#manybook p").css("animation","fadeIn 2s forwards");
    } 
    if(ws>980){
        $("#audiodrama h2").css("animation","fadeIn 2s forwards");
        $("#audiodrama p").css("animation","fadeIn 2s forwards");
    }
    if(ws>1683){
        $("#unlimited h2").css("animation","fadeIn 2s forwards");
        $("#unlimited p").css("animation","fadeIn 2s forwards");
    }
});

$(function(){
    $(".video-poster").click(function(){
        $(this).css("opacity","0");
        $(".iframe-video").show();
        $(".youtube-player > iframe").attr("src","https://www.youtube.com/embed/u1OVbU4EdwI?autoplay=1&mute=1");
    });
});

$.ajax({
    method:"GET",
    url:"https://dapi.kakao.com/v3/search/book?target=title",
    data:{query:search[i]},
    async:false,
    headers:{Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
  })
