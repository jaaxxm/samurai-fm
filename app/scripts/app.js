'use strict';

angular.module('samuraiFMApp', ['ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/mix', {
        templateUrl: 'views/mix.html',
        controller: 'MixCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // document.getElementById("MyElement").className = "r-b";
  });
