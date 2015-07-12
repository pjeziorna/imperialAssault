'use strict';

angular.module('imperialAssaultApp')
  .controller('NewCampaignCtrl', function ($scope, $state, $http, Auth, messageCenterService, HerosFactory) {
    var Ctrl = this;
    $scope.randBg = (Math.floor(Math.random() * 4) + 1);
    $scope.campaign = {
      imperialPlayer: null,
      rebelPlayers: [],
      rebelHeros: []
    };
    $scope.rebelPlayersCount = [{}];
    $scope.users = [];

    $scope.heros = HerosFactory.getAllHeros();
    $scope.herosConfig = {
      create: false,
      persist: false,
      maxItems: 1,
      valueField: 'name',
      labelField: 'name',
      sortFields: 'name'
    }

    $scope.getUsers = function(query) {
      return $http.get('/api/users/names?query=' + query).then(function(res){
        return res.data;
      });
    };

    $scope.addRebelPlayer = function(){
      $scope.rebelPlayersCount.push({});
    };

    $scope.backToMainPage = function(){
      $state.transitionTo('main');
    }

    $scope.createCampaign = function(){
      console.log('create new campaign');
      var campaign = {
        owner: Auth.getCurrentUser()._id,
        name: $scope.campaign.name,
        imperialPlayer: Ctrl.getPlayer($scope.campaign.imperialPlayer),
        rebelPlayers: Ctrl.getPlayers($scope.campaign.rebelPlayers, $scope.campaign.rebelHeros),
        tracks: [],
        winner: ''
      };
      $http.post('/api/campaigns', campaign).success(function(data, status, headers, config){
        $scope.campaign = {
          imperialPlayer: null,
          rebelPlayers: []
        };
        $scope.newCampaignForm.$setPristine(true);
        $scope.rebelPlayersCount = [{}];
        messageCenterService.add('success', 'New campaign added', {timeout: 3000});
      });
    }

    this.getPlayer = function(player){
      var p = {};
      if(player._id === undefined){
        p._id = '';
        p.firstName = player;
        p.lastName = '';
        //console.log('getPlayer modify ', p);
        return p;
      }
      //console.log('getPlayer unmodify ', player);
      return player;
    };

    this.getPlayers = function(players, heros){
      var p = [];
      for(var i in players){
        var player = this.getPlayer(players[i]);
        player.hero = heros[i];
        console.log('player ', player);
        p.push(player);
      }
      return p;
    }

  });
