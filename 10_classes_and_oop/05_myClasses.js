// ES6

//--In class no need to write function keyword..

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai);              //--User { username: 'chai', email: 'chai@gmail.com', password: '123' }
console.log(chai.encryptPassword());   //--123abc
console.log(chai.changeUsername());    //--CHAI


// Behind the scene:-

function User(username, email, password){
     this.username = username;
     this.email = email;
     this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea);              //--User { username: 'tea', email: 'tea@gmail.com', password: '123' }
console.log(tea.encryptPassword());   //--123abc
console.log(tea.changeUsername());    //--TEA
