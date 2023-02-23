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

// 책정보

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고양이1"},
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $(".author > a").prepend(msg.documents[2].authors);
        $(".translators > a").prepend(msg.documents[2].translators);
        $(".publisher > a").prepend(msg.documents[2].publisher);
    });

        var search;
    
        search = ["고양이", "반려견"];
    
        for (i = 0; i < search.length; i++) {
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: search[i] },
                async: false,
                headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
            })
                .done(function (msg) {

                    var divs = document.getElementsByClassName('box' + i);
    
                    for (var j = 0; j < divs.length; j++) {
                        var ran=Math.floor(Math.random()*100);
                        $('.box' + i).eq(j).find(".img").append("<img src='" + msg.documents[j].thumbnail + "'/>");
                        $('.box' + i).eq(j).find(".title").append(msg.documents[j].title);
                        $('.box' + i).eq(j).find("strong").append(msg.documents[j].price+"원");
                        $('.box' + i).eq(j).find(".txt_discount").append(ran+"%");
                        $('.box' + i).eq(j).find(".txt_point").append("0%");
                    }
                });
        };

        $(function(){
            $("#Together > div.tab > div > a").click(function(){
                $(this).addClass("on").siblings().removeClass("on");
            });
        });

        $(function(){
            $("#Together > div.tab > div > a:nth-child(1)").click(function(){
                $("#Together > div.tab_slide > div:nth-child(1)").show();
                $("#Together > div.tab_slide > div:nth-child(2)").hide();
            });
        });

        $(function(){
            $("#Together > div.tab > div > a:nth-child(2)").click(function(){
                $("#Together > div.tab_slide > div:nth-child(2)").show();
                $("#Together > div.tab_slide > div:nth-child(1)").hide();
            });
        });
        // 슬라이드 
        $(function(){
            $(".bx-next").click(function(){
                $("#Together > div.tab_slide > div:nth-child(1) > div.product_book_list > div > div.bx_viewport > ul").stop().animate({marginLeft:-172},400,function(){
                    $("#Together > div.tab_slide > div:nth-child(1) > div.product_book_list > div > div.bx_viewport > ul > li:first-child").appendTo("#Together > div.tab_slide > div:nth-child(1) > div.product_book_list > div > div.bx_viewport > ul");
                    $('#Together > div.tab_slide > div:nth-child(1) > div.product_book_list > div > div.bx_viewport > ul').css({ marginLeft: 0 });
                });
            });
            $(".bx-prev").click(function(){
                $("#Together > div.tab_slide > div:nth-child(1) > div.product_book_list > div > div.bx_viewport > ul > li:last-child").prependTo("#Together > div.tab_slide > div:nth-child(1) > div.product_book_list > div > div.bx_viewport > ul");
                $('#Together > div.tab_slide > div:nth-child(1) > div.product_book_list > div > div.bx_viewport > ul').css({ marginLeft:-172});
                $('#Together > div.tab_slide > div:nth-child(1) > div.product_book_list > div > div.bx_viewport > ul').stop().animate({ marginLeft: 0 }, 400);
            });
        });

        $(function(){
            
            $(".bx-next").click(function(){
                $("#Together > div.tab_slide > div:nth-child(2) > div.product_book_list > div > div.bx_viewport > ul").stop().animate({marginLeft:-172},400,function(){
                    $("#Together > div.tab_slide > div:nth-child(2) > div.product_book_list > div > div.bx_viewport > ul > li:first-child").appendTo("#Together > div.tab_slide > div:nth-child(2) > div.product_book_list > div > div.bx_viewport > ul");
                    $('#Together > div.tab_slide > div:nth-child(2) > div.product_book_list > div > div.bx_viewport > ul').css({ marginLeft: 0 });
                });
            });
            $(".bx-prev").click(function(){
                $("#Together > div.tab_slide > div:nth-child(2) > div.product_book_list > div > div.bx_viewport > ul > li:last-child").prependTo("#Together > div.tab_slide > div:nth-child(2) > div.product_book_list > div > div.bx_viewport > ul");
                $('#Together > div.tab_slide > div:nth-child(2) > div.product_book_list > div > div.bx_viewport > ul').css({ marginLeft:-172});
                $('#Together > div.tab_slide > div:nth-child(2) > div.product_book_list > div > div.bx_viewport > ul').stop().animate({ marginLeft: 0 }, 400);
            });
        
        });