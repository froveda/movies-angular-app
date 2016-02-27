'use strict';

angular.module('movieCatalogApp.viewMovieTest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movieTest', {
    templateUrl: '/app/views/viewMovieServiceTest/viewMovieService.html',
    controller: 'ViewMovieServiceCtrl'
  });
}])

.controller('ViewMovieServiceCtrl', ['MovieService','$scope',function(MovieService,$scope) {

	$scope.movies = MovieService.query(); //fetch all movies. Issues a GET to /api/movies


}]);