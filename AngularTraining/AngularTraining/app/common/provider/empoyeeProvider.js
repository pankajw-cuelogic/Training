var myApp = angular.module('provider', []);

myApp.provider('empProvider', function () {
    this.EmployeeList = '';
    //To get employee list
    this.$get = function () {
        return {
            getEmployee: function () {
                return getEmployeeList();
            }
        }
    };
    //To set employee list 
    this.setName = function () {
        this.EmployeeList = getEmployeeList();
    };
});


function getEmployeeList() {
    return [{
        "id":"1",
        "fullname": "Nilesh",
        "address": "pune",
        "email": "nilesh@gmail.com",
        "age": "23",
        "gender": "male",
        "education": "BE"
    }, {
        "id": "2",
        "fullname": "Rishikesh",
        "address": "nashik",
        "email": "rishikesh@gmail.com",
        "age": "21",
        "gender": "male",
        "education": "ME"
    }, {
        "id": "3",
        "fullname": "Amey",
        "address": "pune",
        "email": "amey@gmail.com",
        "age": "25",
        "gender": "male",
        "education": "MBA"
    }
    , {
        "id": "4",
        "fullname": "John",
        "address": "nagpur",
        "email": "john@gmail.com",
        "age": "22",
        "gender": "male",
        "education": "MSC"
    }];
}
