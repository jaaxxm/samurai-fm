'use strict';

angular.module('samuraiFMApp')
  .controller('MixCtrl', function ($scope) {
        $scope.genres = [
            'House',
            'Disco',
            'Breaks',
            'Hip-Hop',
            'Electronica',
            'World',
            'Crossover',
            'Techno',
            'Funk',
            'Dubstep',
            'Glitch',
            'Downbeat',
            'Reggae',
            'Mash-Up',
            'Electro',
            'Soul',
            'Broken',
            'Garage',
            'Ambient',
            'Jazz',
            'Eclectic',
            'Trance',
            'R-B',
            'Drum-Bass',
            'Scratch',
            'Noise',
            'Rock',
            'Verbal',
        ];
        $scope.styles = [
            'Deep',
            'New',
            'Dark',
            'Urban',
            'Classic',
            'Dirty',
            'Balearic',
            'Cosmic',
            'Hard',
            'Jazzy',
            'Abstract',
            'Latin',
            'Future',
            'Tribal',
            'Bit',
            'Funky',
            'Retro',
            'Afro',
            'Anthem',
            'Prog',
            'Dub',
            'Hardcore',
            'Minimal',
            'Punk'
        ];
  });
