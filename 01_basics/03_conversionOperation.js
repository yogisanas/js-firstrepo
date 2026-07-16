//--Number:-
// let score = 33         --converted
// let score = "33"       --converted
// let score = "33abc"        --NaN
// let score = null           --0
// let score = undefined      --NaN
// let score = true           --1
// let score = "yogita"       //--NaN

// console.log(typeof score);
// console.log(typeof(score));    --method


//--If want to do operation in Number only--
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);    --number
// console.log(valueInNumber);           --NaN


// "33" = 33
// "33abc" = NaN
//true = 1; false = 0


//--Boolean:----------------------------------------------
let isLoggedIn = "yogii"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 = true; 0 = false
// "" = false
// "yogi" = true


//--String:--------------------------------------------------
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);           --33
// console.log(typeof stringNumber);    --string

// ********************************* Operations *******************************************

let value = 3
let negValue = -value
// console.log(negValue);   -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);  power
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " yogita"

let str3 = str1 + str2
// console.log(str3);      hello yogita

// console.log("1" + 2);        12
// console.log(1 + "2");        12
// console.log("1" + 2 + 2);    122
// console.log(1 + 2 + "2");    32

// console.log( (3 + 4) * 5 % 3);   //--use paranthesis


console.log(true);      //true
console.log(+true);     //--1
// console.log(true+);   --ERROR  not allowed
console.log(+"");       //--0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2  //--4   --not good


//-- prefix & postfix:-- mdn
let gameCounter = 100
// gameCounter++;       101
++gameCounter;      //--101
console.log(gameCounter);

//--IMP - learn from mdn
