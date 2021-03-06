$(document).ready(function(){

    // Menu
    $('.open-menu').on('click', function(){
        $('nav').toggle();
        $('.header').addClass('blackout');
    });
    $('.close-menu').on('click', function(){
        $('nav').toggle();
        $('.header').removeClass('blackout');
    })
    if($(window).width() < 1024){
        $('nav ul li a').on('click', function(){
            $('nav').toggle();
            $('.header').removeClass('blackout');
        })
    }
    

    // Result slider
    $('.result-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        dots: true 
    });

    // Doctors slider
    $('.doctors-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                }
            },
        ]
    });

    // Result slider
    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        dots: true 
    });

    // POPUPS

    // Decides
    $('.treatment').on('click', function(){
        $('.decides-popup-treatment').removeClass('hide');
        $('.decides-popup-treatment').addClass('show');
        $('.header').addClass('blackout');
        $('body').css({'overflow': 'hidden'});
    });
    $('.ortho').on('click', function(){
        $('.decides-popup-ortho').removeClass('hide');
        $('.decides-popup-ortho').addClass('show');
        $('.header').addClass('blackout');
        $('body').css({'overflow': 'hidden'});
    });
    $('.implantation').on('click', function(){
        $('.decides-popup-inplantation').removeClass('hide');
        $('.decides-popup-implantation').addClass('show');
        $('.header').addClass('blackout');
        $('body').css({'overflow': 'hidden'});
    });
    $('.hygiene').on('click', function(){
        $('.decides-popup-hygiene').removeClass('hide');
        $('.decides-popup-hygiene').addClass('show');
        $('.header').addClass('blackout');
        $('body').css({'overflow': 'hidden'});
    });
    $('.surgery').on('click', function(){
        $('.decides-popup-surgery').removeClass('hide');
        $('.decides-popup-surgery').addClass('show');
        $('.header').addClass('blackout');
        $('body').css({'overflow': 'hidden'});
    });
    $('.prosthetics').on('click', function(){
        $('.decides-popup-prosthetics').removeClass('hide');
        $('.decides-popup-prosthetics').addClass('show');
        $('.header').addClass('blackout');
        $('body').css({'overflow': 'hidden'});
    });
    $('.close-decides').on('click', function(){
        $('.decides-popup').removeClass('show');
        $('.decides-popup').addClass('hide');
        $('.header').removeClass('blackout');
        $('body').css({'overflow': 'visible'});
    });

    // Request
    $('.sign-up').on('click', function(){
        $('.request-popup').removeClass('hide');
        $('.request-poup').addClass('show');
        $('.header').addClass('blackout');
        $('body').css({'overflow': 'hidden'});
    });
    $('.close-request').on('click', function(){
        $('.request-popup').removeClass('show');
        $('.request-popup').addClass('hide');
        $('.header').removeClass('blackout');
        $('body').css({'overflow': 'visible'});
    });

    // Doctors

    $('.doctors-slider-item').on('click', function(){
        $('.doctor-popup').removeClass('hide');
        $('.doctor-poup').addClass('show');
        $('.header').addClass('blackout');
        $('body').css({'overflow': 'hidden'});
    });
    $('.close-doctor').on('click', function(){
        $('.doctor-popup').removeClass('show');
        $('.doctor-popup').addClass('hide');
        $('.header').removeClass('blackout');
        $('body').css({'overflow': 'visible'});
    });

});