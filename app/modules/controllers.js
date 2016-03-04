angular.module('movieCatalogApp.controllers', [])

.controller('MovieListController', ['$scope', '$window', 'MovieService',function($scope, $window, MovieService) {
  $scope.movies = MovieService.query();

  $scope.deleteMovie = function(movie) { // Delete a movie. Issues a DELETE to /api/movies/:id
    if ($window.confirm('Are you sure?')) {
      movie.$delete(function() {
        $window.location.href = '';
      });
    }
  };
}])

.controller('MovieViewController', ['$scope', '$stateParams', 'MovieService',function($scope, $stateParams, MovieService) {
  $scope.movie = MovieService.get({id: $stateParams.id});
}])

.controller('MovieNewController', ['$scope', '$state', '$stateParams', 'MovieService', function($scope, $state, $stateParams, MovieService) {
  $scope.movie = new MovieService();

  $scope.addMovie = function() {
    $scope.movie.$save();
  };
}])

.controller('MovieEditController', ['$scope', '$state', '$stateParams', 'MovieService', function($scope, $state, $stateParams, MovieService) {
  $scope.updateMovie = function() {
    $scope.movie.$update();
  };

  $scope.loadMovie = function() {
    $scope.movie = MovieService.get({ id: $stateParams.id });
  };

  $scope.loadMovie();
}]);