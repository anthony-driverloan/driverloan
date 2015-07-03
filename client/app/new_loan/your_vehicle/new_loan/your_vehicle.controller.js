'use strict';

angular.module('driverloanV1App')
  .controller('NewLoanYourVehicleCtrl', function ($scope, Auth, $http, $location, $cookies) {

   $scope.loading = false; // start loading
  $scope.vehicle = {}

  $scope.keeperoptions = [{value:"The vehicle's logbook is in my name"},{value:"The vehicle's logbook is NOT in my name"}];

  $scope.financeoptions = [{value:"Still repaying finance"},{value:"Finance free"}];

  $scope.insuranceoptions = [{value:"Fully Comprehensive"},{value:"Third party only"},{value:"None"}];


    $scope.newVehicle = function(form){
            $('#next-btn').prop('disabled', true);
             $scope.loading = true; // start loading
      $cookies.put('access_token', '8df527db900492900a6447540ea13d0b');

$http({
        method: 'POST',
        url: 'http://quote.loans2go.co.uk/api/calc',
        data: {access_token:'8df527db900492900a6447540ea13d0b',reg:$scope.vehicle.registration,mileage:$scope.vehicle.mileage,condition:'average'},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function(obj) {
            var str = [];
            for (var key in obj) {
                if (obj[key] instanceof Array) {
                    for(var idx in obj[key]){
                        var subObj = obj[key][idx];
                        for(var subKey in subObj){
                            str.push(encodeURIComponent(key) + "[" + idx + "][" + encodeURIComponent(subKey) + "]=" + encodeURIComponent(subObj[subKey]));
                        }
                    }
                }
                else {
                    str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
                }
            }
            return str.join("&");
        }
    }).success(function(response) {
      var vehicleValue = Math.round(response.data.borrow / 100) * 100
      $http.post('/api/vehicles',{registration:$scope.vehicle.registration,mileage:$scope.vehicle.mileage,value:vehicleValue,manufacturer:response.data.make,model:response.data.model})
      .success(function(data){

        $cookies.put('vehicle', data._id);

          $location.path('/apply/personal_details');
      })
      .error(function(data){
        console.log(data)
      });




        });



   }

  });
