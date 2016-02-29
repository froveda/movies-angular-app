'use strict';

// Declare app level module which depends on views, and components
angular.module('movieCatalogApp', [
  'ui.router',
  'ngResource',
  'movieCatalogApp.filters',
  'movieCatalogApp.directives',
  'movieCatalogApp.services',
  'movieCatalogApp.viewAllMovies',
  'movieCatalogApp.viewDetail'
]).

config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /all-movies
  $urlRouterProvider.otherwise("/all-movies");
  //
  // Now set up the states
  $stateProvider
    .state('all-movies', {
      url: "/all-movies",
      templateUrl: "views/all-movies/all-movies.html",
      controller: 'allMoviesController'
    })
    .state('all-movies.detail', {
      url: "/detail/{idMovie}",
      templateUrl: "views/detail/detail.html",
      controller: 'detailController'
    });
});
