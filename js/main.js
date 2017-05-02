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
});