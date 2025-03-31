//-singleton
// object.create

//-object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Yogita",
    "full name": "yogita sanas",
    // mySym: "mykey1",
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
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);   //--string
console.log(JsUser[mySym]);
