'use strict';

angular.module('driverloanV1App')
  .controller('NewLoanLoanDetailsCtrl', function ($scope, $location, $http, $cookies, Auth) {

        $scope.loan = {};

    var vehicleCookie = $cookies.get('vehicle');



    // Simple GET request example :
  $http.get('/api/vehicles/' + vehicleCookie).
    success(function(data, status, headers, config) {
      var loanSelectArray = [];
          var test = data.value;

          var i = 300;


          for (var i; i != test; i += 50) {
              console.log(i);
              //Do something

              loanSelectArray.push({value:i});

          }

          loanSelectArray.push({value:test});
          $scope.loanSelect = loanSelectArray;

    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });


    $scope.repayment = function(){

        $http.post('/api/loanRepayments', {credit: $scope.loan.amount.value,term: $scope.loan.term.value})
        .success(function(data){
          console.log(data);
          $scope.repaymentValue = data.value;
        })
        .error(function(data){
          // do something
        })

    }







    $scope.loanPurpose = [{value:"Debt Consolidation"},{value:"Car/Vehicle"},{value:"Home Improvements"},{value:"Wedding"},{value:"Small Business"},{value:"Other"}];




    $scope.loanTerm = [{value:6},{value:12},{value:18},{value:24}];


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
