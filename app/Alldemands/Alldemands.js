'use strict';

angular.module('myApp.Alldemands', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Alldemands', {
    templateUrl: 'Alldemands/Alldemands.html',
    controller: 'AlldemandsCtrl'
  });
}])

.controller('AlldemandsCtrl', [function() {

}]);