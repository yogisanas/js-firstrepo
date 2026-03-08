class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

  //--override password
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}yogita`      //--abcyogita
    }

    set password(value){
        this._password = value    //--abc
    }
}

const yogita = new User("y@ygoita.ai", "abc")
console.log(yogita.password);      //--ABC / abcyogita
console.log(yogita.email);        //--Y@YGOITA.AI

