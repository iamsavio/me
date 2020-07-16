
var app = angular.module('myApp', ['voiceRss']);
// app.config(['$routerProvider',function($routeProvider) {
//     $routeProvider
//     .when("/", {
//       templateUrl : "main.html"
//     })
//     .when("/red", {
//       templateUrl : "gallery.html"
//     })
//     .when("/green", {
//       templateUrl : "about.html"
//     }).otherwise({redirectTo:'/'})
    
// }]);

app.config(['ttsProvider', function (ttsProvider) {
    ttsProvider.setSettings({ key: '4a45337a5dfd410b93d8e40e0fceb10d' });
}]);

app.controller('ctrl', ['tts', '$scope',function (tts,$scope) {
  $scope.txtToSpeech=""
$scope.readTxt=()=>{
  if($scope.txtToSpeech){
     tts.speech({
        src: $scope.txtToSpeech,
        hl: 'en-us',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
  }
}

  
}]);