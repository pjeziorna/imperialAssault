'use strict';

describe('Controller: MyCampaignsCtrl', function () {

  // load the controller's module
  beforeEach(module('imperialAssaultApp'));

  var MyCampaignsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyCampaignsCtrl = $controller('MyCampaignsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
