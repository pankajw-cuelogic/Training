angular.module('home.controller', ['services', 'provider'])
      .controller('homeCtrl', ['$rootScope', '$scope', 'loginService', 'userService', 'empProvider', HomeController])

function HomeController($rootScope, $scope, loginService, userService, empProvider) {
    $scope.data = {
        singleSelect: null,
        multipleSelect: [],
        option1: 'option-1',
    };

    $scope.order = function () {
        $scope.reverse = ($scope.predicate === $scope.data.singleSelect) ? !$scope.reverse : false;
        $scope.predicate = $scope.data.singleSelect;
    };

    $scope.predicate = 'fullname';
    $scope.reverse = true;

    if (getLocalStorage() == undefined) {
        window.location = '#/login';
    }

    $scope.users = userService.get();
    $scope.DeleteEmployee = function (value) {       
        var retVal = confirm("Are you sure you want to delete this record?");
        if(retVal)
        {
            $scope.users = userService.deleteEmployee(value);
        }
    }

    $scope.EditEmployee = function (id, fullname, address, email, age, education) {
        $rootScope.idEdit = id;
        $rootScope.nameEdit = fullname;
        $rootScope.addressEdit = address;
        $rootScope.emailEdit = email;
        $rootScope.ageEdit = age;
        $rootScope.educationEdit = education;

        window.location = '#/edit';
    }
    
    $scope.AddEmployee= function()
    {
        window.location = '#/add';
    }

    $scope.submit = function () {
        var authenticate = userService.authenticateEmail($scope.email, 0);
        if (authenticate != true) {
            alert(authenticate);
            return;
        }

        $scope.users = userService.addEmployee($scope.name, $scope.address, $scope.email, $scope.age, $scope.genderVal != undefined ? $scope.genderVal : '', $scope.education);
        window.location = '#/home';
    };

    $scope.submitEdit = function () {
        var authenticate = userService.authenticateEmail($scope.emailEdit, $scope.idEdit);
        if (authenticate != true) {
            alert(authenticate);
            return;
        }

        $scope.users = userService.editEmployee($scope.idEdit, $scope.nameEdit, $scope.addressEdit, $scope.emailEdit, $scope.ageEdit,'', $scope.educationEdit);
        window.location = '#/home';
    }
};