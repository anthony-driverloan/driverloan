'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logbook_loans/repayment', {
        url: '/logbook_loans/repayment',
        templateUrl: 'app/logbook_loans/repayment/logbook_loans/repayment.html',
        controller: 'LogbookLoansRepaymentCtrl'
      });
  });