var app = angular.module("app", []);

app.controller('main', ['$scope', '$http', function($scope, $http){

    $http.get('./json/courses.json').then(function(response){

        $scope.corsi = response.data;
    });


    $scope.clients = [{
        id: "1",
        first: 'Abraham',
        last: 'Lincoln'
        }, {
        id: "2",
        first: 'Andrew',
        last: 'Johnson'
        }, {
        id: "3",
        first: 'Ulysses',
        last: 'Grant'
    }];
    $scope.info = "Prova";


}]);