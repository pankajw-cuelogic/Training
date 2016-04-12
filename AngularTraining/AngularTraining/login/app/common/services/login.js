angular.module('login.service', ['services', 'provider'])
      .service('loginService', ['empProvider', loginService])

function loginService( empProvider) {
    var service = {};
    service.login = login;
    return service; 

    function login(userEmail, password) {
        var loginMessage = "Login Fail";

        angular.forEach(empProvider.getEmployee(), function (value, key) {
            if (value.email === userEmail && (value.pw === password)) {
                return loginMessage = value.fullname;
            }
        });
        return loginMessage;
    }
};