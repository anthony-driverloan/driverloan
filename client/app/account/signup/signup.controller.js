'use strict';

angular.module('driverloanV1App')
  .controller('SignupCtrl', function ($scope, Auth, $location, $http) {
    
    
    
    $scope.user = {};
    $scope.errors = {};
    
    $scope.selectAddress = false;
    
    $scope.addressSelected = '';
    
     $scope.address = {};
        $scope.addresses = null;
        
        $scope.addressIsselected = false;
        
      
        
        /* Select Values */
        
        $scope.titles = [{value:'Mr'},{value:'Mrs'},{value:'Miss'},{value:'Ms'}];
        
        
        
        $scope.birthDays = [{name:1},{name:2},{name:3},{name:4}];
    
     $scope.birthMonths = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name:10},{name:11},{name:12}];
     
          $scope.birthYears = [{name:1990},{name:1992},{name:1933},{name:1974}];
          
          $scope.residenceStatuses = [{name:'Living with parents'}];
          
          $scope.timeAtAddressValues = [{value:'1 year +'}];
          
          

          
          
    
    $scope.findAddress = function(){
      
              $http.post('/api/postcodes',{postcode:$scope.address.postcode})
.success(function(data){
   $('#selectAddress').show();
  $scope.addressIsSelected = true;
  $scope.addresses = data;
  
  

  
  $scope.hideSelectAddress = function(){
      $('#selectAddress').hide();
      console.log($scope.addressLineOne);
    
  }

 
  console.log($scope.addresses);
})
.error(function(data){
  console.log(data)
});
      
      
    };
   
     

    $scope.register = function() {
      
      $location.path('apply/loan_details');
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




// $('#next-btn').prop('disabled', true);

console.log($scope.user.title.value + $scope.user.dobDay.name);

        Auth.createUser({
          title: $scope.user.title.value,
          fName: $scope.user.fName,
          mInitials: $scope.user.mInitials,
          lName: $scope.user.lName,
          dobDay: $scope.user.dobDay.name,
          dobMonth: $scope.user.dobMonth.name,
          dobYear: $scope.user.dobYear.name,
          mobileNumber: $scope.user.mobileNumber,
          residenceStatus: 'Living with parents',
          currentAddressPostcode: 'ig11 0ua',
          currentAddressLineOne: '7 morrison road',
          currentAddressLineTwo: $scope.user.currentAddressLineTwo,
          currentAddressTown: 'barking',
          currentAddressCounty: 'essex',
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/new_loan/your_vehicle');
        });
      };
 

  });
