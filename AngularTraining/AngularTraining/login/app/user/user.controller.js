angular.module('user.controller',['services'])
      .controller('userCtrl',['$rootScope','$scope','userService',UserController])

function UserController($rootScope, $scope, userService) {
    $scope.users = userService.getEmployee();
    $scope.userEmail = "";
    $scope.password = "";
    $scope.fullName = function () {
        var message = '';
        if ($scope.userEmail == undefined || $scope.password == undefined) {
            return "User name or password is Empty";
        }
    };

    $scope.loginMessage = "";
    $scope.login = function () {
        $scope.loginMessage = userService.login($scope.userEmail, $scope.password);
        if ($scope.loginMessage !== 'Login Fail') {
            $rootScope.loginMessage = 'Welcome ' + $scope.loginMessage;
            window.location = '#/home';
        } else { $scope.isValid = true; }
    }
};
