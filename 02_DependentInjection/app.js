var myApp = angular.module('angularApp',[]);

myApp.controller('mainControllerCtrl', ['$scope', function ($scope) {

  $scope.name = 'John Doe'
  $scope.occupation = 'Coder';
    console.log($scope);
}])

var Person = function (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function logPerson()
{
  var john = new Person('Jonh', 'Doe');
  console.log(john);
}

logPerson();
