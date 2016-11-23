'use strict';

angular.module('tgtApp.prdt_detl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product', {
    templateUrl: '/modules/product_details/prdt_detl.html',
    controller: 'prdt_detl_ctrl'
  });
}])

.controller('prdt_detl_ctrl', ["prdtService","$scope",function(prdtService,$scope) {
  
  //scope object to store product information
  $scope.product = [];
  //call webservice to load product information from json file
  var promise=prdtService.getItems();
  
  promise.then(function(data){
    if(data.length==1)
    {
      //load all product details into scope object and variables
      $scope.product = data[0]; 
      $scope.primary_image = $scope.product.Images[0].PrimaryImage[0].image;
       //data for configuration of rating widget
      $scope.overall_rating = $scope.product.CustomerReview[0].consolidatedOverallRating;
      $scope.pro_rating = $scope.product.CustomerReview[0].Pro[0].overallRating;
      $scope.con_rating = $scope.product.CustomerReview[0].Con[0].overallRating;
      //convert timestamp into js date format
      $scope.con_date = new Date($scope.product.CustomerReview[0].Con[0].datePosted);
      $scope.pro_date = new Date($scope.product.CustomerReview[0].Pro[0].datePosted);
    }
  }, function(error){
    console.log("Error occurred while fetching product information: "+error);
  });
  
  //data for configuration of rating widget
  $scope.max = 5;
  $scope.isReadonly = true;

  //carousel thumbnail onclick handler - change primary image to thumbnail image
  $scope.changePrimaryImage = function(img){
    $scope.primary_image = img;
  }

}]);