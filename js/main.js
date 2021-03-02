$(function() {
  //slick slider init
  $('.js-topslider').slick({
    speed: 600,
    dots: true,
    arrows: false
  });

  $('[data-fancybox]').fancybox({
    buttons: [
      "zoom",
      "close"
    ],
  });
  //menu toggle
  $('.js-menu-toggle').on('click', function() {
    $(this).toggleClass('is-active');
    $('.header__menu').toggleClass('is-open');
  });
  });



