'use strict';

angular.module('movieCatalogApp.viewAllMovies', [])

.controller('allMoviesController', ['MovieService','$scope',function(MovieService,$scope) {

	$scope.movies = MovieService.query(); //fetch all movies. Issues a GET to /api/movies


}]);