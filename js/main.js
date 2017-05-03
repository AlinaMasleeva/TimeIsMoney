$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      nav: true, // кнопки next и prev 
      navText: [""],
      dots: false,

      paginationSpeed : 400,
 
      items : 1, 
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
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

  $('#contactForm').validate({
    rules: {
      contactName: {
        required: true,
        minlength: 2
      },
      contactEmail: {
        required: true,
        email: true
      }
    },
    submitHandler: function(form) {
      // form.submit();
    },
    success: "valid",
    submitHandler: function() { alert("Submitted!") }
  });

  jQuery.extend(jQuery.validator.messages, {
    email: " ",
    minlength: jQuery.validator.format(" "),
    required: " ",
  });

});