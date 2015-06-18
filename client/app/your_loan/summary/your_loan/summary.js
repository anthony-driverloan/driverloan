'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('your_loan/summary', {
        url: '/your_loan/summary',
        templateUrl: 'app/your_loan/summary/your_loan/summary.html',
        controller: 'YourLoanSummaryCtrl'
      });
  });