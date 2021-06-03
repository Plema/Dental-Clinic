$(document).ready(function(){

    // Result slider
    $('.result-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        dots: true 
    });

});