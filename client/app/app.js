'use strict';

angular.module('imperialAssaultApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'btford.socket-io',
  'ui.router',
  'anim-in-out',
  'ui.bootstrap',
  'MessageCenterModule',
  'selectize'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, $window, Auth, HerosFactory, MissionFactory) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });

    $rootScope.$on('animStart', function($event, element, speed) {
      $(element).addClass('animating');
      $('.ui-view-container').addClass('animating');
    });

    $rootScope.$on('animEnd', function($event, element, speed) {
      $(element).removeClass('animating');
      $('.ui-view-container').removeClass('animating');
    });

    $('.anim-in-out').height(window.innerHeight + "px");

    angular.element($window).bind('resize', function(){
      $('.anim-in-out').height(window.innerHeight + "px");
    });

    // initialaze all factories/services
    HerosFactory.getAllHeros();
    MissionFactory.getAllMissions();
  });
