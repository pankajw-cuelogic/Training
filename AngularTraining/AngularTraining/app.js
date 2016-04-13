'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'user'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
           when('/login', {
               templateUrl: 'app/modules/login/views/login.html',
               controller: 'userCtrl'
           }).
           when('/home', {
               templateUrl: 'app/modules/user/views/home.html',
               controller: 'homeCtrl'
           }).
         when('/add', {
             templateUrl: 'app/modules/user/views/add.html',
             controller: 'homeCtrl'
         }).
         when('/edit', {
             templateUrl: 'app/modules/user/views/edit.html',
             controller: 'homeCtrl'
         }).
           otherwise({
               redirectTo: '/'
           });
}])
.run(function ($rootScope) {
    $rootScope.user = localStorage.getItem('user');
})
;



