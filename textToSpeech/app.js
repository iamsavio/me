
var app = angular.module('myApp', ['voiceRss','ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "text.html"
    })
    .when("/UploadDoc", {
      templateUrl : "upload.html"
    })
    .when("/Bible", {
      templateUrl : "bible.html"
    }).otherwise({redirectTo:'/'})
    
}]);

app.config(['ttsProvider', function (ttsProvider) {
    ttsProvider.setSettings({ key: '4a45337a5dfd410b93d8e40e0fceb10d' });
}]);

app.controller('ctrl', ['tts', '$scope','$http',function (tts,$scope,$http) {
  
var req = {
	"async": true,
	"crossDomain": true,
	"url": "https://bible-references.p.rapidapi.com/api/passages?lang=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bible-references.p.rapidapi.com",
		"x-rapidapi-key": "9422a96803msh3cd21a2ec80bdaep183961jsnceb2210261c7"
	}
}
$scope.books=[]
$scope.passage=""
$scope.chapter=""
$scope.verse_start=""
$scope.verse_end=""

$http(req).then((data) => {
      $scope.books=data.data.data['3'].passages
    })

 $scope.readVerse=()=>{
 var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bible-references.p.rapidapi.com/api/verses/kjv/"+$scope.passage+"/"+$scope.passage+"%20"+$scope.chapter+"?verse_start="+$scope.verse_start+"&verse_end="+$scope.verse_end,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bible-references.p.rapidapi.com",
		"x-rapidapi-key": "9422a96803msh3cd21a2ec80bdaep183961jsnceb2210261c7"
	}
}

$.ajax(settings).done(function (response) {
  let newArray =[]
  response.data[0].verse.map((txt)=>{
   let arr = txt.text.replace(/[&\/\\#+()$~%'":*<>{}]/g, '')
    newArray.push(arr)
  })

  $scope.txtToSpeech= newArray.toString()
  $scope.readTxt()

});
}


  //read text
  $scope.txtToSpeech=""
$scope.readTxt=()=>{
  if($scope.txtToSpeech){
     tts.speech({
        src: $scope.txtToSpeech,
        hl: 'en-us',
        r: -3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
  }
}

  
}]);