'use strict';

angular.module('samuraiFMApp')
    .controller('MainCtrl', function ($scope) {
        $scope.featured = [
            {
                title: 'DJ 3000 set', 
                imgSrc: 'img/featured/1.jpg',
                imgWave: 'img/wave/1.png',
                genres : [ 
                    'House',
                    'Techno'
                ],
                styles : [
                    'Deep'
                ], 
                desc: 'Donec parabellum quensistarum'
            }, 
            {
                title: 'Tapesh', 
                imgSrc: 'img/featured/2.jpg',
                imgWave: 'img/wave/2.png',
                genres : [ 
                    'House',
                    'Techno'
                ],
                styles : [
                    'Deep'
                ], 
                desc: 'lorem Ipsum decomet'
            }, 
            {
                title: 'Ben Mono', 
                imgSrc: 'img/featured/3.jpg',
                imgWave: 'img/wave/1.png',
                genres : [ 
                    'House',
                    'Techno'
                ],
                styles : [
                    'Deep'
                ], 
                desc: 'lorem Ipsum decomet'
            }, 
            {
                title: 'Tapesh', 
                imgSrc: 'img/featured/4.jpg',
                imgWave: 'img/wave/2.png',
                genres : [ 
                    'House',
                    'Techno'
                ],
                styles : [
                    'Deep'
                ], 
                desc: 'lorem Ipsum decomet'
            },             
            {
                title: 'DJ 3000 set', 
                imgSrc: 'img/featured/5.jpg',
                imgWave: 'img/wave/2.png',
                genres : [ 
                    'House',
                    'Techno'
                ],
                styles : [
                    'Deep'
                ], 
                desc: 'lorem Ipsum decomet'
            }
        ];
        $scope.latest = [
            {
                title: 'DJ 3000 set',                 
                imgArtist: 'img/artist/1.jpg',
                imgWave: 'img/wave/1.png',
                duration: '124'
            }, 
            {
                title: 'DJ 3000 set', 
                imgArtist: 'img/artist/2.jpg',
                imgWave: 'img/wave/2.png',
                genre: 'House Techno',
            }, 
            {
                title: 'DJ 3000 set',                 
                imgArtist: 'img/artist/3.jpg',
                imgWave: 'img/wave/1.png',
                duration: '124'
            }, 
            {
                title: 'DJ 3000 set',                 
                imgArtist: 'img/artist/2.jpg',
                imgWave: 'img/wave/1.png',
                duration: '124'
            }, 
            {
                title: 'DJ 3000 set',                 
                imgArtist: 'img/artist/1.jpg',
                imgWave: 'img/wave/1.png',
                duration: '124'
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

        // var containerElement, scroller;
        // containerElement = angular.element('.box-scroll');
        // scroller = new FTScroller(containerElement, {
        //     scrollbars: false,
        //     scrollingX: false
        // });

    });