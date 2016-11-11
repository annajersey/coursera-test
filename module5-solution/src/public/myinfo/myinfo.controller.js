(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['SignUpService','ApiPath'];
function MyinfoController(SignUpService,ApiPath) {
  var myInfoCtrl = this; 
  myInfoCtrl.notreg=false;
  myInfoCtrl.data = SignUpService.getData();
  if(myInfoCtrl.data === undefined) myInfoCtrl.notreg=true;
  myInfoCtrl.basePath = ApiPath;
  myInfoCtrl.test = 'test';
}


})();

