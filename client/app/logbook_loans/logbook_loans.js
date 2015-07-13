'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logbook_loans', {
        url: '/logbook_loans',
        templateUrl: 'app/logbook_loans/logbook_loans.html',
        controller: 'LogbookLoansCtrl'
      });
  });