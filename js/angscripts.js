var app = angular.module("app", []);

app.controller('main', ['$scope', '$http', function($scope, $http){

    //Experienze
    $http.get('./json/exps.json').then(function(response){

        $scope.exps = response.data;

        //From  / To
        $scope.exps.from = ;
        $scope.exps.to = response.data.Period.Current == "true" ? "Oggi" : response.data.Period.To._day+"/"+response.data.Period.To._month+"/"+response.data.Period.To._year;
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
    }];
    $scope.info = "Prova";


}]);