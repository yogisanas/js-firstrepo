//  --Data types divides/categorized into two parts i.e. Primitive & Non-Primitive based on how to store data 
//       in memory & how to access data.

//--JS is dynamically typed language.
// const score : Number = 100     //--In TypeScript   --type safety


//#. Primitive (call by value)  --copy

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

//--number
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null      //--object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);    --false   --return value not same

const bigNumber = 5567987234569876656n


//#. Non-Primitive / Reference Type (call by reference)   --reference

// Array, Objects, Functions
//--All non-primitive datatype is object

const colour = ["red", "blue", "pink"]

let myObj = {
    name: "yogita",
    age: 25
}

//--object function
const myFunction = function(){
    console.log("Hello..");
    
}


// console.log(typeof bigNumber);    --bigint


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "yogitasanas"

let anothername = myName     //--gives copy of myName
anothername = "hello..."

console.log(anothername);    //--hello...
console.log(myName);         //--yogitasanas


let userOne = {
    email : "yogii@gmail.com",
    upi : "yogi@ybl"
}

let userTwo = userOne

userTwo.email = "riya@gmail.com"

console.log(userOne.email);    //--riya@gmail.com
console.log(userTwo.email);    //--riya@gmail.com


