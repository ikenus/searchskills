var app = angular.module("app", []);

app.controller('main', ['$scope', '$http', function($scope, $http){

    //Experienze
    $http.get('./json/exps.json').then(function(response){

        $scope.exps = response.data;

    });    
    // Corsi
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
        }, {
        id: "4",
        first: 'Andrew',
        last: 'Johnson'
        }, {
        id: "5",
        first: 'Andrew',
        last: 'Johnson'
        }, {
        id: "6",
        first: 'Andrew',
        last: 'Johnson'
        }, {
        id: "7",
        first: 'Andrew',
        last: 'Johnson'
        }, {
        id: "8",
        first: 'Andrew',
        last: 'Johnson'
        }, {
        id: "9",
        first: 'Andrew',
        last: 'Johnson'
        }, {
        id: "10",
        first: 'Andrew',
        last: 'Johnson'                                
        }, {
        id: "11",
        first: 'Andrew',
        last: 'Johnson'        
    }];
    $scope.info = "Prova";


}]);