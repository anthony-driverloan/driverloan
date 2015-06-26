'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('apply/phone_call', {
        url: '/apply/phone_call',
        templateUrl: 'app/new_loan/phone_call/new_loan/phone_call.html',
        controller: 'NewLoanPhoneCallCtrl',
        authenticate: true
      });
  });
