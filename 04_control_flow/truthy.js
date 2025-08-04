//--"y@yogita.ai"  --> assume that value is true because it's present.
//--""  --> assume that value is false because it's empty
//--[]  --> true

// const userEmail = "y@yogita.ai"    //--Got user email
const userEmail = []               //--Got user email / true

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


//--falsy values--

//-- false, 0, -0, BigInt-0n, "", null, undefined, NaN


//--truthy values--

//-- "0", 'false', " ", [], {}, function(){} --empty function

//--For Array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//--For Object
const emptyObj = {} 

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//--On browse
// false == 0
// true

// false == ''
// true

// 0 == ''
// true


//-- Nullish Coalescing Operator (??): null undefined
//-- for database response

let val1;
// val1 = 5 ?? 10     //--5
// val1 = null ?? 10   //--10
// val1 = undefined ?? 15  //--15
val1 = null ?? 10 ?? 20   //--10

console.log(val1);


//-- Ternary Operator

//--condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");   //--More than 80

