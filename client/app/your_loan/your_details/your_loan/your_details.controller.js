'use strict';

angular.module('driverloanV1App')
  .controller('YourLoanYourDetailsCtrl', function ($scope, Auth) {

    var user = Auth.getCurrentUser();

    $scope.address = {};

        $scope.user = {};

    $scope.address.lineOne = user.currentAddressLineOne;
      $scope.address.lineTwo = user.currentAddressLineTwo;
      $scope.address.town = user.currentAddressTown;
      $scope.address.county = user.currentAddressCounty;
      $scope.address.postcode = user.currentAddressPostcode;


        $scope.user.email = user.email;
          $scope.user.mobile = user.mobileNumber;
            $scope.user.work = user.workNumber;
              $scope.user.home = user.homeNumber;
  });
