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

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
// console.log(JsUser.mySym);   //--mykey1
// console.log(typeof JsUser.mySym);   //--string
console.log(JsUser[mySym]);
