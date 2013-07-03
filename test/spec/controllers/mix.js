'use strict';

describe('Controller: MixCtrl', function () {

  // load the controller's module
  beforeEach(module('samuraiFMApp'));

  var MixCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MixCtrl = $controller('MixCtrl', {
      $scope: scope
    });
  }));

});
