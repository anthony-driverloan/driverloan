'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logbook_loans/agreements', {
        url: '/logbook_loans/agreements',
        templateUrl: 'app/logbook_loans/agreements/logbook_loans/agreements.html',
        controller: 'LogbookLoansAgreementsCtrl'
      });
  });