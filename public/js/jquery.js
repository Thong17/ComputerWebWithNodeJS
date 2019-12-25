$(document).ready(function() {
    $('#slider').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        dots:false,
        smartSpeed:1500,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#menu-slider').owlCarousel({
        loop:false,
        nav:false,
        autoplay:false,
        dots:false,
        autoplayTimeout:3000,
        items:5
    });
    $('.navbar-toggler').click(function(){
        $('#navbar').toggleClass('dark');
    });
});
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scrolling');
    } else {
        $('nav').removeClass('scrolling');
    }
})