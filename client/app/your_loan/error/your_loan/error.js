'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('your_loan/error', {
        url: '/your_loan/error',
        templateUrl: 'app/your_loan/error/your_loan/error.html',
        controller: 'YourLoanErrorCtrl'
      });
  });