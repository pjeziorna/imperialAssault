'use strict';

angular.module('imperialAssaultApp')
  .filter('emptyPlaceholder', function () {
    return function (input) {
      if (!input) {
        return '-';
      }
      return input;
    };
  });
