'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logbook_loans/compare_us', {
        url: '/logbook_loans/compare_us',
        templateUrl: 'app/logbook_loans/compare_us/logbook_loans/compare_us.html',
        controller: 'LogbookLoansCompareUsCtrl'
      });
  });