'use strict';

describe('Controller: NewLoanYourVehicleCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var NewLoanYourVehicleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewLoanYourVehicleCtrl = $controller('NewLoanYourVehicleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
