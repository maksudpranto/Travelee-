$(function () {


    // Date and Time Picker    
    $(window).on('load', function () {
        $("#booking-date").datepicker();
        $("#booking-time").timepicker("setTime", "12:00 PM");
    });
    new WOW().init();
    baguetteBox.run('.cards-gallery', {
        animation: 'slideIn'
    });


    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    }
  ]
    });


    $('.Package-slider5').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        dots: false,
        autoplaySpeed: 1000,



    });
    
    




    // venobox lightbox
    $('.venobox').venobox();


    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});
