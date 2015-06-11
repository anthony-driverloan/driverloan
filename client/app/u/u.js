'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('u', {
        url: '/u/:id',
        templateUrl: 'app/u/u.html',
        controller: 'UCtrl'
      });
  });