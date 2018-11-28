$(function () {

    // feedback slider js

    $('.feed-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speeds: 100,
        asNavFor: '.feed-main2',
    });

    $('.feed-main2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feed-main',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
    });

});