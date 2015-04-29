'use strict';

angular.module('imperialAssaultApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new-campaign', {
        url: '/new-campaign',
        templateUrl: 'app/campaigns/new-campaign/new-campaign.html',
        controller: 'NewCampaignCtrl'
      });
  });
