'use strict';

angular.module('movieCatalogApp.viewDetail', [])

.controller('detailController', ['$stateParams','MovieService','$scope',function($stateParams,MovieService,$scope) {

	console.log($stateParams.idMovie);

	$scope.movie = MovieService.get({id: $stateParams.idMovie});


}]);