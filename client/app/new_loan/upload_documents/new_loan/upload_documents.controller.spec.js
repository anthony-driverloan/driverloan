'use strict';

describe('Controller: NewLoanUploadDocumentsCtrl', function () {

  // load the controller's module
  beforeEach(module('driverloanV1App'));

  var NewLoanUploadDocumentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewLoanUploadDocumentsCtrl = $controller('NewLoanUploadDocumentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
