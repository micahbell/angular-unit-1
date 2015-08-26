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

app.controller('Directives', function($scope) {
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ["\u2660", "\u2663", "\u2665", "\u2666"];
  $scope.repeat = [1,1,2,5,6,9,9,9];
  $scope.keys = { name: 'Liz', food: 'Cheese', movie: 'Star Wars'}
})
