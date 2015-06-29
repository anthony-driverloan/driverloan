'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('your_loan/your_details', {
        url: '/your_loan/your_details',
        templateUrl: 'app/your_loan/your_details/your_loan/your_details.html',
        controller: 'YourLoanYourDetailsCtrl'
      });
  });