var app = angular.module('ContactsApp', []);

app.controller('contactsController', function($scope) {
  $scope.contacts = [
    {name: 'Micah', email: 'micah@gmail', phone: '(678) 779-6282'},
    {name: 'Jonah', email: 'jonah@gmail', phone: '(770)-983-1786'},
    {name: 'T-Ray', email: 't-ray@gmail', phone: '(970)-819-2017'}
  ];
  $scope.addContact = function(name, email, phone) {
    $scope.name = name;
    $scope.email = email;
    $scope.phone = phone;
    $scope.contacts.push({name: name, email: email, phone: phone});
    console.log($scope.contacts);
  };
});

// ?? Try binding name, email, and phone as properties on one newContact object rather than creating 3 different properties on the $scope
