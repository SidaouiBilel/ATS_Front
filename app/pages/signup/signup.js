'use strict';

angular.module('myApp.signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'pages/signup/signup.html',
    controller: 'signupCtrl'
  });
}])

.controller('signupCtrl', [function() {

}]);