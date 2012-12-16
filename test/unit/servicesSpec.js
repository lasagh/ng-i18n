'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('ngI18nService'));


  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('<%= pkg.version %>');
    }));
  });
});