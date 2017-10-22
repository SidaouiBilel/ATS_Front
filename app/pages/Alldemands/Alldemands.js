'use strict';

angular.module('myApp.Alldemands', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Alldemands', {
    templateUrl: 'pages/Alldemands/Alldemands.html',
    controller: 'AlldemandsCtrl'
  });
}])

.controller('AlldemandsCtrl', [function() {

}]);