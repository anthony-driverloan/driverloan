'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('company/about_us', {
        url: '/company/about_us',
        templateUrl: 'app/company/about_us/company/about_us.html',
        controller: 'CompanyAboutUsCtrl'
      });
  });