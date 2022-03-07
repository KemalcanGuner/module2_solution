(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getBuyList();
    this.buy = function(i){
    ShoppingListCheckOffService.buy(i); };
  };

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
      this.items = ShoppingListCheckOffService.getBoughtList();
    };

function ShoppingListCheckOffService(){
  var initial_goods = [
    {name: "cookie", quantity: 15},
    {name: "donut", quantity: 25},
    {name: "olive", quantity: 35},
    {name: "tea", quantity: 45},
    {name: "cucumber", quantity: 55},
  ];
  var bought_goods = [];

  this.getBuyList = function () {
      return initial_goods;
    };

  this.getBoughtList = function () {
      return bought_goods;
    };

  this.buy = function (index) {
      var done = initial_goods.splice(index,1);
      bought_goods.push(done[0]);
    };

};


})();
