'use strict';

describe('Product Data Service', function() {
  
  var httpData = {"CatalogEntryView":[{title:"Mixer", price: "199.99 USD", Images:[{PrimaryImage:[{image:"img.jpg"}]}], CustomerReview: [{consolidatedOverallRating:5,Pro:[{overallRating:5,datePosted:"11/25/2016"}],Con:[{overallRating:5,datePosted:"11/25/2016"}]}]}]};
  var dataService, httpBackend;
  
  beforeEach(module('tgtApp'));
  beforeEach(inject(function(_dataService_, $httpBackend) {
     dataService = _dataService_;
     httpBackend = $httpBackend;
  }));
  
  it('should be defined', function() {
    expect(dataService).toBeDefined();
  });
  it('getitems function should be defined', function() {
    expect(dataService.getItems).toBeDefined();
   });
  it('should return product data', function () {
  	 httpBackend.whenGET("/data/item-data.json").respond(httpData);
     dataService.getItems().then(function(data) {
        expect(data).toEqual(httpData.CatalogEntryView); 
        expect(data.length).toEqual(1);
     });
     httpBackend.flush();
   });
   
   afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
 
});
