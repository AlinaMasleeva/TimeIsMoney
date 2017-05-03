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


// Validate Form

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
       form.submit();
    },
    success: "valid",
    submitHandler: function() { alert("Submitted!") }
  });

  jQuery.extend(jQuery.validator.messages, {
    email: " ",
    minlength: jQuery.validator.format(" "),
    required: " ",
  });


// Scroll menu
  $("#menu").on("click", "a", function (event) {

        var id = $(this).attr('href');
        var idPart = "#" + id.split("#")[1];
        var element = $(idPart);
        if (element != undefined && element.length > 0) {
            $('body,html').animate({
                scrollTop: $(idPart).offset().top
            }, 1000);
        }
        else {
            alert("Element with id='" + idPart + "' not found. Fix the error to make button working");
        }
        event.preventDefault();
        
        var $this = $(this);
        $this.closest('ul').find('.active').removeClass('active');
        $this.parent().addClass('active');

        return false;
    });

});