'use strict';

describe('Controller: CompanyPressCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var CompanyPressCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyPressCtrl = $controller('CompanyPressCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
