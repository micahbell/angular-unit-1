var app = angular.module('ContactsApp', []);

app.controller('contactsController', function($scope) {
  $scope.contacts = [
    {name: 'Micah', email: 'micah@gmail', phone: '111-111-1111'},
    {name: 'Jonah', email: 'jonah@gmail', phone: '222-222-2222'},
    {name: 'T-Ray', email: 't-ray@gmail', phone: '333-333-3333'}
  ];
  $scope.addContact = function(name, email, phone) {
    $scope.name = name;
    $scope.email = email;
    $scope.phone = phone;
    $scope.contacts.push({name: name, email: email, phone: phone});
    console.log($scope.contacts);
  };
});
