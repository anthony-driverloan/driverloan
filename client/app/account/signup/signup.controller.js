'use strict';

angular.module('driverloanV1App')
  .controller('SignupCtrl', function ($scope, Auth, $location, $http, $cookies) {

   $scope.loading = false; // start loading
    var vehicleCookie = $cookies.get('vehicle');


    // Simple GET request example :
  $http.get('/api/vehicles/' + vehicleCookie).
    success(function(data, status, headers, config) {
    $scope.vehicle = data;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });


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
   $scope.loading = true; // start loading
              $http.post('/api/postcodes',{postcode:$scope.address.postcode})
.success(function(data){
  console.log(data);
   $scope.loading = false; // start loading
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


      $scope.submitted = true;






      $('#next-btn').prop('disabled', true);
       $scope.loading = true; // start loading



        Auth.createUser({
          title: $scope.user.title.value,
          fName: $scope.user.fName,
          mInitials: $scope.user.mInitials,
          lName: $scope.user.lName,
          dobDay: $scope.user.dobDay.name,
          dobMonth: $scope.user.dobMonth.name,
          dobYear: $scope.user.dobYear.name,
          mobileNumber: $scope.user.mobileNumber,
          residenceStatus: $scope.user.residenceStatus.name,
          currentAddressPostcode: $scope.address.postcode,
          currentAddressLineOne: $scope.addressSelected.line_1,
          currentAddressLineTwo: $scope.addressSelected.line_2,
          currentAddressTown: $scope.addressSelected.post_town,
          currentAddressCounty: $scope.addressSelected.county,
          email: $scope.user.email,
          password: $scope.user.password,
          vehicleId: vehicleCookie
        })
        .then( function() {


          // Account created, redirect to home
          $location.path('/apply/loan_details');


                        $scope.getCurrentUser = Auth.getCurrentUser;

                        console.log(getCurrentUser);
        });
      };


  });
