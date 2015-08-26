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

app.controller('CameraSale', function($scope) {
  $scope.cameras = [
    {
      title: "Nikon D3100 DSLR",
      image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ]

})
