'use strict';

angular.module('driverloanV1App')
  .controller('SignupCtrl', function ($scope, Auth, $location, $http) {
    
    
    
    $scope.user = {};
    $scope.errors = {};
    
   
     

    $scope.register = function(form) {
      $scope.submitted = true;
      
var opts = {
  lines: 13 // The number of lines to draw
, length: 12 // The length of each line
, width: 2 // The line thickness
, radius: 10 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var target = document.getElementById('loader')
var spinner = new Spinner(opts).spin(target);

console.log($scope.user);


$('#next-btn').prop('disabled', true);

      if(form.$valid) {
        Auth.createUser({
          title: $scope.user.title,
          fName: $scope.user.fName,
          mInitials: $scope.user.mInitials,
          lName: $scope.user.lName,
          dobDay: $scope.user.dobDay,
          dobMonth: $scope.user.dobMonth,
          dobYear: $scope.user.dobYear,
          mobileNumber: $scope.user.mobileNumber,
          residenceStatus: $scope.user.residenceStatus,
          currentAddressPostcode: $scope.user.currentAddressPostcode,
          currentAddressLineOne: $scope.user.currentAddressLineOne,
          currentAddressLineTwo: $scope.user.currentAddressLineTwo,
          currentAddressTown: $scope.user.currentAddressTown,
          currentAddressCounty: $scope.user.currentAddressCounty,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/new_loan/your_vehicle');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

  });
