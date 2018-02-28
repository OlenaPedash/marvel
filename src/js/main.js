$(document).ready(function() {

  // Initialyze anymsition
  if ($(".animsition").length) {
    $(".animsition").animsition({
      inClass: 'fade-in-up-sm',
      outClass: 'fade-out-up-sm',
      inDuration: 1100,
      outDuration: 800,
      linkElement: '.animsition-link',
      loading: true,
      loadingParentElement: 'body',
      unSupportCss: ['animation-duration',
        '-webkit-animation-duration',
        '-o-animation-duration'
      ],
      overlay: false,
      overlayClass: 'animsition-overlay-slie',
      overlayParentElement: 'body'
    });
  }

  // WOW animate plugin
  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  })
  wow.init();

  // ExternalLinks for tag a
  function externalLinks() {
    links = document.getElementsByTagName("a");
    for (i = 0; i < links.length; i++) {
      link = links[i];
      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
        link.target = "_blank";
    }
  }
  window.onload = externalLinks;

  // HEADER SECTION

  // Slow scroll from menu-item to current section
  $(".nav__item-name").on("click", function(event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);

    // Close navigation menu after click
    $(".header__nav").removeClass("header__nav--open");
    $(".nav__btn").removeClass("nav__btn--animate");
  });

  // Set active element in color
  $('.nav__item-name').click(function(e) {
    e.preventDefault();
    $('.nav__item-name').removeClass('nav__item-name--active');
    $(this).addClass('nav__item-name--active');
  });

  // END HEADER SECTION

  // MAIN SCREEN SECTION

  // Slider main section
  $('#main-screen__slider').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    infinite: true,
    focusOnSelect: true,
  });

  //Scroll down button to section Contact from Main-screen
  $(function() {
    $('.main-screen__btn--contact').click(function() {
      $('html, body').animate({ scrollTop: $('section.contact').offset().top }, 1000);
      return false;
    });
  });
  // END MAIN SCREEN SECTION

  // ABOUT SECTION

  //Scroll down button to section features from about
  jQuery(window).trigger('resize').trigger('scroll');

  $('.parallax-window').parallax({
    imageSrc: './img/about-bg.png',
    naturalWidth: 1920,
    naturalHeight: 1414
  });

  $(function() {
    $('#about__btn-moreinfo').click(function() {
      $('html, body').animate({ scrollTop: $('section.features').offset().top }, 1000);
      return false;
    });
  });

  // Animated numbers for section About
  let numeratorFull = false;

  function numerator() {
    numeratorFull = true;
    $('.number1').numerator({
      easing: 'linear',
      duration: 2000,
      rounding: 0,
      toValue: 7573,
    });
    $('.number2').numerator({
      easing: 'linear',
      duration: 2400,
      rounding: 0,
      toValue: 4222,
    });
    $('.number3').numerator({
      easing: 'linear',
      duration: 2600,
      rounding: 0,
      toValue: 6980,
    });
    $('.number4').numerator({
      easing: 'linear',
      duration: 2800,
      rounding: 0,
      toValue: 100,
    });
  };

  function numeratorNull() {
    numeratorFull = false;
    $('.number1').numerator({
      easing: 'linear',
      duration: 0,
      rounding: 0,
      toValue: 0,
    });
    $('.number2').numerator({
      easing: 'linear',
      duration: 0,
      rounding: 0,
      toValue: 0,
    });
    $('.number3').numerator({
      easing: 'linear',
      duration: 0,
      rounding: 0,
      toValue: 0,
    });
    $('.number4').numerator({
      easing: 'linear',
      duration: 0,
      rounding: 0,
      toValue: 0,
    });
  };

  window.onscroll = function() {
    let winHeight = $(window).height();
    let curPositionY = window.pageYOffset;
    let curPosition = curPositionY + winHeight;
    let corBlock = $('.about__numbers-list').offset();
    let numberList = $('.about__numbers-list');
    let numberListHeight = numberList.outerHeight();
    let numberListTop = corBlock.top;
    let numberListBottom = corBlock.top + numberListHeight;
    let distanceTop = curPosition - numberListTop;
    let distanceBottom = curPosition - numberListBottom;
    if (distanceBottom > 50 && numeratorFull == false) {
      numerator();
    }
    if (curPosition < numberListTop && numeratorFull == true) {
      numeratorNull();
    }
    if (curPositionY > numberListTop && numeratorFull == true) {
      numeratorNull();
    }
  };

  // END ABOUT SECTION

  // RESPONSIVE SECTION

  //Scroll down button to section Pricing from Responsive
  $(function() {
    $('#responsive__btnToPricing').click(function() {
      $('html, body').animate({ scrollTop: $('section.pricing').offset().top }, 1000);
      return false;
    });
  });
  // END RESPONSIVE SECTION

  // IMPRESSED SECTION

  //Scroll down button to section Pricing from Impressed
  $(function() {
    $('#impressed__btnToPricing').click(function() {
      $('html, body').animate({ scrollTop: $('section.pricing').offset().top }, 1000);
      return false;
    });
  });
  // END IMPRESSED SECTION

  // PORTFOLIO SECTION

  // Filterizr for section Portfolio
  $(function() {
    $('.portfolio__nav li').click(function() {
      $('.portfolio__nav li').removeClass('active');
      $(this).addClass('active');
    });

    $('.portfolio__grid').filterizr();
  });

  // END PORTFOLIO SECTION

  // SERVICE SECTION

  // Tabs for section Service
  $('[data-tab-nav]').on('click', function() {
    let that = $(this),
      tabs = $('.service__tab-content > div');
    $('.service__tab-menu li').removeClass('active');
    $(that).addClass('active');
    $(tabs).removeClass('active');
    $('[' + $(that).attr("data-tab-nav") + ']').addClass('active');
  });
  // END SERVICE SECTION

  // EXPERT SECTION

  // Slick expert slider
  $('#expert__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#expert__slider-nav'

  });
  $('#expert__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#expert__slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="expert__slider-btn expert__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="expert__slider-btn expert__slider-btn--next"><span class="ion-chevron-right"></span></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        asNavFor: '#expert__slider-for',
        dots: true,
        focusOnSelect: true,
        centerMode: true,
        prevArrow: '<button type="button" class="expert__slider-btn expert__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="expert__slider-btn expert__slider-btn--next"><span class="ion-chevron-right"></span></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
      }
    }, ]
  });
  // END EXPERT SECTION

  // BlOG SECTION

  // Fancybox
  $(".fancybox").fancybox({
    afterLoad: function() {
      this.title = '<a href="' + this.href + '">Read more</a> ' + this.title;
    },
    helpers: {
      title: {
        type: 'inside'
      }
    }
  });

  // END BLOG SECTION

  // CONTACT SECTION

  // Inputs events
  $(".contact__input-field").focus(function() {
    $(this).parent(".contact__input").addClass("contact__input--filled");
  });
  $(".contact__input-field").blur(function() {
    if ($(this).val() === "") {
      $(this).parent(".contact__input").removeClass("contact__input--filled");
    }
  });

  //Textarea events
  $(".contact__textarea-field").focus(function() {
    $(this).parent(".contact__textarea").addClass("contact__textarea--filled");
  });
  $(".contact__textarea-field").blur(function() {
    if ($(this).val() === "") {
      $(this).parent(".contact__textarea").removeClass("contact__textarea--filled");
    }
  });

  // Contact form validate
  $("#contact__form").validate({
    rules: {
      form_name: {
        required: true,
        minlength: 2,
      },
      form_email: {
        required: true,
        email: true,
      },
      form_mobile: {
        required: true,
        digits: true,
      },
      form_subject: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      form_name: {
        required: "Name field is a required",
        minlength: "Name must consist of 2 or more letters",
      },
      form_email: {
        required: "E-mail field is a required",
        email: "Please enter a valid E-mail",
      },
      form_mobile: {
        required: "Mobile field is a required",
        digits: "Please enter only digits",
      },
      form_subject: {
        required: "Subject field is a required",
        minlength: "Subject should consist of 10 or more letters",
      },
    },
    focusCleanup: true,
    focusInvalid: false,
    errorClass: "contact__input-field--invalid",
  });

  // Checkbox for contact submit
  function checkBox() {
    if ($('#contact__agree').prop('checked')) {
      $('#contact__btn').removeClass('contact__btn--disabled');
    } else {
      $('#contact__btn').addClass('contact__btn--disabled');
    }
  };

  checkBox();

  $('#contact__agree').on('click', function() {
    checkBox();
  });

  //E-mail Ajax Send
  $("#contact__form").submit(function() {
    const form = $(this);
    $.ajax({
      type: "POST",
      url: "http://...php/mail.php",
      data: form.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        form.trigger("reset");
      }, 1000);
    });
    return false;
  });

  // END CONTACT SECTION

  // LOCATE SECTION

  // Locate button
  $("#locate__btn").click(function() {
    $(".locate__map-wrapper").toggleClass("locate__map-wrapper--visible");
    $(".locate__icon-wrapper").toggleClass("locate__icon-wrapper--visible");
  });
  // END LOCATE SECTION

});