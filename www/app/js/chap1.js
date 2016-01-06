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
