'use strict';

describe('Controller: UCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var UCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UCtrl = $controller('UCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
