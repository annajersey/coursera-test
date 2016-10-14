(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
	boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var bought = [];
  var toBuy = [
	{name:'chocolate bars', qty: '5'},
	{name:'ice cream buckets', qty: '2'},
	{name:'cake', qty: '1'},
	{name:'candy', qty: '4'},
	{name:'apples', qty: '10'}
  ];
 

  service.buyItem = function (itemIndex) {
	var item = toBuy[itemIndex];
	toBuy.splice(itemIndex, 1);
	bought.push(item);
  };
  
  service.getToBuyItems = function () {
    return toBuy;
  };
  
  service.getBoughtItems = function () {
    return bought;
  };
}
})();
