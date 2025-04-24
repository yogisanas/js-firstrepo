//-singleton
// object.create    --constructor through object

//-object Literals:-

const mySym = Symbol("key1")

const JsUser = {
    name: "Yogita",
    "full name": "yogita sanas",    //--can't access by dot
    // mySym: "mykey1",    //--not allowed
    [mySym]: "mykey1",
    age: 20,
    location: "Mumbai",
    email: "yogita@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);   //--mykey1
// console.log(typeof JsUser.mySym);   //--string
// console.log(JsUser[mySym]);   //--string
// console.log(typeof mySym);    //--symbol


// JsUser.age = 25        //--override the value
// console.log(JsUser["age"]);

// Object.freeze(JsUser)    //--after freeze we can't add anything 
// JsUser.location = "Pune"
// console.log(JsUser["location"]);

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello....");  
}

JsUser.greetingTwo = function(){
    console.log(`Hello....${this.name}`);  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

