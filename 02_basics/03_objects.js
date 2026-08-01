//-singleton
// object.create    --constructor through object

//-object Literals:-   Non-singleton

const mySym = Symbol("key1")     //--DT

const JsUser = {
    name: "Yogita",
    "full name": "yogita sanas",    //--can't access by dot because of 2-diff names
    // mySym: "mykey1",    //--not allowed
    [mySym]: "mykey1",
    age: 20,
    location: "Mumbai",
    email: "yogita@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);        //--Yogita
// console.log(JsUser[name]);       //--ERROR - all consider as string
// console.log(JsUser["name"]);     //--Yogita
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);   //--mykey1
// console.log(typeof JsUser.mySym);   //--string
// console.log(JsUser[mySym]);   //--mykey1
// console.log(typeof mySym);    //--symbol


// JsUser.age = 25        //--override the value
// console.log(JsUser["age"]);    //--25

// Object.freeze(JsUser)    //--after freeze we can't add anything 
// JsUser.location = "Pune"
// console.log(JsUser["location"]);     //--Mumbai

// console.log(JsUser);    //--symbol


JsUser.greeting = function(){
    console.log("Hello....");  
}

JsUser.greetingTwo = function(){
    console.log(`Hello....${this.name}`);  
}

// console.log(JsUser.greeting);      //--[Function (anonymous)]  --It doesn't execute function 
                                                                //--just return reference of that func.

console.log(JsUser.greeting());      //--Hello....
console.log(JsUser.greetingTwo());   //--Hello....Yogita
