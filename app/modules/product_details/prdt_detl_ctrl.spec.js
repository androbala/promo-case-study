'use strict';

describe('product factory', function() {

  var prdtService;
  beforeEach(module('tgtApp'));
  beforeEach(module('tgtApp.prdt_detl'));
  
  beforeEach(inject(function(_prdtService_) {
    prdtService = _prdtService_;
  }));
  

  it('product object should exist', function() {
    expect(prdtService.toBeDefined());
  });
  
  it('getitems function should be defined', function() {
    expect(prdtService.getItems().toBeDefined());
   });
  
});