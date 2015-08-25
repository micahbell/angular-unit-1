var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
    $scope.name = "Severus Snape";
})

app.controller('ExercisesController', function($scope) {
  $scope.favColor = 'blue';
  $scope.secondsInACentury = function () {
    var seconds = (60 * 60 * 24* 365 * 100);
    return seconds;
  };
  $scope.rightNow = new Date();
});
