angular.module('user.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
      templateUrl: 'app/modules/login/views/login.html',
    controller: 'userCtrl'
  });
}]);