//--Array  --collection of multiple items under a single variable name
//  --it can be different type elements also
//  --Theory in mdn documentation - (Must Read)
//  --shallow copy - Heap / original reference
//  --deep copy    - stack / copy
//  --const number = [1,2,3,4] on console -- proto / proto

const myArr = [1, 2, 3, 4, 5]             //--array elements
const myColour = ["red", "pink", "blue"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);     --access array elements

//--Array methods-----------------------------------------------------------------

// myArr.push(6)       //--add element to last of an array
// myArr.push(7)
// myArr.pop()       //--remove last element of an array

//--all value shift  --loads on computer
// myArr.unshift(9)    //--add element at start of an array 
// myArr.shift()         //--remove first element start of an array

// console.log(myArr.includes(8));   //--false
// console.log(myArr.indexOf(9));    //-- -1

const newArr = myArr.join()    //--it converts into string also

console.log(myArr);       //--[ 1, 2, 3, 4, 5 ]
console.log(newArr);      //--1,2,3,4,5
console.log(typeof newArr);  //--string


//-- slice,  splice
console.log("A ", myArr);          //--A  [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);               //--[ 2, 3 ]
console.log("B ", myArr);       //--B  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2);               //--[ 2, 3, 4 ]
console.log("c ", myArr);       //--c  [ 1, 5 ]

console.log(myArr);       //--[ 1, 5 ]      


//--slice - 1. don't take last element
//          2. don't change original array

//--splice - 1. take last element
//           2. change original array