'use strict';

describe('Service: winners', function () {

  // load the service's module
  beforeEach(module('imperialAssaultApp'));

  // instantiate service
  var winners;
  beforeEach(inject(function (_winners_) {
    winners = _winners_;
  }));

  it('should do something', function () {
    expect(!!winners).toBe(true);
  });

});
