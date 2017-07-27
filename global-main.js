/* Fix forgot password form*/
jQuery_2_1_1( document ).ready(function() {
	jQuery_2_1_1('#support-search-input').attr("placeholder", "Search all products...");
	jQuery_2_1_1('#forgot_password').click(function() {
		jQuery_2_1_1('#login-form-new').addClass("hide");
		jQuery_2_1_1('#forgot-form-new').removeClass("hide");
	});
	jQuery_2_1_1('.forgot-form-submit .control-group [type="button"]').click(function() {
		console.log("test");
		jQuery_2_1_1('#login-form-new').removeClass("hide");
		jQuery_2_1_1('#forgot-form-new').addClass("hide");
	});
});