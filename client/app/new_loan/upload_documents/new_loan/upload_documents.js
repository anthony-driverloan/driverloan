'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_loan/upload_documents', {
        url: '/new_loan/upload_documents',
        templateUrl: 'app/new_loan/upload_documents/new_loan/upload_documents.html',
        controller: 'NewLoanUploadDocumentsCtrl'
      });
  });