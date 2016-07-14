$(document).ready(function() {

    $("#search button").click(function() {
        $("#search input").animate({ width: 'toggle' }, 400);
    });


    /*--------------Owl Carousel-------------------*/

    $("#owl-demo").owlCarousel({

        autoPlay: 5000, //Set AutoPlay to 3 seconds

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    //////////////////////////////////////////////////
    /*-----------------------------------------------*/


    /*--------------Scroll Button-------------------*/
    $(document).scroll(1200, function() {
        if ($(this).scrollTop() > 300) {
            $('#scrollButton').fadeIn();
        } else {
            $('#scrollButton').fadeOut();
        }
    });

    $('#scrollButton').click(function() {
        $('html, body').animate({
                scrollTop: 0,
            },
            1500, 'easeOutQuart');
        return false;
    });
});
$('.getStarted').click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 800);
});

$("a").click(function() {
    var navLink = $(this).text();
    $('html, body').animate({
        scrollTop: $("#" + navLink).offset().top
    }, 1500, 'easeOutQuart');
    return false;
});
