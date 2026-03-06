class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createdId(){
        return `123`
    }
}

const yogita = new User("yogita")
// console.log(yogita.createdId());     //--123


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe);
console.log(iphone.createdId());   //--error because of static
