'use strict';


// Declare app level module which depends on filters, and services
angular.module('armyBuilder', [
  'ngRoute',
  'armyBuilder.filters',
  'armyBuilder.services',
  'armyBuilder.directives',
  'armyBuilder.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/builder', {templateUrl: 'partials/partial1.html', controller: 'builderCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/builder'});
}]);
