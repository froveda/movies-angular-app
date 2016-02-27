'use strict';

angular.module('movieCatalogApp.filters').filter('interpolate', [function() {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, '1.0');
  };
}]);
