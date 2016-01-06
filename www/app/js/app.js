var myApp = angular.module('myApp', [
  'ngRoute',
  'timelineControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

 //index page
  when('/main', {
    templateUrl: 'partials/chap0_main.html'
  }).

  //chapter 1 Intro
  when('/intro', {
    templateUrl: 'partials/chap1_intro.html'
  }).

  //chapter 1 timeine page
  when('/timeline', {
    templateUrl: 'partials/chap1_timeline.html',
    controller: 'timelineController'
  }).

  //chapter 2 scroll
  when('/chap2', {
    templateUrl: 'partials/chap2_scroll.html',
    controller: 'Chap2Controller'
  }).

  //chapter 2 timeline page
  when('/details/:itemId',{
    templateUrl:'partials/details.html',
    controller:'DetailsController'
  }).

  //default page
  otherwise({
    redirectTo: '/main'
  });
}]);
