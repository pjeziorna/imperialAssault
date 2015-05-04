'use strict';
angular.module('imperialAssaultApp')
  .factory('MissionFactory', function ($http) {
    // Service logic
    // ...

    var missions = null;
    //$http.get('/api/missions').success(function(mis){
    //  missions = mis;
    //});

    // Public API here
    return {
      getMissionById: function(id){
        var result = null;
        _.result(_.find(this.getAllMissions(), function(mis){
          (mis._id == id) ? result = mis : null;
        }));
        return result;
      },
      getMissionByName: function(name){
        var result = null;
        _.result(_.find(this.getAllMissions(), function(mis){
          (mis.name == name) ? result = mis : null;
        }));
        return result;
      },
      getAllMissions: function(){
        if(missions === null){
          $http.get('/api/missions').success(function(mis){
            missions = mis;
            return mis;
          });
        }
        return missions;

      }
    };
  });
