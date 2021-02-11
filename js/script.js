$(document).ready(() => {
    $('.header_burger').click(function(){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
        });
});
    $('.slider').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidestoShow: 1,
        slidestoScroll: 3,
        waitforanimate: false,
        speed: 300,
        infinite: true,
        autoplay: true,
        autoplayspeed: 1000,
        pauseonfocus: true,
        pauseonover: false,
        pauseondotshover: true,
        centerMode: false,
        variableWidht: false,
        touchthreshold: 25,
    });
$(document).on('click', function(divclose)
{
    if($(divclose.target).closest(".header_burger.active").length == 0 ){
        $('.header_burger.active, .header_menu.active').toggleClass('active');
        $('body').toggleClass('lock');
    }
});
