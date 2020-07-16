var app =angular.module('root',['ngRoute'])

app.config(['$routerProvider',function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "main.html"
    })
    .when("/red", {
      templateUrl : "gallery.html"
    })
    .when("/green", {
      templateUrl : "about.html"
    }).otherwise({redirectTo:'/'})
    
}]);