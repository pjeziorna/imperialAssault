'use strict';

angular.module('imperialAssaultApp')
  .controller('EndCampaignCtrl', function ($scope, $stateParams, $state, $timeout, $http, Winners) {
    var campaignId = $stateParams.campaignId;
    console.log(campaignId);

    $scope.camapaign = null;
    $scope.winners = Winners;
    $scope.winnersConfig = {
      create: false,
      persist: false,
      maxItems: 1
    };

    if (campaignId == null) {
      $state.transitionTo('my-campaigns');
    } else {
      $timeout(function () {
        $http.get('/api/campaigns/' + campaignId).success(function (campaign) {
          $scope.campaign = campaign;
        });
      });
    }
    ;

    $scope.endCampaign = function () {
      $http.put('/api/campaigns/' + campaignId, $scope.campaign)
        .success(function (err, doc) {
          console.log('Campaign ended');
        })
        .error(function (err, doc) {
          console.error(err);
        });
    };

    $scope.goBack = function () {
      $state.transitionTo('campaign', {campaignId: campaignId}, {inherit: false});
    };

  });
