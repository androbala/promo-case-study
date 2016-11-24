'use strict';

describe('Product Data Service', function() {
  
    
  var httpData = [{ title: 'Mixer', price: '190.99 USD'}];
  var dataService, $httpBackend;
  
  beforeEach(module('tgtApp'));
  beforeEach(inject(function($injector) {
     dataService = $injector.get('dataService');
     $httpBackend = $injector.get('$httpBackend');
     $httpBackend.when('GET', "/data/item-data.json").respond(httpData);
  }));
    
  it('Data Service should be defined', function() {
    expect(dataService.toBeDefined());
  });
  
  it('getitems function should be defined', function() {
    expect(dataService.getItems().toBeDefined());
   });
 
  it('should load product data', function () {
     dataService.getItems().then(function(response) {
     	expect(response).toEqual(httpData); 
     });
     $httpBackend.flush();
   });
 
 
});