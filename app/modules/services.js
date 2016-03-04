angular.module('movieCatalogApp.services', [])

.factory('MovieService',[ '$resource', 'endpointUrl' ,function($resource, endpointUrl) {
  return $resource(endpointUrl + '/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
}])

.value('endpointUrl', 'http://localhost:3000/api/movies');
