'use strict';

angular.module('driverloanV1App')
  .controller('NewLoanUploadDocumentsCtrl', function ($scope, $location,Auth, $cookies, $http) {

    $scope.phoneCall  = {};



    $scope.slots = [{value:"Today at 15.00"},{value:"Today at 15.30"},{value:"Today at 16.00"},{value:"Today at 16.30"},{value:"Today at 17.00"},{value:"Today at 17.30"}];


    var user = Auth.getCurrentUser();

    $scope.phoneCall.userId = user._id;

    $scope.phoneCall.email = user.email;

    $scope.phoneCall.fName = user.fName;

    console.log($scope.phoneCall.userId);

    var vehicle = $cookies.get('vehicle');

    console.log(vehicle);

    $scope.firstName = user.fName;

    console.log($scope.firstName);

    $http.get('/api/vehicles/' + vehicle)
    .success(function(data){


      $scope.phoneCall.manufacturer = data.manufacturer;
      $scope.phoneCall.model = data.model;
      $scope.phoneCall.vehicleId = data._id;

console.log($scope.phoneCall);


    })
    .error(function(data){
      // do something
    })

    $http.get('/api/loanrequests/' + $scope.phoneCall.userId)
    .success(function(data){


      $scope.phoneCall.loanAmount = data.loanAmount;


console.log($scope.phoneCall);


    })
    .error(function(data){
      // do something
    })



  $scope.arrangeCall = function(){

    $http.post('/api/phonecalls', $scope.phoneCall)
    .success(function(data){

      $location.path('/apply/phone_call');


    })
    .error(function(data){
      // do something
    })

  }

  });
