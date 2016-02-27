'use strict';

// Declare app level module which depends on views, and components
angular.module('movieCatalogApp', [
  'ngRoute',
  'ngResource',
  'movieCatalogApp.filters',
  'movieCatalogApp.directives',
  'movieCatalogApp.services',
  'movieCatalogApp.view1',
  'movieCatalogApp.view2',	
  'movieCatalogApp.viewMovieTest'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/views/view1'});
}]);

