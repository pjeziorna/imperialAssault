'use strict';

angular.module('imperialAssaultApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-campaigns', {
        url: '/my-campaigns',
        templateUrl: 'app/campaigns/my-campaigns/my-campaigns.html',
        controller: 'MyCampaignsCtrl'
      });
  });