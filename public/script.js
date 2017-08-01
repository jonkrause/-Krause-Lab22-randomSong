var app = angular.module('lyricMod', ['ngEmbed', 'ngSanitize']);

app.controller('lyricCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log('angular controller loaded');

    $http({
        method: 'GET',
        url: '/'
    }).then(function (response) {
        console.log('response');
    });

    //    
    //    $http({
    //        method: 'GET',
    //        url: '/songs/song01.html'
    //    }).then(function (response) {
    //        console.log(response);
    //        $scope.lyric01 = response.data
    //        return $scope.lyric01
    //
    //        //        console.log(randSong.lyrics)
    //        //        $scope.lyricObj01 = response.data
    //    });



    $http({
        method: 'GET',
        url: '/lyrics'
    }).then(function (response) {
        console.log(response.data);
        $scope.songArray = response.data;

        $scope.randSong = $scope.songArray[Math.floor(Math.random() * $scope.songArray.length)];

        $scope.image = {
            url: $scope.randSong.image
        }
        $scope.audio = {
            url: $scope.randSong.mp3
        }

        $scope.htmlLyric = $scope.randSong.lyrics

        console.log($scope.lyric01);


        //        console.log($scope.lyricObj01)
        //        return $scope.htmlLyric

    });
    //    console.log($scope.htmlLyric)





}]);
