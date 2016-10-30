(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  var items = [];

  service.getAllCategories = function () {
    return $http(
		{
		  method: "GET",
		  url: (ApiBasePath + "/categories.json")
		}
	).then(function (result) {
		 var foundItems = [];
		 for(var key in result.data){  //console.log(result.data[key].name);
			
			 foundItems.push(result.data[key]);
		 }
		 return foundItems;
	});
  };
  
  service.getItemsForCategory = function (categoryShortName) {
  
    return $http(
		{
		  method: "GET",
		  url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
		}
	).then(function (result) { 
		var foundItems = [];
		for(var key in result.data.menu_items){
		
			foundItems.push(result.data.menu_items[key]);
		}
		return foundItems;
	});
  };
  
  	
}

})();
