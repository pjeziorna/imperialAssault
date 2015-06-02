'use strict';

angular.module('imperialAssaultApp')
  .controller('MyCampaignsCtrl', function ($scope, $http, $state, $timeout, User) {
    var currentUser = User.get();
    $scope.campaigns = [];
    $scope.randBg = (Math.floor(Math.random() * 4) + 1);


    $timeout( function(){
      $http.get('/api/campaigns/mine').success(function(campaigns){
        $scope.campaigns = campaigns;
        angular.forEach($scope.campaigns, function(campaign, index){
          campaign.canEdit = (campaign.owner === currentUser._id) ? true : false;
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
