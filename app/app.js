'use strict';

// Declare app level module which depends on views, and components
angular.module('movieCatalogApp', [
  'ngRoute',
  'movieCatalogApp.filters',
  'movieCatalogApp.directives',
  'movieCatalogApp.view1',
  'movieCatalogApp.view2',	
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/views/view1'});
}]);
