$(document).ready(() => {
    $('.header_burger').click(function(){
        $('.header_burger, .header_menu').toggleClass('active');
        });
    /**$(".header_burger,. ").on("click", "a", function(event) {
        event.preventDefault();
        var anchorId  = $(this).attr("href");
        scrollingDistance = $(anchorId).offset().top - $(".header_burger").height();
        $("html,body").animate({scrollTop: scrollingDistance}, 1100);**/
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
        autoplayspeed: 740,
        pauseonfocus: true,
        pauseonover: true,
        pauseondotshover: true,
        centerMode: false,
        variableWidht: false,
    });
$(document).on('click', function(divclose)
{
    if($(divclose.target).closest(".header_burger.active").length == 0 )
    {
        $('.header_burger.active, .header_menu.active').toggleClass('active');
    }
});
