$(document).ready(() => {
    $('.header_burger').click(function(){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');   
});
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidestoShow: 1,
        slidestoScroll: 1,
        speed: 470,
        infinite: true,
        autoplay: true,
        autoplayspeed: 1100,
        pauseonfocus: true,
        pauseonover: true,
        pauseondotshover: true,
        centerMode: false,
        variableWidht: false,
    });
});
/** 
$(document).mouseup(function (e) {
    var popup = $(".header_menu");
    if (!$('active').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
        popup.hide(500);
    }
});
*/
