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
      .when('/artist', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl'
      })
      .when('/featured', {
        templateUrl: 'views/featured.html',
        controller: 'FeaturedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // document.getElementById("MyElement").className = "r-b";
  });
