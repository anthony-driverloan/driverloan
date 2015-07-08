'use strict';

angular.module('driverloanV1App')
  .controller('MainCtrl', function ($scope, $http) {

    // With JQuery
    // With JQuery
  $("#ex1").slider();
  $("#ex1").on("slide", function(slideEvt) {
  	$("#ex1SliderVal").text(slideEvt.value);
    $("#aprSliderVal").text(slideEvt.value);
    console.log(slideEvt.value);
  });

    // With JQuery
    $("#ex2").slider();
    $("#ex2").on("slide", function(slideEvt) {
    	$("#ex2SliderVal").text(slideEvt.value);
      $("#monthSliderVal").text(slideEvt.value);

    });




  });
