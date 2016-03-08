angular.module('movieCatalogApp.directives', [])

.directive('moviesGrid', function(){
  return {
    scope:{
      movies: '=',
      nameFilter: '='
    },
    restrict: 'E',
    controller: 'MovieListController',
    templateUrl: '/app/views/movies_grid.html'
  };
});