'use strict';

angular.module('driverloanV1App')
  .controller('MainCtrl', function ($scope, $http, $cookies) {

        mixpanel.track("Visited site"); // mixpanel

$scope.loan = {};

$scope.loan.amount = 3000;
$scope.loan.term = 24;


    // With JQuery
    // With JQuery
  $("#ex1").slider();
  $("#ex1").on("slide", function(slideEvt) {
  	$("#ex1SliderVal").text(slideEvt.value);
    $("#aprSliderVal").text(slideEvt.value);


    $scope.loan.amount = slideEvt.value;

    var CalcRepay = function() {
        var m= 12;
      var p=parseInt(slideEvt.value);
      var i=0;
      var f=0;
      var n=parseInt($scope.loan.term);
      var r=79.9;

      //calculate the 'x-factor' ...
      var x=1/Math.pow(1+r/100,1/m)
      //calculate the repayment ...
      var a=((p-i-f*Math.pow(x,n))*(x-1))/(Math.pow(x,n+1)-x)
     return TwoDP(a);
    }

    function TwoDP(num) {
      if (isNaN(num)) num="0"
      num="$"+Math.round(100*num)/100;
      if (num.indexOf(".")==-1) num+=".00";
      if (num.indexOf(".")==num.length-2) num+="0";
      return num.substring(1,num.length);
    }

    function OneDP(num) {
      if (isNaN(num)) num="0"
      num="$"+Math.round(10*num)/10;
      if (num.indexOf(".")==-1) num+=".0";
      return num.substring(1,num.length);
    }
    $("#monthlyPayment").text(CalcRepay());

    var total = CalcRepay() * $scope.loan.term;
      $("#totalPayment").text(TwoDP(total));

    return $scope.loan.amount;



  });

    // With JQuery
    $("#ex2").slider();
    $("#ex2").on("slide", function(slideEvt) {
    	$("#ex2SliderVal").text(slideEvt.value);
      $("#monthSliderVal").text(slideEvt.value);

    $scope.loan.term = slideEvt.value;


    var CalcRepay = function() {
        var m= 12;
      var p=parseInt($scope.loan.amount);
      var i=0;
      var f=0;
      var n=parseInt(slideEvt.value);
      var r=79.9;

      //calculate the 'x-factor' ...
      var x=1/Math.pow(1+r/100,1/m)
      //calculate the repayment ...
      var a=((p-i-f*Math.pow(x,n))*(x-1))/(Math.pow(x,n+1)-x)
     return TwoDP(a);
    }

    function TwoDP(num) {
      if (isNaN(num)) num="0"
      num="$"+Math.round(100*num)/100;
      if (num.indexOf(".")==-1) num+=".00";
      if (num.indexOf(".")==num.length-2) num+="0";
      return num.substring(1,num.length);
    }

    function OneDP(num) {
      if (isNaN(num)) num="0"
      num="$"+Math.round(10*num)/10;
      if (num.indexOf(".")==-1) num+=".0";
      return num.substring(1,num.length);
    }

    $("#monthlyPayment").text(CalcRepay());

    var total = CalcRepay() * $scope.loan.term;
      $("#totalPayment").text(TwoDP(total));

return $scope.loan.term;

    });


    // if you want to use the 'fire' or 'disable' fn,
    // you need to save OuiBounce to an object
    var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
      aggressive: false,
      timer: 0,
      callback: function() { $('#resetpass-modal').show() }
    });



    $('#close-modal').on('click', function() {
      $('#resetpass-modal').hide();
    });

    $('#ouibounce-modal .modal').on('click', function(e) {
      e.stopPropagation();
    });




  });
