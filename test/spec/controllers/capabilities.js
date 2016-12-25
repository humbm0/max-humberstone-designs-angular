'use strict';

describe('Controller: CapabilitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSiteApp'));

  var CapabilitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CapabilitiesCtrl = $controller('CapabilitiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CapabilitiesCtrl.awesomeThings.length).toBe(3);
  });
});
