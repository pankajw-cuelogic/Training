'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'user'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
           when('/login', {
               templateUrl: 'app/login/views/login.html',
               controller: 'userCtrl'
           }).
           when('/home', {
               templateUrl: 'app/user/views/home.html',
               controller: 'homeCtrl'
           }).
         when('/add', {
             templateUrl: 'app/user/views/add.html',
             controller: 'homeCtrl'
         }).
           otherwise({
               redirectTo: '/'
           });
}]);
