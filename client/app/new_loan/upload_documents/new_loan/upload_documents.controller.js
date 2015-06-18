'use strict';

angular.module('driverloanV1App')
  .controller('NewLoanUploadDocumentsCtrl', function ($scope, $location) {
  
  $scope.arrangeCall = function(){
    $location.path('/new_loan/phone_call');
  }
  
  });
