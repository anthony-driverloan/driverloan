'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('apply/topup', {
        url: '/apply/topup',
        templateUrl: 'app/apply/topup/apply/topup.html',
        controller: 'ApplyTopupCtrl'
      });
  });