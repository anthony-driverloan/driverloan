'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logbook_loans/how_it_works', {
        url: '/logbook_loans/how_it_works',
        templateUrl: 'app/logbook_loans/how_it_works/logbook_loans/how_it_works.html',
        controller: 'LogbookLoansHowItWorksCtrl'
      });
  });