$(document).ready(function() {

    //Fixed sticky menu
    let menu = $(".header");
    let fixed_menu = "header--fixed";

    let menuPos = menu.offset().top;

    $(window).scroll(function() {
        if ($(this).scrollTop() > menuPos) {
            menu.addClass(fixed_menu);
        } else {
            menu.removeClass(fixed_menu);
        }
    });
});