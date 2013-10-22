var myApp = angular.module('myApp', []);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/welcome.html'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    });
});