'use strict';

angular.module('movieCatalogApp.controllers').controller('MovieController', ['$scope', '$stateParams', 'MovieService',function($scope, $stateParams, MovieService) {

  if(!angular.isUndefined($stateParams.idMovie)) {
    $scope.movie = MovieService.get({id: $stateParams.idMovie});
  }
}]);