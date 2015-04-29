'use strict';

angular.module('imperialAssaultApp')
  .factory('Heros', function ($http) {
    // Service logic
    // ...
    var heros = null;
    $http.get('/api/heros').success(function(h){
      heros = h;
    });

    // Public API here
    return {
      getHeroByName: function(name){
        for(var i = 0; i < heros.length; i++){
          if(heros[i].name === name){
            return heros[i];
          }
        }
        return null;
      },
      getAllHeros: function () {
        return heros;
      }
    };
  });
