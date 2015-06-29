'use strict';

describe('Controller: YourLoanYourDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var YourLoanYourDetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YourLoanYourDetailsCtrl = $controller('YourLoanYourDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
