'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logbook_loans/eligibility_criteria', {
        url: '/logbook_loans/eligibility_criteria',
        templateUrl: 'app/logbook_loans/eligibility_criteria/logbook_loans/eligibility_criteria.html',
        controller: 'LogbookLoansEligibilityCriteriaCtrl'
      });
  });