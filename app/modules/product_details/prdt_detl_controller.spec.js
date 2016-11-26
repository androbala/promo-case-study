describe('product controller', function() {
	
	var productCtrl;
  var scope;
	var data = [{title:"Mixer", price: "199.99 USD", Images:[{PrimaryImage:[{image:"img.jpg"}]}],CustomerReview: [{consolidatedOverallRating:5,Pro:[{overallRating:5,datePosted:"11/25/2016"}],Con:[{overallRating:5,datePosted:"11/25/2016"}]}]}];
  
  beforeEach(module('tgtApp'));
  beforeEach(module('tgtApp.prdt_detl'));
  beforeEach(inject(function ($controller, $rootScope,_dataService_,_$q_) {
		$q = _$q_;
		deferred = _$q_.defer();
    scope = $rootScope.$new();
    mockDataSvc=_dataService_;
  	spyOn(mockDataSvc,'getItems').and.returnValue(deferred.promise);
    productCtrl = $controller('prdt_detl_ctrl', {
            $scope: scope,
            dataService: mockDataSvc
        });
    }));
  
  it('should be defined', function(){
  	deferred.resolve(data);
    scope.$apply();
    expect(productCtrl).toBeDefined();
  });
  
  it('methods should be defined', function(){
    expect(scope.changePrimaryImage).toBeDefined();
    expect(scope.plus).toBeDefined();
    expect(scope.minus).toBeDefined();
  });
  
  it('scope variables should be initialized', function(){
    deferred.resolve(data);
    scope.$apply();
    expect(scope.product).toEqual(data[0]);
    //rating widget variables
    expect(scope.max).toEqual(5);
    expect(scope.isReadonly).toBeTruthy();
    //quantity control variables
    expect(scope.qty).toEqual(1);
    expect(scope.minQty).toEqual(1);
    expect(scope.maxQty).toEqual(10);
    expect(scope.plusActive).toBeFalsy();
    expect(scope.minusActive).toBeTruthy();
    scope.plus();
    expect(scope.qty).toEqual(2);
    scope.minus();
    expect(scope.qty).toEqual(1);
    var i=1;
    while(i<=9)
    {
      scope.plus();
      i=i+1;
    }
    expect(scope.qty).toEqual(10);
    scope.$apply(); //scope.$digest()
    expect(scope.plusActive).toBeTruthy();
    /*
    expect(scope.primaryImage).toEqual(data[0].Images[0].PrimaryImage[0].image);
    expect(scope.overallRating).toEqual(data[0].CustomerReview[0].consolidatedOverallRating);
    expect(scope.proRating).toEqual(data[0].CustomerReview[0].Pro[0].overallRating);
    expect(scope.conRating).toEqual(data[0].CustomerReview[0].Con[0].overallRating);
    */
  });
  
});
