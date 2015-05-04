'use strict';

angular.module('imperialAssaultApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window, $state) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          login: $scope.user.login,
          password: $scope.user.password
        })
        .then( function() {
            //$window.location.reload();
            $state.go('main').then(function(){
              Auth.isLoggedInAsync(function(loggedIn){
                if(loggedIn){
                  $state.reload();
                }
              });
            });
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
