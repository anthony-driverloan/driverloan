'use strict';

describe('Controller: LogbookLoansAgreementsCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var LogbookLoansAgreementsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogbookLoansAgreementsCtrl = $controller('LogbookLoansAgreementsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
