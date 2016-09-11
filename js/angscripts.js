var app = angular.module("app", []);

app.controller('main', ['$scope', function($scope){


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