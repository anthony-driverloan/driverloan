'use strict';

describe('Controller: SignAgreementCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var SignAgreementCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignAgreementCtrl = $controller('SignAgreementCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
