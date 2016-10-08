(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  

  $scope.countDishes = function () {
	var message = 'Enjoy!';
	$scope.messageClass='green';
	if ($scope.dishes){
		var dishesArr = $scope.dishes.split(',');
		dishesArr = dishesArr.filter(function(e){return e}); //remove empty dishes
		if(dishesArr.length > 3) message = 'Too much!';
	}else{
		var message = 'Please enter data first';
		$scope.messageClass='red';
	}
	$scope.lunchMessage = message;
  };
}
})();
