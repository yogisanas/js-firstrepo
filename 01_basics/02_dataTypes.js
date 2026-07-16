"use strict";  //--treat all JS code as newer version or newer JS
//--now no need to write this / default strict mode

//alert(3+3);   //--we are using nodejs, not browser
//--there is different syntax to use alert in nodejs

console.log(3 
    +
     3);    //code readability should be high


let name = "yogita"
let age = 18
let isLoggedIn = false
let state;         //--undefined
let state1 = "";  //--" "
let state2 = null;  //--empty

// console.log("state is: ",state1);


// ----primitive_datatypes-------
// -number = 2 to power 53    -range
// -bigint
// -string = ""
// -boolean  = truse/false
// -null = standalone value
// -undefined = declared but not initialize / there is no value assign
// -symbol = unique / for react to find uniqueness

// -object

console.log(typeof age);
console.log(typeof "yogita");
console.log(typeof yogita);       //--undefined
console.log(typeof undefined);     //--undefined type
console.log(typeof null);         //--object
