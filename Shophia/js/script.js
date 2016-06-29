$(function() {
    $('.carousel').carousel({
        interval: 1000
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 1200) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }

    });

    $('.scrollButton').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');

    });
});
