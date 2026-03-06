class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse();      //--A new course was added by chai
chai.logMe();        //--UserName is chai

const tea = new User("tea")
tea.logMe();        //--UserName is tea

//-------------------------------------------------------------------

console.log(chai === tea);       //--false
console.log(chai === Teacher);   //--false

console.log(chai instanceof Teacher);   //--true
console.log(chai instanceof User);      //--true

