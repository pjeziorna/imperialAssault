'use strict';

angular.module('imperialAssaultApp')
  .controller('CampaignCtrl', function ($scope, $state, $stateParams, $http, $timeout, Winners, User, messageCenterService, MissionFactory) {
    $scope.randBg = (Math.floor(Math.random() * 4) + 1);
    $scope.campaign = null;
    $scope.tracks = [];
    $scope.canAdd = true;
    $scope.editMode = null;
    $scope.newTrack = null;
    $scope.winners = Winners;
    $scope.winnersConfig = {
      create: false,
      persist: false,
      maxItems: 1
    };
    $scope.missions = MissionFactory.getAllMissions();
    $scope.missionsConfig = {
      create: false,
      persist: false,
      valueField: '_id',
      labelField: 'title',
      sortFields: 'title',
      searchField: ['title', 'missionType', 'deckType'],
      maxItems: 1,
      render: {
        option: function(item, escape) {
          var title = item.title;
          var type = item.title ? item.missionType : null;
          var deckType = item.title ? item.deckType : null;
          return '<div class="' + deckType + '">' +
            '<span class="strong title">' + escape(title) + '</span>' +
            (type ? '<span class="type">Type: ' + escape(type) + '</span>' : '') +
            (deckType ? '<span class="deckType">Deck type: ' + escape(deckType) + '</span>' : '') +
            '</div>';
        }
      }
    };
    $scope.availableMissionsConfig = {
      create: false,
      persist: false,
      valueField: '_id',
      labelField: 'title',
      sortFields: 'title',
      searchField: ['title', 'missionType', 'deckType'],
      render: {
        option: function(item, escape) {
          var title = item.title;
          var type = item.title ? item.missionType : null;
          var deckType = item.title ? item.deckType : null;
          return '<div class="' + deckType + '">' +
            '<span class="strong title">' + escape(title) + '</span>' +
            (type ? '<span class="type">Type: ' + escape(type) + '</span>' : '') +
            (deckType ? '<span class="deckType">Deck type: ' + escape(deckType) + '</span>' : '') +
            '</div>';
        },
        item: function(item, escape){
          return '<div data-value="' + item._id +'" class="item '+ item.deckType +'">'+item.title+'</div>';
        }
      }
    }

    var Ctrl = this;
    var campaignId = $stateParams.campaignId;
    var currentUser = User.get();

    if(campaignId === null){
      $state.transitionTo('my-campaigns');
    } else {
      $timeout( function() {
        $http.get('/api/campaigns/' + campaignId).success(function (campaign) {
          $scope.campaign = campaign;
          $scope.campaign.canEdit = ($scope.campaign.owner === currentUser._id) ? true : false;
        });

        $http.get('/api/tracks/' + campaignId).success(function (tracks) {
          Ctrl.sortTracks(tracks);
        });
      });
    }

    $scope.addTrack = function(){
      $scope.tracks.push(Ctrl.createNewTrack());
      $scope.canAdd = false;
      $scope.editMode = "new";
    };

    $scope.saveTrack = function(track){
      delete track.isEdited;
      delete track.isCollapsed;
      track.mission = MissionFactory.getMissionById(track.mission._id);
      console.log("mission to save", track.mission);
      if($scope.editMode === "new"){
        $http.post('/api/tracks', track)
          .success(function(trackSaved){
            $scope.canAdd = true;
            $scope.editMode = null;
            $scope.tracks[$scope.tracks.length - 1] = trackSaved;
            $scope.campaign.timeSpent = Ctrl.updateTimeSpent(trackSaved);
            $scope.campaign.tracks.push(trackSaved._id);
            $http.patch('/api/campaigns/' + campaignId, $scope.campaign)
              .success(function () {
                messageCenterService.add('success', 'New mission saved', {timeout: 3000});
              })
              .error(function (err, doc) {
                messageCenterService.add('danger', 'Campaign faied to update', {timeout: 3000});
              });
          })
          .error(function(err, doc){
            $scope.canAdd = true;
            $scope.editMode = null;
            messageCenterService.add('danger', 'Failed to save mission', {timeout: 3000});
            console.error(err);
          });
      }else if($scope.editMode === "edit"){
        $http.put('/api/tracks/' + track._id, track)
          .success(function(err, trackSaved){
            $scope.canAdd = true;
            $scope.editMode = null;
            track.isCollapsed = true;
            $http.patch('/api/campaigns/' + campaignId, $scope.campaign)
              .success(function () {
                messageCenterService.add('success', 'Mission saved', {timeout: 3000});
              })
              .error(function (err, doc) {
                messageCenterService.add('danger', 'Campaign failed to update', {timeout: 3000});
              });
          })
          .error(function (err, doc) {
            $scope.canAdd = true;
            $scope.editMode = null;
            messageCenterService.add('danger', 'Failed to save mission', {timeout: 3000});
            console.error(err);
          });
      }
    };

    $scope.removeTrack = function(track, index){
      $scope.canAdd = true;
      if($scope.editMode === "new"){
        $scope.tracks.splice(index, 1);
        $scope.campaign.tracks.splice(index, 1);
        if(track._id !== undefined){
          $http.delete('/api/tracks/' + track._id);
          $http.patch('/api/campaigns/' + campaignId, $scope.campaign);
        }
      }else if($scope.editMode === "edit"){
        track.isEdited = false;
      }
    };

    $scope.backToCampaignList = function(){
      $state.transitionTo('my-campaigns');
    };

    $scope.editTrack = function(track){
      track.isEdited = !track.isEdited;
      $scope.canAdd = !$scope.canAdd;
      $scope.editMode = "edit";
    };

    $scope.endCampaign = function () {
      $state.transitionTo('end-campaign', {campaignId: $scope.campaign._id}, {inherit: false});
    };

    this.sortTracks = function(tracks){
      if($scope.campaign !== null){
        var campaignTracks = $scope.campaign.tracks;
        for(var i = 0; i < campaignTracks.length; i++){
          for(var j = 0; j < tracks.length; j++){
            if(tracks[j]._id === campaignTracks[i]){
              tracks[j].isCollapsed = true;
              $scope.tracks.push(tracks[j]);
              //break;
            }
          }
        }
      }
    };

    this.createNewTrack = function(){
      var track = {
        mission: {
          _id: '',
          title: ''
        },
        campaign_id: campaignId,
        imperialStats: {
          influence: null,
          exp: null
        },
        rebelStats: {
          credits: null,
          users: []
        },
        availableSideMissions: [],
        winner: '',
        isEdited: true,
        isCollapsed: false
      }
      track = this.addUsersToTrack(track);
      return track;
    };

    this.addUsersToTrack = function(track){
      var campaignUsers = $scope.campaign.rebelPlayers;
      for(var i = 0; i < campaignUsers.length; i++){
        track.rebelStats.users[i] = {};
        track.rebelStats.users[i].name = campaignUsers[i].firstName;
        track.rebelStats.users[i].hero = campaignUsers[i].hero;
      }
      return track;
    };

    this.updateTimeSpent = function(track){
      var t = $scope.campaign.timeSpent;
      t.hours += track.timeSpent.hours;
      t.minutes += track.timeSpent.minutes;

      if(t.minutes / 60 >= 1){
        var h = Math.floor(t.minutes / 60);
        var m = t.minutes - h * 60;
        t.hours += h;
        t.minutes = m;
      }
      return t;
    };
  });
