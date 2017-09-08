jQuery_2_1_1 ( document ).ready(function($) {
	// replace search text
  $('#support-search-input').attr("placeholder", "How can we help you today?");
	
  // login page button fix 
  $('#forgot_password').click(function() {
		$('#login-form-new').addClass("hide");
		$('#forgot-form-new').removeClass("hide");
	});
	
  $('.forgot-form-submit .control-group [type="button"]').click(function() {
		$('#login-form-new').removeClass("hide");
		$('#forgot-form-new').addClass("hide");
	});

     // Fix reply to ticket on ticket detail
    $('#add-note-form-proxy').addClass('hide');
    $('#add-note-form').removeClass('hide');


  //SIDE MENU
  $(".button-collapse").sideNav();

   //COMPONENT INIT
   $('.parallax').parallax();
   $('.carousel').carousel();
   $('#main-carousel').carousel({fullWidth: true, indicators: true}); //

   //Main page carousel auto slide
    var carouselAutoSlide = setInterval(carouselNext, 7000); //carousel moves to next slide every 3 seconds

    function carouselNext() {
      $('#main-carousel').carousel('next');
    }

});
