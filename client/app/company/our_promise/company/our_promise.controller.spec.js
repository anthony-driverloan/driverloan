'use strict';

describe('Controller: CompanyOurPromiseCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var CompanyOurPromiseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyOurPromiseCtrl = $controller('CompanyOurPromiseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
