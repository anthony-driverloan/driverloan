'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_loan/your_vehicle', {
        url: '/new_loan/your_vehicle',
        templateUrl: 'app/new_loan/your_vehicle/new_loan/your_vehicle.html',
        controller: 'NewLoanYourVehicleCtrl',
        authenticate: true
      });
  });