'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_loan/loan_details', {
        url: '/new_loan/loan_details',
        templateUrl: 'app/new_loan/loan_details/new_loan/loan_details.html',
        controller: 'NewLoanLoanDetailsCtrl',
        authenticate: true
      });
  });