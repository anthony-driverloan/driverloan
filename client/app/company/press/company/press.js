'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('company/press', {
        url: '/company/press',
        templateUrl: 'app/company/press/company/press.html',
        controller: 'CompanyPressCtrl'
      });
  });