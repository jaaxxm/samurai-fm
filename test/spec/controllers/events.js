'use strict';

describe('Controller: EventsCtrl', function () {

  // load the controller's module
  beforeEach(module('samuraiFMApp'));

  var EventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsCtrl = $controller('EventsCtrl', {
      $scope: scope
    });
  }));

});
