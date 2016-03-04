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
    .state('movie', {
      url: "/",
      templateUrl: "/app/views/movies/list.html",
      controller: "MoviesListController"
    })
    .state('movie.detail', {
      url: "/movie/details/{idMovie}",
      templateUrl: "/app/views/movies/details.html",
      controller: 'MovieController'
    }).state('movie.add', {
      url: "/movie/add",
      templateUrl: "/app/views/movies/form.html",
      controller: 'MovieController'
    }).state('movie.edit', {
      url: "/movie/edit/{idMovie}",
      templateUrl: "/app/views/movies/form.html",
      controller: 'MovieController'
    });
});
