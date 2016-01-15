var timelineControllers = angular.module('timelineControllers', []);

//chapter 1 timeline
timelineControllers.controller('timelineController', ['$scope', '$http', function($scope, $http) {
  $http.get('source/timeline.json').success(function(data) {
    $scope.events = data;
    $scope.letterLimit = 80;
    document.body.style.width = '3400px';
  });
}]);

//chapter 2 scroll
timelineControllers.controller('Chap2Controller', ['$scope', '$http', function($scope, $http) {
  $http.get('source/chap2-scroll.json').success(function(data) {
    $scope.events = data;
    $scope.letterLimit = 100;
    $scope.animationsEnabled = true;
    document.body.style.width = '7700px';

  });
}]);

//details controller
timelineControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams, $element) {
  $http.get('source/chap2-scroll.json').success(function(data) {
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

    var myaudio = $('#audio1_1');
    $('.audio1_1').css("border","3px solid yellow");
    console.log('document', myaudio);
    document.getElementById('audio1_1').addEventListener('ended',myHandler,false);
       function myHandler(e) {
         alert('ended');
           // What you want to do after the event
       }

     function endaudio() {
       window.location.href="#/details/1";
     }

  });
}]);
