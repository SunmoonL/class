$(window).scroll(function () {
    var ws = $(this).scrollTop();
    if (ws > 130) {
        $("#manybook h2").css("animation", "fadeIn 2s forwards");
        $("#manybook p").css("animation", "fadeIn 2s forwards");
    }
    if (ws > 980) {
        $("#audiodrama h2").css("animation", "fadeIn 2s forwards");
        $("#audiodrama p").css("animation", "fadeIn 2s forwards");
    }
    if (ws > 1683) {
        $("#unlimited > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#unlimited > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
    }
});

$(function () {
    $(".video-poster").click(function () {
        $(this).css("opacity", "0");
        $(".iframe-video").show();
        $(".youtube-player > iframe").attr("src", "https://www.youtube.com/embed/u1OVbU4EdwI?autoplay=1&mute=1");
    });
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "만일 내가 인생을 다시" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "412분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "세이노의 가르침" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(2) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(3) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[2].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="title">' + msg.documents[2].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="reading">' + "20%" + '<span class="line"> | ' + "</span>" + "479분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "트렌드코리아" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(4) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "622분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오늘 밤, 세계에서" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(5) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="reading">' + "74%" + '<span class="line"> | ' + "</span>" + "216분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점2" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(6) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="reading">' + "20%" + '<span class="line"> | ' + "</span>" + "548분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "역행자" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(7) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="reading">' + "68%" + '<span class="line"> | ' + "</span>" + "336분" + "</p>")
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "12가지 인생의 법칙" },
        headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
    })
        .done(function (msg) {
            $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(1) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[1].thumbnail + "'/>");
            $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
            $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
            $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="reading">' + "31%" + '<span class="line"> | ' + "</span>" + "390분" + "</p>")
        });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "달 드링크 서점" },
            headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
        })
            .done(function (msg) {
                $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
                $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
                $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="reading">' + "56%" + '<span class="line"> | ' + "</span>" + "199분" + "</p>")
            });

            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "한경무크" },
                headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
            })
                .done(function (msg) {
                    $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(3) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
                    $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
                    $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="reading">' + "48%" + '<span class="line"> | ' + "</span>" + "60분" + "</p>")
                });

                $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query: "복잡한 세상을 이기는" },
                    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
                })
                    .done(function (msg) {
                        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(4) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
                        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
                        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="reading">' + "40%" + '<span class="line"> | ' + "</span>" + "170분" + "</p>")
                    });