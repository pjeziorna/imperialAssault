'use strict';

angular.module('imperialAssaultApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('campaign', {
        url: '/campaign',
        templateUrl: 'app/campaigns/campaign/campaign.html',
        controller: 'CampaignCtrl',
        params: {campaignId : null}
      });
  });
