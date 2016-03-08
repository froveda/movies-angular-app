angular.module('movieCatalogApp.controllers', [])

.controller('MovieListController', ['$scope', '$window', 'MovieService',function($scope, $window, MovieService) {
  $scope.movies = MovieService.query();

  $scope.deleteMovie = function(movie) { // Delete a movie. Issues a DELETE to /api/movies/:id
    if ($window.confirm('Are you sure?')) {
      movie.$delete();
      var index = $scope.movies.indexOf(movie);
      $scope.movies.splice(index, 1);
    }
  };

  $scope.$on('updateMovies', function (event, data) {
    $scope.movies = MovieService.query();
  });
  
}])

.controller('MovieViewController', ['$scope', '$stateParams', 'MovieService',function($scope, $stateParams, MovieService) {
  $scope.movie = MovieService.get({id: $stateParams.id});
}])

.controller('MovieNewController', ['$scope', 'MovieService', function($scope, MovieService) {
  $scope.movie = new MovieService();

  $scope.addMovie = function() {
    $scope.movie.$save(function(response){
      $scope.movies.push(response.data);
      $scope.$emit('updateMovies');
    });
  };
}])

.controller('MovieEditController', ['$scope', '$filter', '$stateParams', 'MovieService', function($scope, $filter, $stateParams, MovieService) {
  $scope.updateMovie = function() {
    $scope.movie.$update(function(){
      $scope.$emit('updateMovies');
    });
  };

  $scope.loadMovie = function() {
    $scope.movie = MovieService.get({ id: $stateParams.id });
  };

  $scope.loadMovie();
}]);