'use strict';

describe('Controller: LogbookLoansEligibilityCriteriaCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var LogbookLoansEligibilityCriteriaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogbookLoansEligibilityCriteriaCtrl = $controller('LogbookLoansEligibilityCriteriaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
