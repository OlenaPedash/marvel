// Active tracking menu
$(document).ready(function() {
  $(document).on('scroll', onScroll);
});

function onScroll(event) {
  let scrollPos = $(document).scrollTop();
  let header = $(".header");
  let headerHeight = header.outerHeight();
  $('.nav__item-name').each(function() {
    let currLink = $(this);
    let refElement = $(currLink.attr('href'));
    if (refElement.position().top - headerHeight <= scrollPos && refElement.position().top - headerHeight + refElement.height() > scrollPos) {
      $('.nav__item-name').removeClass('nav__item-name--active');
      currLink.addClass('nav__item-name--active');
    } else {
      currLink.removeClass('nav__item-name--active');
    }
  });
}