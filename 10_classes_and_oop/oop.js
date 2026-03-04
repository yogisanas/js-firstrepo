const user = {
    username : "yogita",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);          //--current context
    }
}

console.log(user.username);      //--yogita
// console.log(user.getUserDetails());

console.log(this);    //--{}  create new object

//********************inspect******************************************* 
// console.log(this); 
//  Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
//-- window is a global object....
//********************************************************************* */


//--new keyword is constructor function--
// const promise = new Promise()
// const date = new Date()            


function User(username, loginCount, isLoggedIn){
    // myUsername = username;
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// const userOne = User("yogita", 12, true)
// const userTwo = User("riya", 11, false)       //--override value on userOne
// console.log(userOne);

const userOne = new User("yogita", 12, true)     //--with new keyword no need return keyword in func.
const userTwo = new User("riya", 11, false)       
console.log(userOne);
console.log(userTwo);

//**** new keyword *********
//--new keyword creates an empty object called as instance
//--new keyword calls constructor function

console.log(userOne.constructor);    //--[Function: User]
//--properties of constructor is reference of constructor(User)
