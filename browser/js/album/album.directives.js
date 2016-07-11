'use strict'

juke.directive('albumList', function(AlbumFactory) {
    return {
        restrict: 'E',
        templateUrl: '/js/album/templates/albums.html',
        scope: {
            theAlbums: '='
        },
        link: function(scope, element, attribute) {
            angular.extend(scope, AlbumFactory); // copy props from param2 to param1
        }
    }
})