'use strict';

describe('Controller: YourLoanErrorCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var YourLoanErrorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YourLoanErrorCtrl = $controller('YourLoanErrorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
