'use strict';

angular.module('imperialAssaultApp')
  .directive('randomBg', function ($compile) {
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        var rand = Math.floor(Math.random() * 4) + 1;
        var path = attrs.path;
        var template = '<div class="bg-alt"><img src="'+path+'/bg-'+rand+'.jpg"/></div>'
        element.replaceWith($compile(template)(scope));
      }
    };
  });
