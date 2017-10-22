'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', function($scope) {
$scope.categorie = true;
$scope.type_service = 0;
$scope.budget_time = "hour";
$scope.budget_type = "global";
$scope.material_type = 0
}]);