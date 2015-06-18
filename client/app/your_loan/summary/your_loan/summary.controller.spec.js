'use strict';

describe('Controller: YourLoanSummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var YourLoanSummaryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YourLoanSummaryCtrl = $controller('YourLoanSummaryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
