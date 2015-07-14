'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('company/careers', {
        url: '/company/careers',
        templateUrl: 'app/company/careers/company/careers.html',
        controller: 'CompanyCareersCtrl'
      });
  });