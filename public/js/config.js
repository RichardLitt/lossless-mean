'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/labels', {
            templateUrl: 'views/labels/list.html'
        }).
        // when('/articles', {
        //     templateUrl: 'views/articles/list.html'
        // }).
        // when('/articles/create', {
        //     templateUrl: 'views/articles/create.html'
        // }).
        // when('/articles/:articleId/edit', {
        //     templateUrl: 'views/articles/edit.html'
        // }).
        // when('/articles/:articleId', {
        //     templateUrl: 'views/articles/view.html'
        // }).
        when('/labels/:labelId', {
            templateUrl: 'views/labels/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);