'use strict';

angular.module('movieCatalogApp.services').factory('MovieService',[ '$resource', 'endpointUrl' ,function($resource, endpointUrl) {

    return $resource(endpointUrl + ':id', { id: '@_id' }, {
                update: {
                  method: 'PUT'
                }
            });    

}]);
