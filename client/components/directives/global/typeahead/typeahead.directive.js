'use strict';

angular.module('imperialAssaultApp')
  .directive('typeaheadParams', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        console.log(element);
        $(element).typeahead(scope.$eval(attrs.typeaheadParams));
      }
    };
  });
