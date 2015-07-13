'use strict';

describe('Controller: LogbookLoansHowItWorksCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var LogbookLoansHowItWorksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogbookLoansHowItWorksCtrl = $controller('LogbookLoansHowItWorksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
