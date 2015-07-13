'use strict';

describe('Controller: LogbookLoansCompareUsCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var LogbookLoansCompareUsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogbookLoansCompareUsCtrl = $controller('LogbookLoansCompareUsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
