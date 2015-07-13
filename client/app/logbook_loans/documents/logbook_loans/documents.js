'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logbook_loans/documents', {
        url: '/logbook_loans/documents',
        templateUrl: 'app/logbook_loans/documents/logbook_loans/documents.html',
        controller: 'LogbookLoansDocumentsCtrl'
      });
  });