angular.module('user.service', ['services', 'provider'])
      .service('userService', ['empProvider', userService])

function userService(empProvider) {
    var users = empProvider.getEmployee();
    var service = {};
    service.get = get;
    service.deleteEmployee = deleteEmployee;
    service.getIndexById = getIndexById;
    service.addEmployee = addEmployee;
    service.editEmployee = editEmployee;
    return service;
    
    function get() {
        return users;
    }

    function getIndexById(id)
    {
        var users = get();
        for (var i = 0; i < users.length; i++) {
            if (id == users[i].id)
                return i;
        }
    }

    function getMaxId() {
        var users = get();
        var id = 0;
        for (var i = 0; i < users.length; i++) {
            if (id <= users[i].id)
                id = users[i].id;
        }
        return parseInt(id, 10) + 1;
    }

    function deleteEmployee(value)
    {
        var index = getIndexById(value);
        var users =get();
        users.splice(index, 1);
        return users;
    }

    function addEmployee(fullname, address, email, age, gender, education)
    {
        var users = get();
        users.push({ id: getMaxId(), fullname: fullname, address: address, email: email, age: age, gender: gender, education: education });
        console.log(users);
        return users;
    }
    function editEmployee(id, fullname, address, email, age, gender, education)
    {
        var index = getIndexById(id);
        users[index].fullname = fullname;
        users[index].address = address;
        users[index].email = email;
        users[index].age = age;
        users[index].education = education;
        return users;
    }
};

