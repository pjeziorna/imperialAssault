'use strict';

describe('Controller: EndCampaignCtrl', function () {

  // load the controller's module
  beforeEach(module('imperialAssaultApp'));

  var EndCampaignCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EndCampaignCtrl = $controller('EndCampaignCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
