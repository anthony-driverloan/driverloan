'use strict';

angular.module('driverloanV1App')
  .controller('NewLoanUploadDocumentsCtrl', function ($scope, $location) {
  
  $scope.arrangeCall = function(){
    $location.path('/apply/phone_call');
  }
  
  });
