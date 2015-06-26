'use strict';

angular.module('driverloanV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('apply/your_vehicle', {
        url: '/apply/your_vehicle',
        templateUrl: 'app/new_loan/your_vehicle/new_loan/your_vehicle.html',
        controller: 'NewLoanYourVehicleCtrl'
      });
  });
