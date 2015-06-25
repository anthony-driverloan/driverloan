'use strict';

angular.module('driverloanV1App')
  .controller('NewLoanLoanDetailsCtrl', function ($scope, $location, $http, vehicleValue) {
    $scope.message = 'Hello';

    $scope.loan = {};

    var loanSelectArray = [];

    var createLoanValues = function(){
      var i = 500;
      var test = vehicleValue.value;

      for (var i; i != test; i += 250) {
          console.log(i);
          //Do something

          loanSelectArray.push({value:'£ '+i});

      }
    }

    $scope.loanPurpose = [{value:"Debt Consolidation"},{value:"Car/Vehicle"},{value:"Home Improvements"},{value:"Wedding"},{value:"Small Business"},{value:"Other"}];

  createLoanValues();
  loanSelectArray.push({value:'£ '+vehicleValue.value});
  $scope.loanSelect = loanSelectArray;
    console.log(loanSelectArray);

    $scope.loanTerm = [{value:'6 months'},{value:'12 months'},{value:'18 months'},{value:'24 months'}];


    $scope.loanRequest = function(){

             $location.path('/apply/confirm');
            var user = Auth.getCurrentUser();

            console.log(user.mobileNumber);

            var mobile = user.mobileNumber.slice(1);
            console.log($scope.loan);

           $http.post('/api/loanRequests',$scope.loan)
.success(function(data){


  console.log(data)
})
.error(function(data){
  console.log(data)
});




    }


  });
