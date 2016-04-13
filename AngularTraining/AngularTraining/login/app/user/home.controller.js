angular.module('home.controller', ['services', 'provider'])
      .controller('homeCtrl', ['$rootScope', '$scope', 'loginService', 'empProvider', HomeController])

function HomeController($rootScope, $scope, loginService, empProvider) {
    if (getLocalStorage() == undefined) {
        window.location = '#/login';
    }
    $scope.users = empProvider.getEmployee();
    $scope.DeleteEmployee = function (value) {
        alert(value);
    }
};