'use strict';

describe('Controller: YourLoanPaymentOptionsCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var YourLoanPaymentOptionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YourLoanPaymentOptionsCtrl = $controller('YourLoanPaymentOptionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
