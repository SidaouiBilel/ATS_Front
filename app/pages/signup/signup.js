'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', [function() {

}]);