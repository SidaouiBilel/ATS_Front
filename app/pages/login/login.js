'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);