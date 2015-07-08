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


    // if you want to use the 'fire' or 'disable' fn,
    // you need to save OuiBounce to an object
    var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
      aggressive: true,
      timer: 0,
      callback: function() { console.log('hi') }
    });

    $('body').on('click', function() {
      $('#ouibounce-modal').hide();
    });

    $('#ouibounce-modal .modal-footer').on('click', function() {
      $('#ouibounce-modal').hide();
    });

    $('#ouibounce-modal .modal').on('click', function(e) {
      e.stopPropagation();
    });




  });
