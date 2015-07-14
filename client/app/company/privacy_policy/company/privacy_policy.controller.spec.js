'use strict';

describe('Controller: CompanyPrivacyPolicyCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var CompanyPrivacyPolicyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyPrivacyPolicyCtrl = $controller('CompanyPrivacyPolicyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
