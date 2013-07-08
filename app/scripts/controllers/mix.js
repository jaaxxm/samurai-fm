'use strict';

angular.module('samuraiFMApp')
    .controller('MixCtrl', function ($scope) {
        $scope.isCollapsed = true;
        $scope.shouts = [
            {
                member: 'Archibal',
                timestamp: '10 hours',
                comment: 'sublime'
            },
            {
                member: 'garix',
                timestamp: '1 month',
                comment: 'old school // ... it\'s a pleasure!'
            },
            {
                member: 'aaguirre',
                timestamp: '1 month',
                comment: 'relaxing :)'
            },
            {
                member: 'synergist',
                timestamp: '1 month',
                comment: 'beautiful!'
            },
            {
                member: 'olulo original',
                timestamp: '1 month',
                comment: 'Truly nice!'
            },
            {
                member: 'Mark Hjorthoy',
                timestamp: '1 month',
                comment: 'Fantastic! What agreat mix of music gentlemen!'
            }
        ];        
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