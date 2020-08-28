(function ($) {

    function unslick() {
        $('.fullscreen-gallery, .kids-fullscreen-gallery, .women-hair-fullscreen-gallery, .makeup-fullscreen-gallery,.nails-works-fullscreen-gallery,.man-hair-fullscreen-gallery').fadeOut(function () {
            $('.slick-initialized').slick('unslick')
        });
    }

    $(document).on('ready', function () {
        $(".main-background").slick({
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            speed: 1200,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            arrows: false,
            draggable: true,
            pauseOnHover: false
        });
    });
    //topbar swap vs navigation-bar function.
    if ($(window).width() < 600) {
        var b1 = document.getElementById("b1");
        var b2 = document.getElementById("b2");
        b1.parentNode.insertBefore(b2, b1);
    }

    $('.gallery-button').click(function () {
        var target = $(this).attr('data-target');
        if (target == '') {
            return;
        }
        var $target = $('#' + target);
        var $mainScreen = $target.find('.main-screen');
        var $slickGallery = $target.find('.thomb-cont');

        $slickGallery.html($mainScreen.children().clone());
        $mainScreen.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: $slickGallery,
            prevArrow: '.prev-arrow',
            nextArrow: '.next-arrow',
            responsive: [{
                breakpoint: 600,
                settings: {
                    arrows: false
                }
            }]
        });
        $slickGallery.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: $mainScreen,
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }]
        });
        $target.fadeIn();
        console.log($mainScreen);
    });

    $('.close').click(unslick);
    //navigation-mobile
    $('.nav-bar-mobile').click(function () {
        $('.navigation-mobile').fadeIn();
    });

    $('.nav-close,.nav-bar-button').click(function () {
        $('.navigation-mobile').fadeOut();
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('.navigation-mobile').fadeOut();
            unslick();
        }
    });



})(jQuery);
