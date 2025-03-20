// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

// const score : Number = 100     //--In TypeScript

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 5567987234569876656n


// Non-Primitive (call by reference)

// Array, Objects, Functions


const colour = ["red", "blue", "pink"]

let myObj = {
    name: "yogita",
    age: 25
}

const myFunction = function(){
    console.log("Hello..");
    
}


console.log(typeof bigNumber);
