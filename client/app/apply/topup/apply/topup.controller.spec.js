'use strict';

describe('Controller: ApplyTopupCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var ApplyTopupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplyTopupCtrl = $controller('ApplyTopupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
