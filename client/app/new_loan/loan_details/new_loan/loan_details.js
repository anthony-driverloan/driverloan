'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('apply/loan_details', {
        url: '/apply/loan_details',
        templateUrl: 'app/new_loan/loan_details/new_loan/loan_details.html',
        controller: 'NewLoanLoanDetailsCtrl'
      });
  });
