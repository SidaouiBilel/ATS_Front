'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'pages/login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', [function() {

}]);