$(document).ready(function() {

    //Back to top
    if ($('#button-up').length) {
        let scrollTrigger = 300, // px
            backToTop = function() {
                let scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#button-up').addClass('is-visible');
                } else {
                    $('#button-up').removeClass('is-visible');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#button-up').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
    }

});