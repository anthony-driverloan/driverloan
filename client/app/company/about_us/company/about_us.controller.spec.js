'use strict';

describe('Controller: CompanyAboutUsCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var CompanyAboutUsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyAboutUsCtrl = $controller('CompanyAboutUsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
