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

var timelineControllers = angular.module('timelineControllers', []);

//chapter 1 timeline
timelineControllers.controller('timelineController', ['$scope', '$http', function($scope, $http) {
  $http.get('source/timeline.json').success(function(data) {
    $scope.events = data;
    // document.body.style.width = '2300px';
  });
}]);

//chapter 2 scroll
timelineControllers.controller('Chap2Controller', ['$scope', '$http', function($scope, $http) {
  $http.get('source/chap2_scroll.json').success(function(data) {
    $scope.events = data;
    document.body.style.width = '2100px';
  });
}]);

timelineControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('source/chap2_scroll.json').success(function(data) {
    $scope.events = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0){
      $scope.prevItem = Number($routeParams.itemId) -1;
    } else {
      $scope.prevItem = $scope.events.length -1;
    }
    if ($routeParams.itemId < $scope.events.length -1){
      $scope.nextItem = Number($routeParams.itemId) +1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

var myApp2 = angular.module('myApp2', []);

myApp2.controller('MyController', ['$scope', '$http', function($scope, $http) {
  $http.get('source/chap2_scroll.json').success(function(data) {
    $scope.artists = data;
  });
}]);


$(document).ready(function() {
        $('.intro').css({ opacity: 1});

        // $('body').css('display', 'none');
        // $('body').fadeIn(1000);

});

setInterval(function() {
  $(".logo-property")
  // .velocity('fadeIn', {duration: 500, easing: easeOut, delay: 3})
  // .velocity({ blur: 10 }, 1200);

})


//timecard fade in on scroll animation
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var right_of_object = $(this).offset().left + $(this).outerWidth();
            var right_of_window = $(window).scrollLeft() + $(window).width();
            /* If the object is completely visible in the window, fade it it */
            if(right_of_object < 1200){
              $(this).velocity({'opacity':'1'},100);
            }
            else if( right_of_window > right_of_object ){

                $(this).velocity({'opacity':'1', 'margin-left':'50px'},800);
            }
        });
    });
