'use strict';

describe('Filter: emptyPlaceholder', function () {

  // load the filter's module
  beforeEach(module('imperialAssaultApp'));

  // initialize a new instance of the filter before each test
  var emptyPlaceholder;
  beforeEach(inject(function ($filter) {
    emptyPlaceholder = $filter('emptyPlaceholder');
  }));

  it('should return the input prefixed with "emptyPlaceholder filter:"', function () {
    var text = 'angularjs';
    expect(emptyPlaceholder(text)).toBe('emptyPlaceholder filter: ' + text);
  });

});
