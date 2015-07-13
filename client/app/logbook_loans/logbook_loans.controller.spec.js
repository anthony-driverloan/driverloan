'use strict';

describe('Controller: LogbookLoansCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var LogbookLoansCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogbookLoansCtrl = $controller('LogbookLoansCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
