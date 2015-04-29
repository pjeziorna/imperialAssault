'use strict';

describe('Service: heros', function () {

  // load the service's module
  beforeEach(module('imperialAssaultApp'));

  // instantiate service
  var heros;
  beforeEach(inject(function (_heros_) {
    heros = _heros_;
  }));

  it('should do something', function () {
    expect(!!heros).toBe(true);
  });

});
