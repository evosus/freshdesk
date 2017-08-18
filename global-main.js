jQuery_2_1_1 ( document ).ready(function($) {
	// replace search text
  $('#support-search-input').attr("placeholder", "Search all products...");
	
  // login page button fix 
  $('#forgot_password').click(function() {
		$('#login-form-new').addClass("hide");
		$('#forgot-form-new').removeClass("hide");
	});
	
  $('.forgot-form-submit .control-group [type="button"]').click(function() {
		$('#login-form-new').removeClass("hide");
		$('#forgot-form-new').addClass("hide");
	});

  //SIDE MENU
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
   //COMPONENT INIT
   $('.parallax').parallax();
   $('.carousel').carousel();
   $('.carousel.carousel-slider').carousel({fullWidth: true});
});
