'use strict';

angular.module('driverloanV1App')
  .controller('NewLoanYourVehicleCtrl', function ($scope, Auth, $http, $location, vehicleValue) {


  $scope.vehicle = {}

  $scope.keeperoptions = [{value:"The vehicle's logbook is in my name"},{value:"The vehicle's logbook is NOT in my name"}];

  $scope.financeoptions = [{value:"There is no outstanding finance"},{value:"The vehicle is on finance"}];


    $scope.newVehicle = function(form){

      console.log($scope.vehicle); //remove later

      $('#next-btn').prop('disabled', true);

$http.post('/api/vehicles',$scope.vehicle)
.success(function(data){
  console.log(data);
  vehicleValue.value = data.value;
  console.log(data.value);
  console.log(vehicleValue.value);
    $location.path('/apply/personal_details');
})
.error(function(data){
  console.log(data)
});



   }

  });
