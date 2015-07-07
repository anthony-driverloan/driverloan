'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sign_agreement', {
        url: '/sign_agreement',
        templateUrl: 'app/sign_agreement/sign_agreement.html',
        controller: 'SignAgreementCtrl'
      });
  });