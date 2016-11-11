(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
	var service = this;
	service.getShortname = function (shortName) {
		return $http.get(ApiPath + '/menu_items/'+shortName+'.json').then(function (response) { 
		  return response.data;
		},
		function(error){
			return false;
		}
		);
	};
	service.getData = function () {
        return service.formData;
    };
	
    service.setData=function (newFormData) {
        service.formData = newFormData;
    };
	
	
}



})();
