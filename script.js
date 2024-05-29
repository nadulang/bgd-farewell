$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('#main-header').addClass('active');
    } else {
        $('#main-header').removeClass('active');
    }
});