'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope,$http) {

  var books =[];
  $http.get('books.json')
      .then(function(res){
        $scope.books = res.data;
    });

  $scope.order = 'title';

  $scope.genres = [{"id":2,"name":"Music","color":"#000000"},{"id":3,"name":"Nature","color":"#6d9c5a"}];

  $scope.selectedGenres = ['Music','Nature'];
  $scope.allGenres = ['Music','Nature','Action'];

  $scope.filterByGenres = function(book) {
    return ($scope.selectedGenres.indexOf(book.genre.name) !== -1);
  };

  $scope.offsetClass = function(item, index){
    if(index == 0){
      return item.value;
    }
    return '';
  };


}]);