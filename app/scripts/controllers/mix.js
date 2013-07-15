'use strict';

angular.module('samuraiFMApp')
    .controller('MixCtrl', function ($scope) {
        $scope.isCollapsed = true;
        $scope.shouts = [
            {
                member: 'Archibal',
                timestamp: '00:02',
                comment: 'sublime'
            },
            {
                member: 'garix',
                timestamp: '00:12',
                comment: 'old school // ... it\'s a pleasure!'
            },
            {
                member: 'aaguirre',
                timestamp: '16:15',
                comment: 'relaxing :)'
            },
            {
                member: 'synergist',
                timestamp: '21:15',
                comment: 'beautiful!'
            },
            {
                member: 'olulo original',
                timestamp: '22:15',
                comment: 'Truly nice!'
            },
            {
                member: 'Mark Hjorthoy',
                timestamp: '40:02',
                comment: 'Fantastic! What agreat mix of music gentlemen!'
            }
        ];
    });