angular.module('login.service', ['services', 'provider'])
      .service('loginService', ['empProvider','credProvider', loginService])

//login service to authenticate user
function loginService(empProvider, credProvider) {
    var service = {};
    service.login = login;
    return service; 

    function login(userEmail, password) {
        var loginMessage = "Login Fail";
        angular.forEach(credProvider.getCredential(), function (value, key) {
            if (value.email === userEmail && (value.pw === password)) {
                return loginMessage = value.fullname;
            }
        });
        return loginMessage;
    }
};