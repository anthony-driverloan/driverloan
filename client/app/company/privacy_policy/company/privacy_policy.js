'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('company/privacy_policy', {
        url: '/company/privacy_policy',
        templateUrl: 'app/company/privacy_policy/company/privacy_policy.html',
        controller: 'CompanyPrivacyPolicyCtrl'
      });
  });