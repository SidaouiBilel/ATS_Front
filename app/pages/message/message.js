'use strict';

angular.module('myApp.message', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/message', {
            templateUrl: 'pages/message/message.html',
            controller: 'messageCtrl'
        });
    }])

    .controller('messageCtrl', ['$scope', function($scope) {
        $scope.categorie = false;
    }]);