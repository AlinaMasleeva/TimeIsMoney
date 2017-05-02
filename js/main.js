$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      nav: true, // кнопки next и prev 
      navText: [""],
      dots: false,

      paginationSpeed : 400,
 
      items : 1, 
      loop:true,
      autoplay:true,
      autoplayTimeout:50000,
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
 
  });

  $('.btn-hover').mouseover (function() {
    $(this).parents('.block__plans__box').find('.block__plans__box--name').addClass('active');
  });

  $('.btn-hover').mouseleave (function() {
    $(this).parents('.block__plans__box').find('.block__plans__box--name').removeClass('active');
  });

});