'use strict'

juke.directive('songList', function(PlayerFactory) {
    return {
        restrict: 'E',
        templateUrl: '/js/song/templates/songs.html',
        scope: {
            theSongs: '='
        },
        link: function(scope, element, attribute) {

            scope.getCurrentSong = function () {
                return PlayerFactory.getCurrentSong();
            };

            scope.isPlaying = function (song) {
                return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
            };

            scope.toggle = function (song) {
                if (song !== PlayerFactory.getCurrentSong()) {
                  PlayerFactory.start(song, scope.theSongs);
              } else if ( PlayerFactory.isPlaying() ) {
                  PlayerFactory.pause();
              } else {
                  PlayerFactory.resume();
              }
          };
          
      }
  }
})

juke.directive('doubleClick', function() {
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&'
    },
    link: function(scope, element, attribute) {
      element.on('dblclick', function(){
        scope.doubleClick()
      })
    }
  }
})