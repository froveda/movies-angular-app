angular.module('movieCatalogApp.directives', [])

.directive('moviesGrid', function(){
  return {
    scope:{
      movies: '=',
      nameFilter: '=',
      delete: '='
    },
    restrict: 'E',
    templateUrl: '/app/views/movies_grid.html'
  };
});