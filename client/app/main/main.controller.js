'use strict';

angular.module('driverloanV1App')
  .controller('MainCtrl', function ($scope, $http) {

    // With JQuery
    $('#ex1').slider({
    	formatter: function(value) {
    		return 'Current value: ' + value;
    	}
    });

  

  });
