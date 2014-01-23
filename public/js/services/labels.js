'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.labels').factory('Labels', ['$resource', function($resource) {
    return $resource('labels/:labelId', {
        labelId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);