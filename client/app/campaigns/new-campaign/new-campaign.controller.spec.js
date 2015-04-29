'use strict';

describe('Controller: NewCampaignCtrl', function () {

  // load the controller's module
  beforeEach(module('imperialAssaultApp'));

  var NewCampaignCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewCampaignCtrl = $controller('NewCampaignCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
