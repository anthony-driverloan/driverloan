'use strict';

angular.module('driverloanV1App')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
       $scope.loading = false; // start loading
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {


      $scope.submitted = true;

      if(form.$valid) {
        $('#next-btn').prop('disabled', true);
         $scope.loading = true; // start loading
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/your_loan/summary');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
