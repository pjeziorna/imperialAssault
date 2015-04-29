'use strict';

describe('Directive: randomBg', function () {

  // load the directive's module
  beforeEach(module('imperialAssaultApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<random-bg></random-bg>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the randomBg directive');
  }));
});