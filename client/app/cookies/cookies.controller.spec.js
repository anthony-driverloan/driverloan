'use strict';

describe('Controller: CookiesCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var CookiesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CookiesCtrl = $controller('CookiesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
