'use strict';

describe('Controller: CompanyTermsCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var CompanyTermsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyTermsCtrl = $controller('CompanyTermsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
