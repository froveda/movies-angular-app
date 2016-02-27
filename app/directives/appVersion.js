'use strict';

angular.module('movieCatalogApp.directives').directive('appVersion', [function() {
  return function(scope, elm, attrs) {
    elm.text('1.0');
  };
}]);
