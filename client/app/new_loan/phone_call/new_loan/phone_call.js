'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_loan/phone_call', {
        url: '/new_loan/phone_call',
        templateUrl: 'app/new_loan/phone_call/new_loan/phone_call.html',
        controller: 'NewLoanPhoneCallCtrl'
      });
  });