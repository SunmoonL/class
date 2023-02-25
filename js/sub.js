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
    
        search = ["고양이", "반려동물"];
    
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

        //텍스트
        $(function () {
            $.get("./text/sub_1.txt", function (data) {
                $("#sub_1").html(data);
            });
        });

        $(function () {
            $.get("./text/sub_2.txt", function (data) {
                $("#sub_2").html(data);
            });
        });

        $(function () {
            $.get("./text/sub_3.txt", function (data) {
                $("#div_Author").html(data);
            });
        });

        $(function () {
            $.get("./text/sub_4.txt", function (data) {
                $("#sub_4").html(data);
            });
        });

        $(function () {
            $.get("./text/sub_5.txt", function (data) {
                $("#sub_5").html(data);
            });
        });

        $(function () {
            $.get("./text/sub_6.txt", function (data) {
                $("#div_Underline1_All").html(data);
            });
        });

        $(function () {
            $.get("./text/sub_7.txt", function (data) {
                $("#sub_7").html(data);
            });
        });

        $(function () {
            $.get("./text/sub_8.txt", function (data) {
                $("#sub_8").html(data);
            });
        });

        // 책수량
        var price_sum=11520;
        $(".total").append(price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원");
        
        $(function(){
            $(".btn_plus").click(function(){
                if($(".ordcnt").val()>99){
                    alert("100권 초과 구매가 불가능 합니다.");
                    $(".ordcnt").val(100);
                }else{
                    $(".ordcnt").val(parseInt($(".ordcnt").val())+1);
                    var sum=parseInt($(".ordcnt").val()*price_sum);
                    $(".total").html("<span>"+"합계"+"</span>"+sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원");
                }
            });

            $('.btn_minus').click(function () {
                if ($(".ordcnt").val() < 2) {
                alert("1권 이상 구매가 가능합니다.");
                $(".ordcnt").val(2);
                }
                $(".ordcnt").val(parseInt($(".ordcnt").val()) - 1);
                var sum = parseInt($(".ordcnt").val() * price_sum);
                $(".total").html("<span>"+"합계"+"</span>"+sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원");
                });
        });

        $(function () {

            $(".ordcnt").keyup(function () {
            if ($(".ordcnt").val() > 100) {
            alert("100권 초과 구매가 불가능합니다.");
            $(".ordcnt").val(100);
            } else if ($(".ordcnt").val() < 1) {
            alert("1권 이상 구매가 가능합니다.");
            $(".ordcnt").val(1);
            } else if (isNaN($(".ordcnt").val())) {
            alert("숫자를 입력하세요.") 
            $(".ordcnt").val(1);
            } else if (($(".ordcnt").val() * 10) % 10 != 0) {
            alert("정수를 입력하세요");
            $(".ordcnt").val(1);
            }
            var sum1 = parseInt($(".ordcnt").val() * price_sum );
            $(".total").html("<span>"+"합계"+"</span>"+sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원");
            });
            });

            $(function(){
                $(".addon_all_chk").click(function(){
                    if($(this).is(":checked")){
                        $(".checkbox").prop("checked",true);
                    }else{$(".checkbox").prop("checked",false)};
                    });
            });

            $(function(){
                $(".addon_all_chk1").click(function(){
                    if($(this).is(":checked")){
                        $(".checkbox1").prop("checked",true);
                    }else{$(".checkbox1").prop("checked",false)};
                    });
            });

        // 디테일
            $(function(){
                $(".wrap_more").click(function(){
                    $(this).toggleClass("on");
                    $(".detail_content").toggleClass("on");
                });

                $("#image_detail").click(function(){
                    $("#wide_image").css("display","block");
                });

                $(".pop_close").click(function(){
                    $("#wide_image").css("display","none");
                });

                $("#wide_img_url").click(function(){
                    $("#wide_image").css("display","none");
                });

                $(".btn_notice").mouseover(function(){
                    $(".pop_notice").css("opacity","1");
                });

                $(".btn_notice").mouseleave(function(){
                    $(".pop_notice").css("opacity","0");
                });
            });

        // 푸터
        $(function(){
            $(".about-button").click(function(){
                $(this).toggleClass("show");
                $(this).siblings(".question").toggle();
            });
        });

        $(window).scroll(function(){
            var ws = $(this).scrollTop();
            if($(".detail_content").offset().top < ws){
                $(".product_detail_quick").css({"position":"fixed","top":"70px"})
            }else{
                $(".product_detail_quick").css({"position":"absolute","top":"70px","right":"0px","left":"50%","margin-left":"276px"})
            }
        });

        $(function(){
            $("#product_detail_menu > div > a:nth-child(2)").click(function(){
                $("html,body").animate({scrollTop:$("#product_review").offset().top},400)
            });
        });