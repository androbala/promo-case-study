'use strict';
angular.module('tgtApp.prdt_detl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product', {
    templateUrl: '/modules/product_details/prdt_detl.html',
    controller: 'prdt_detl_ctrl'
  });
}])
