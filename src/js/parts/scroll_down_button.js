$(document).ready(function() {

  //Scroll down button main screen 
  $(function() {
    $('.main-screen__scroll-down').click(function() {
      $('html, body').animate({ scrollTop: $('section.about').offset().top }, 1000);
      return false;
    });
  });

})