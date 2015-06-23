'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('apply/confirm', {
        url: '/apply/confirm',
        templateUrl: 'app/new_loan/upload_documents/new_loan/upload_documents.html',
        controller: 'NewLoanUploadDocumentsCtrl'
      });
  });