myApp.provider('credProvider', function () {
    this.credentialList = '';
    //To get credential list
    this.$get = function () {
        return {
            getCredential: function () {
                return getCredentialList();
            }
        }
    };
    //To set credential list 
    this.setName = function () {
        this.credentialList = getCredentialList();
    };
});

function getCredentialList() {
    return [{
        "fullname": "nilesh",
        "email": "nilesh@gmail.com",
        "pw": "123"
    }, {
        "fullname": "rishikesh",
        "email": "rishikesh@gmail.com",
        "pw": "123"
    }, {
        "fullname": "amey",
        "email": "amey@gmail.com",
        "pw": "123"
    }
    , {
        "fullname": "john",
        "email": "john@gmail.com",
        "pw": "123"
    }];
}
