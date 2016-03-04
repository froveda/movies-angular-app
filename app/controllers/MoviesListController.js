'use strict';

angular.module('movieCatalogApp.controllers').controller('MoviesListController', ['$scope', 'MovieService',function($scope, MovieService) {
    MovieService.query().$promise.then(function (response) {
      $scope.movies = response;
      $scope.$apply;
    });
}]);