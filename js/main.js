$(document).ready(() => {
    $('.header_burger').click((event) => {
        $('header_link').click(function(){
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top+1100
            },{
            duration: 1000,
            });
        });
    });
});