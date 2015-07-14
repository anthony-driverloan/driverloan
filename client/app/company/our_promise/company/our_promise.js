'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('company/our_promise', {
        url: '/company/our_promise',
        templateUrl: 'app/company/our_promise/company/our_promise.html',
        controller: 'CompanyOurPromiseCtrl'
      });
  });