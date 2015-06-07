'use strict';

describe('Controller: NewLoanLoanDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var NewLoanLoanDetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewLoanLoanDetailsCtrl = $controller('NewLoanLoanDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
