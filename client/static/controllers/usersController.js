app.controller('usersController', ['$scope','$location','UserFactory', function($scope, $location, UserFactory){
    $scope.test = "hallo";
    $scope.create = function(user){
        UserFactory.create(user,function(){
            $location.url('/dashboard');
        })
    }
    $scope.login = function(user){
        UserFactory.login(user,function(){
            $location.url('/questions');
        })
    }
    $scope.logout = function(){
        UserFactory.logout(function(){
            $location.url('/login');
        })
    }
}])
