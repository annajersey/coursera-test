(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignUpService'];
function SignupController(SignUpService) {
  var signupCtrl = this;
  signupCtrl.invalid_short_name	= true;
  signupCtrl.submit = function () {
    signupCtrl.completed = true;
	SignUpService.getShortname(signupCtrl.user.short_name).then(function (response) {
		//console.log(response);
		if(!response) signupCtrl.invalid_short_name	= true;
		else {
			signupCtrl.invalid_short_name	= false;
			signupCtrl.user.menu = response;
			SignUpService.setData(signupCtrl.user);
			
		}
	});
	
	
	
  };
}


})();

