var app = angular.module("pingPongApp", []);

app.controller('PingPong', function($scope) {
  $scope.score1 = 0;
  $scope.score2 = 0;
  $scope.total = 0;
  $scope.serving = 'Serving';
  $scope.increment1 = function() {
    $scope.total += 1;
    $scope.score1 += 1;
  };
  $scope.increment2 = function() {
    $scope.total += 1;
    $scope.score2 += 1;
  };
  $scope.reset = function() {
    $scope.score1 = 0;
    $scope.score2 = 0;
    $scope.total = 0;
  };
});




// $scope.total += 1;
// if($scope.score1 < 11) {
//   for (var i = 0; i < 1; i++) {
//     $scope.score1 += 1;
//   }
// } else { $scope.score1 += 0; }
// };


//
