'use strict';

angular.module('driverloanV1App')
  .controller('UCtrl', function ($scope,$location) {
    $scope.message = 'Hello';
    var url = $location.url().slice(3);
    console.log(url);
  });
