'use strict';

angular.module('imperialAssaultApp')
  .controller('MyCampaignsCtrl', function ($scope, $http, $state, $timeout) {
    $scope.campaigns = [];
    $scope.randBg = (Math.floor(Math.random() * 4) + 1);


    $timeout( function(){
      $http.get('/api/campaigns/mine').success(function(campaigns){
        $scope.campaigns = campaigns;
        angular.forEach($scope.campaigns, function(campaign, index){
          campaign.isCollapsed = true;
        });
      });
    });

    $scope.backToMainPage = function(){
      $state.transitionTo('main');
    }

    $scope.editCampaign = function(campaign){
      $state.transitionTo('campaign', {campaignId: campaign._id}, {inherit: false})
    }
  });
