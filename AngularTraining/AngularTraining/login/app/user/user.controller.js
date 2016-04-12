angular.module('user.controller', ['services', 'provider'])
      .controller('userCtrl', ['$rootScope', '$scope', 'loginService', 'empProvider', UserController])

function UserController($rootScope, $scope, loginService, empProvider) {
    $scope.users = empProvider.getEmployee();
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
        $scope.loginMessage = loginService.login($scope.userEmail, $scope.password);
        if ($scope.loginMessage !== 'Login Fail') {
            $rootScope.loginMessage = 'Welcome ' + $scope.loginMessage;
            window.location = '#/home';
        } else { $scope.isValid = true; }
    }
};
