'use strict';

describe('Controller: ArtistsCtrl', function () {

  // load the controller's module
  beforeEach(module('samuraiFMApp'));

  var ArtistsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtistsCtrl = $controller('ArtistsCtrl', {
      $scope: scope
    });
  }));

});
