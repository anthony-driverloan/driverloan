'use strict';

angular.module('driverloanV1App')
  .controller('NewLoanLoanDetailsCtrl', function ($scope, $location, $http, Auth) {
    $scope.message = 'Hello';
    
    $scope.loan = {};
    
    
    $scope.loanRequest = function(){
           
             $location.path('/new_loan/confirm');
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
