'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cookies', {
        url: '/cookies',
        templateUrl: 'app/cookies/cookies.html',
        controller: 'CookiesCtrl'
      });
  });