'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reset_password', {
        url: '/reset_password',
        templateUrl: 'app/reset_password/reset_password.html',
        controller: 'ResetPasswordCtrl'
      });
  });