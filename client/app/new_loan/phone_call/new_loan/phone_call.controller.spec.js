'use strict';

describe('Controller: NewLoanPhoneCallCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var NewLoanPhoneCallCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewLoanPhoneCallCtrl = $controller('NewLoanPhoneCallCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
