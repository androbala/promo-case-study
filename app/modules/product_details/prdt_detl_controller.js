'use strict';

angular.module('tgtApp.prdt_detl').controller('prdt_detl_ctrl', ["dataService","$scope",function(dataService,$scope) {
  
  //scope object to store product information
  $scope.product = [];
  //call webservice to load product information from json file
  var promise=dataService.getItems();
  
  promise.then(function(data){
    if(data.length==1){
      //load all product details into scope object and variables
      $scope.product = data[0]; 
      $scope.primaryImage = $scope.product.Images[0].PrimaryImage[0].image;
       //data for configuration of rating widget
      $scope.overallRating = $scope.product.CustomerReview[0].consolidatedOverallRating;
      $scope.proRating = $scope.product.CustomerReview[0].Pro[0].overallRating;
      $scope.conRating = $scope.product.CustomerReview[0].Con[0].overallRating;
      //convert timestamp into js date format
      $scope.conDate = new Date($scope.product.CustomerReview[0].Con[0].datePosted);
      $scope.proDate = new Date($scope.product.CustomerReview[0].Pro[0].datePosted);
    }
    else if(data.length>1){
      console.log("Multiple products found. Please check");
	}
	else{
	  console.log("No product information found");
	}
  }, function(error){
    console.log("Error occurred while fetching product information: "+error);
  });
  
  //data for configuration of rating widget
  $scope.max = 5;
  $scope.isReadonly = true;

  //carousel thumbnail onclick handler - change primary image to thumbnail image
  $scope.changePrimaryImage = function(img){
    $scope.primaryImage = img;
  }
  
  //initialization of data and logic for quantity control
  $scope.qty = 1;
  $scope.minQty = 1;
  $scope.maxQty = 10;

  $scope.plus = function()
  {
    if($scope.qty<$scope.maxQty){
      $scope.qty= $scope.qty+1;
    }
  }
  $scope.minus = function()
  {
    if($scope.qty>$scope.minQty){
      $scope.qty= $scope.qty-1;
    }
  }

  $scope.$watch('qty', function() 
  {
    if($scope.qty>$scope.minQty){
      $scope.minusActive = false;
    }
    else if($scope.qty==$scope.minQty){
      $scope.minusActive = true;
    }

    if($scope.qty<$scope.maxQty){
      $scope.plusActive = false;
    }
    else if($scope.qty==$scope.maxQty){
      $scope.plusActive = true;
    }
  }, true);

}]);
