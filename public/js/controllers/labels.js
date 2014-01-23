'use strict';

angular.module('mean.labels').controller('LabelsController', ['$scope', '$routeParams', '$location', 'Global', 'Labels', function ($scope, $routeParams, $location, Global, Labels) {
    $scope.global = Global;

    $scope.create = function() {
        var label = new Labels({
            title: this.title,
            content: this.content
        });
        label.$save(function(response) {
            $location.path('labels/' + response._id);
        });

        this.title = '';
        this.content = '';
    };

    $scope.remove = function(label) {
        if (label) {
            label.$remove();

            for (var i in $scope.labels) {
                if ($scope.labels[i] === label) {
                    $scope.labels.splice(i, 1);
                }
            }
        }
        else {
            $scope.label.$remove();
            $location.path('labels');
        }
    };

    $scope.update = function() {
        var label = $scope.label;
        if (!label.updated) {
            label.updated = [];
        }
        label.updated.push(new Date().getTime());

        label.$update(function() {
            $location.path('labels/' + label._id);
        });
    };

    $scope.find = function() {
        Labels.query(function(labels) {
            $scope.labels = labels;
        });
    };

    $scope.findOne = function() {
        Labels.get({
            labelId: $routeParams.labelId
        }, function(label) {
            $scope.label = label;
        });
    };
}]);