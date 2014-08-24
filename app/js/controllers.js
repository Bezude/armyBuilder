'use strict';

/* Controllers */

angular.module('armyBuilder.controllers', [])
  .controller('builderCtrl', ['$scope', '$http', function($scope, $http) {
  	$http.get('armies/empire.json').success(function(data) {
  		$scope.armyBook = data.listEntries;
  	});

  	function hasAddStats(unitId) {
  		return $scope.armyBook[unitId].hasOwnProperty("addStats");
  	}

  	$scope.hasAddStats = hasAddStats;
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
