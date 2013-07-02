'use strict';

angular.module('samuraiFMApp')
  .controller('EventsCtrl', function ($scope) {
    $scope.featured = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isCollapsed = false;
  });
