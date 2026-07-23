const score = 400
// console.log(score);    //--400    --on console check

//-when it should be number only   --explicitly define
const balance = new Number(100)   //--object     --on console check, get prop.
// console.log(balance);     //--[Number: 100]

//--after converting into string get additional property
// console.log(balance.toString().length);  //--3
// console.log(balance.toFixed(2));    //--100.00  --fix value after decimal--specially e-commerce website

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));   //--124     --it returns a string
// console.log(otherNumber.toPrecision(4));   //--123.9
// console.log(otherNumber.toPrecision(2));   //--1.2e+2

const hundreds = 1000000
// console.log(hundreds.toLocaleString());   //--1,000,000    --us-standards
// console.log(hundreds.toLocaleString('en-In'));  //--10,00,000  --indian-standards

//--Note:-  
//-- check on console - Number  -get min_value & max_value

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--Math is a Library by default with JS

// console.log(Math);         //--Object [Math] {}   -check on console
// console.log(Math.abs(-4));         //--4    --only negative value into positive
// console.log(Math.round(4.5));       //--5
// console.log(Math.ceil(4.2));        //--5
// console.log(Math.floor(4.8));       //--4
// console.log(Math.min(4,1,7,4,6));   //--1
// console.log(Math.max(4,1,7,4,6));    //--7

console.log(Math.random());           //--0.5678518312239198  --any random value between 0 & 1
console.log((Math.random()*10));      //--3.351784242276874   --shift one digit left
console.log((Math.random()*10) + 1);  //--to avoid if value is 0
console.log(Math.floor(Math.random()*10) + 1);   //--3   --if want small value

//--to get value between min & max--
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
