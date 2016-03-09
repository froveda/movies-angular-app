angular.module('movieCatalogApp.directives', [])

.directive('moviesGrid', ['$window', '$filter', function(){
  return {
    scope:{
      movies: '=',
      nameFilter: '=',
      deleteMovie: '='
    },
    restrict: 'E',
    templateUrl: '/app/views/movies_grid.html'
  };
}]);