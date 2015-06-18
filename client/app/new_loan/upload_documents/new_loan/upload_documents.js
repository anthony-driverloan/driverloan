'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_loan/confirm', {
        url: '/new_loan/confirm',
        templateUrl: 'app/new_loan/upload_documents/new_loan/upload_documents.html',
        controller: 'NewLoanUploadDocumentsCtrl'
      });
  });