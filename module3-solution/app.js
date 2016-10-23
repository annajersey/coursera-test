(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
}



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.error = false;
  

  menu.removeItem = function (itemIndex) {
	menu.found.splice(itemIndex, 1);
  };
 
  menu.makeSearch = function(){
	if(!menu.search) menu.error=true;
	var promise = MenuSearchService.getMatchedMenuItems(menu.search);
	promise.then(function(response) {
		menu.found = response;
		if(!menu.found.length) menu.error=true;
		else menu.error=false;
	});
  }

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;
	service.getMatchedMenuItems = function(searchTerm){
	return $http(
		{
		  method: "GET",
		  url: (ApiBasePath + "/menu_items.json")
		}
	).then(function (result) {
		var foundItems = [];
		for(var key in result.data.menu_items){
			if(result.data.menu_items[key].description.indexOf(searchTerm) != -1)
			foundItems.push(result.data.menu_items[key]);
		}
		return foundItems;
	});
  }

}

})();
