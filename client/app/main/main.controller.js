'use strict';

angular.module('driverloanV1App')
  .controller('MainCtrl', function ($scope, $http) {

    // With JQuery
    $('#ex1').slider({
    	formatter: function(value) {
    		return 'Current value: ' + value;
    	}
    });


    // With JQuery
    $('#ex2').slider({
      formatter: function(value) {
        return 'Current value: ' + value;
      }
    });



  });
