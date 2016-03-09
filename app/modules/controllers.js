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
}])

.controller('MovieViewController', ['$scope', '$stateParams', 'MovieService',function($scope, $stateParams, MovieService) {
  $scope.movie = MovieService.get({id: $stateParams.id});
}])

.controller('MovieNewController', ['$scope', '$state', '$stateParams', 'MovieService', function($scope, $state, $stateParams, MovieService) {
  $scope.movie = new MovieService();

  $scope.addMovie = function() {
    $scope.movie.$save(function(response){
      $scope.movies.push(MovieService.get({ id: response.data._id }));
      $state.go('movie')
    });
  };
}])

.controller('MovieEditController', ['$scope', '$state', '$filter', '$stateParams', 'MovieService', function($scope, $state, $filter, $stateParams, MovieService) {
  $scope.updateMovie = function() {
    $scope.movie.$update(function(){
      var old_movie = $filter('filter')($scope.movies, {"_id": $scope.movie._id});
      var index = $scope.movies.indexOf(old_movie[0]);
      $scope.movies[index] = $scope.movie;
      $state.go('movie');
    });
  };

  $scope.loadMovie = function() {
    $scope.movie = MovieService.get({ id: $stateParams.id });
  };

  $scope.loadMovie();
}]);