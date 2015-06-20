'use strict';

angular.module('imperialAssaultApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('end-campaign', {
        url: '/end-campaign',
        templateUrl: 'app/campaigns/end-campaign/end-campaign.html',
        controller: 'EndCampaignCtrl',
        params: {campaignId: null}
      });
  });
