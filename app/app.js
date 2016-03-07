'use strict';

// Declare app level module which depends on views, and components
angular.module('movieCatalogApp', [
  'ui.router',
  'ngResource',
  'ngMessages',
  'movieCatalogApp.services',
  'movieCatalogApp.controllers',
  'movieCatalogApp.directives'
]).

config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /all-movies
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('movie', {
      url: "/",
      templateUrl: "/app/views/movies.html",
      controller: "MovieListController"
    })
    .state('movie.detail', {
      url: "/movie/:id/details/",
      templateUrl: "/app/views/movie_details.html",
      controller: 'MovieViewController'
    }).state('movie.add', {
      url: "/movie/add",
      templateUrl: "/app/views/movie_new.html",
      controller: 'MovieNewController'
    }).state('movie.edit', {
      url: "/movie/:id/edit",
      templateUrl: "/app/views/movie_edit.html",
      controller: 'MovieEditController'
    });
});
