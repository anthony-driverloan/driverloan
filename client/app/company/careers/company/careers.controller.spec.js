'use strict';

describe('Controller: CompanyCareersCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var CompanyCareersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyCareersCtrl = $controller('CompanyCareersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
