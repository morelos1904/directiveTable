angular.module('app',[])
  .controller('ItemsController', function($scope) {
    $scope.items = [
      {name: 'Item 1', color: 'green', price: 5.0},
      {name: 'Item 2', color: 'blue', price: 4.93}
    ];
  });