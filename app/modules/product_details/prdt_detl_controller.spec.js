'use strict';

describe('product controller', function() {

  beforeEach(module('tgtApp'));
  beforeEach(module('tgtApp.prdt_detl'));
   
  it('controller should be defined', inject(function($controller) {
      //spec body
      var prdt_detl_Ctrl = $controller('prdt_detl_ctrl');
      expect(prdt_detl_Ctrl).toBeDefined();
  }));
  
  it('change primary image should be defined', inject(function($controller) {
      var prdt_detl_Ctrl = $controller('prdt_detl_ctrl');
      expect(prdt_detl_Ctrl.changePrimaryImage().toBeDefined());
  }));
    
});