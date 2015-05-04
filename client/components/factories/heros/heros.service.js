'use strict';

angular.module('imperialAssaultApp')
  .factory('Heros', function ($http) {
    // Service logic
    // ...
    var heros = null;


    // Public API here
    return {
      //getHeroByName: function(name){
      //  var h = heros;
      //  for(var i = 0; i < h.length; i++){
      //    if(h[i].name === name){
      //      return h[i];
      //    }
      //  }
      //  return null;
      //},
      getAllHeros: function () {
        if(heros === null){
          $http.get('/api/heros').success(function(h){
            heros = h;
          });
        }
        return heros;
      }
    };
  });
