//--it passes current execution context to another function

function setUsername(username){
    // complex DB call
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    // setUsername(username)    //--give reference not call  / { email: 'chai@fb.com', password: '123' }
    setUsername.call(this, username)   //--{ username: 'chai', email: 'chai@fb.com', password: '123' }
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
