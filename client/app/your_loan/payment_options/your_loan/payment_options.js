'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('your_loan/payment_options', {
        url: '/your_loan/payment_options',
        templateUrl: 'app/your_loan/payment_options/your_loan/payment_options.html',
        controller: 'YourLoanPaymentOptionsCtrl'
      });
  });