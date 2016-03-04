'use strict';

// Declare app level module which depends on views, and components
angular.module('movieCatalogApp', [
  'ui.router',
  'ngResource',
  'movieCatalogApp.controllers',
  'movieCatalogApp.services'
]).

config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /all-movies
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('list', {
      url: "/",
      templateUrl: "/app/views/movies/list.html",
      controller: "MoviesListController"
    })
    .state('list.detail', {
      url: "/movie/{idMovie}",
      templateUrl: "/app/views/movies/details.html",
      controller: function($stateParams, $scope, MovieService) {
        $scope.movie = MovieService.get({id: $stateParams.idMovie});
      }
    });
});
