/* Start Angular */
var app = angular.module('appName', ['ngRoute']);

/* Configure our routeProvider provider */
app.config(function($routeProvider, $httpProvider){
    $httpProvider.interceptors.push(
        function($q, $location) {
        return {
            'responseError':function(rejection){
            if (rejection.status == 401){
                $location.url('/login');
            }
            return $q.reject(rejection);
        }
        };
    });


    $routeProvider
        .when('/', {
            templateUrl:'partials/loginreg.html',
            controller:'usersController'
        })
        .when('/login', {
            templateUrl:'partials/loginreg.html',
            controller:'usersController'
        })
        .when('/questions', {
            templateUrl:'partials/dashboard.html'
        })
        .when('/new_question', {
            templateUrl:'partials/new_question.html'
        })
        .when('/question/:id', {
            templateUrl:'partials/question.html'
        })
        .when('/user/:id',{
            templateUrl:'partials/user.html'
        })
        .otherwise({
            redirectTo:'/'
        })
})
