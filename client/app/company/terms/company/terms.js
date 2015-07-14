'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('company/terms', {
        url: '/company/terms',
        templateUrl: 'app/company/terms/company/terms.html',
        controller: 'CompanyTermsCtrl'
      });
  });