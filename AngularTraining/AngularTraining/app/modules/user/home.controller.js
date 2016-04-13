angular.module('home.controller', ['services', 'provider'])
      .controller('homeCtrl', ['$rootScope', '$scope', 'loginService', 'empProvider', HomeController])

function HomeController($rootScope, $scope, loginService, empProvider) {
    if (getLocalStorage() == undefined) {
        window.location = '#/login';
    }

    $scope.users = empProvider.getEmployee();
    $scope.DeleteEmployee = function (value) {
       
        var retVal = confirm("Are you sure you want to delete this record?");
        if(retVal)
        {
           $scope.users.splice(value, 1);
        }
    }

    $scope.AddEmployee= function()
    {
        window.location = '#/add';
    }
};