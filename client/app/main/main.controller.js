'use strict';

angular.module('imperialAssaultApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, $state) {
    Auth.isLoggedInAsync(function(loggedIn){
      $scope.isLogged = loggedIn;
    });
    //$scope.isLogged = Auth.isLoggedIn();
    //console.log('state', $state);
    //console.log('isLogged', $scope.isLogged);
    //console.log('Auth', Auth);
  });
