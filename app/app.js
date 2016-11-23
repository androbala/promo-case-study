'use strict';

// Declare app level module which depends on views, and components
angular.module('tgtApp', [
  'ngRoute',
  'tgtApp.prdt_detl',
  'slick',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/product'});
}]);



