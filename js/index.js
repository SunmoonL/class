$(window).scroll(function () {
    var ws = $(this).scrollTop();
    if($("#intro > div > div > h1").offset().top -600 < ws){
        $("#intro h1").css("animation", "fadeIn 1.8s forwards");
        $("#intro p").css("animation", "fadeIn 1.2s .6s forwards");
    }

    if ($("#manybook > div > div.text-wrap > h2").offset().top < ws+800) {
        $("#manybook h2").css("animation", "fadeIn 2s forwards");
        $("#manybook p").css("animation", "fadeIn 2s forwards");
    }
    if ($("#audiodrama > div > div.text-wrap > h2").offset().top < ws+800) {
        $("#audiodrama h2").css("animation", "fadeIn 2s forwards");
        $("#audiodrama p").css("animation", "fadeIn 2s forwards");
        $("#manybook h2").css("animation", "fadeOut .1s forwards");
        $("#manybook p").css("animation", "fadeOut .1s forwards");
        $("#intro h1").css("animation", "fadeOut .1s forwards");
        $("#intro p").css("animation", "fadeOut .1s forwards");
    }
    if ($("#unlimited > div > div.text-wrap > h2").offset().top < ws+800) {
        $("#unlimited > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#unlimited > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        $("#audiodrama h2").css("animation", "fadeOut .1s forwards");
        $("#audiodrama p").css("animation", "fadeOut .1s forwards");
    }
    if ($("#bestseller > div > div.text-wrap > h2").offset().top < ws+800) {
        $("#bestseller > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#bestseller > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        $("#unlimited > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#unlimited > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
    }
    if ($("#reading > div > div.text-wrap > h2").offset().top < ws+800) {
        $("#reading > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#reading > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        $(".card01").css("animation","card .5s ease-in-out forwards");
        $(".card02").css("animation","card .7s ease-in-out forwards");
        $(".card03").css("animation","card 1s ease-in-out forwards");
        $(".card04").css("animation","card 1.1s ease-in-out forwards");
        $("#bestseller > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#bestseller > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
    }
    if ($("#price > div > div.text-wrap > h2").offset().top < ws+800) {
        $("#price > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#price > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        
    }
    if ($("#content > div > div > div.text-wrap > h2").offset().top < ws+800) {
        $("#content > div > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#content > div > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        $(".phone-wrap").css("animation", "fadeIn 1.5s forwards");
        $("#price > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#price > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
        $("#reading > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#reading > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
        $(".card01").css("animation","fadeOut .1s ease-in-out forwards");
        $(".card02").css("animation","fadeOut .1s ease-in-out forwards");
        $(".card03").css("animation","fadeOut .1s ease-in-out forwards");
        $(".card04").css("animation","fadeOut .1s ease-in-out forwards");
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

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "당신이 지나간 자리" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(5) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="reading">' + "78%" + '<span class="line"> | ' + "</span>" + "32분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "부자의 인문학" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(6) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[1].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="author">' + msg.documents[1].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="reading">' + "44%" + '<span class="line"> | ' + "</span>" + "149분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "어른이 되기 전에 꼭 한번은" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(7) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="reading">' + "35%" + '<span class="line"> | ' + "</span>" + "123분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "매일 하면 좋은 생각" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(1) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[1].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="reading">' + "51%" + '<span class="line"> | ' + "</span>" + "41분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "만일 내가 인생을 다시 산다면" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(2) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "412분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(3) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[2].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="title">' + msg.documents[2].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="author">' + msg.documents[2].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="reading">' + "20%" + '<span class="line"> | ' + "</span>" + "479분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "트렌드코리아" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(4) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "622분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "잘될 수밖에 없는 너에게" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(5) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="reading">' + "62%" + '<span class="line"> | ' + "</span>" + "23분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "어른공부" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(6) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="reading">' + "16%" + '<span class="line"> | ' + "</span>" + "296분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "물고기는 존재하지 않는다" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(7) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "476분" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "연분" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(1) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "지구에서 한아뿐" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(2) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "낙원의 오후" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(3) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "당신의 이해를 돕기 위하여" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(4) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "뜨거운 홍차" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(5) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "곳비 꽃비" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(6) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "달의 아이" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(7) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[1].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="author">' + msg.documents[1].authors + "</p>");
    });

$(document).ready(function () {
    var search;

    search = ["주식", "영어회화", "고전", "손뜨개", "운동"];

    for (i = 0; i < search.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i] },
            async: false,
            headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
        })
            .done(function (msg) {

                console.log(msg);

                var divs = document.getElementsByClassName('box' + i);

                for (var j = 0; j < divs.length; j++) {
                    $('.box' + i).eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");
                    $("#bestseller > div > div.bestSellerList-wrap > div.bestSeller-list > div > div > ul").eq(i).find("li").eq(j).find(".metadata").append('<p class="title">' + msg.documents[j].title + "</p>");
                    $("#bestseller > div > div.bestSellerList-wrap > div.bestSeller-list > div > div > ul").eq(i).find("li").eq(j).find(".metadata").append('<p class="author">' + msg.documents[j].authors + "</p>");
                }
            });
    };
});

$(document).ready(function(){
$(function(){
    $(".slide-item button").click(function(){
        var i=$(this).parent().index();
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
        $(".slide-wrapper").eq(i+5).css("display","inline-flex").show().siblings().hide();
    });
});
});

$(document).ready(function(){
var swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' +"<button>"+ (index + 1)+"</button>" + "</span>";
      },
    },
    on: {
        slideChange: function () {
            var has = $(".swiper-pagination-bullet-active").index();
          //   console.log(has);

            $(".slide-data > p").eq(has).show();
            $(".slide-data > p").eq(has).siblings("p").hide();
        },
    }
  });
});

$(document).ready(function(){
    var swiper1 = new Swiper(".swiper-container1", {
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' +"<button>"+ (index + 1)+"</button>" + "</span>";
          },
        },
        on: {
            slideChange: function () {
                var has1 = $(".swiper-pagination1 .swiper-pagination-bullet-active").index();
              //   console.log(has);
    
                $(".slide-data1 > p").eq(has).show();
                $(".slide-data1 > p").eq(has).siblings("p").hide();
            },
        }
      });
    });