'use strict';

angular.module('driverloanV1App')
  .controller('NewLoanYourVehicleCtrl', function ($scope, Auth, $http, $location) {
 
 
  $scope.vehicle = {}
 
    $scope.newVehicle = function(form){
      
 
          $location.path('/apply/personal_details');
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


$('#next-btn').prop('disabled', true);

  $location.path('/new_loan/loan_details');


var userId = Auth.getCurrentUser();

console.log($scope.vehicle);

$http.post('/api/vehicles',{userId:userId._id, registration:$scope.vehicle.registration, mileage:$scope.vehicle.mileage})
.success(function(data){
  console.log(data)
})
.error(function(data){
  console.log(data)
});



   }
    
  });




