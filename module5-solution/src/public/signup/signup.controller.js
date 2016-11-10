(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignUpService'];
function SignupController(SignUpService) {
  var signupCtrl = this;
  signupCtrl.submit = function () {
    signupCtrl.completed = true;
	SignUpService.getShortname();
  };
}


})();

