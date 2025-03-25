//--Array

const myArr = [1, 2, 3, 4, 5]
const myColour = ["red", "pink", "blue"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

//--Array methods

// myArr.push(6)       //--add element to last of an array
// myArr.push(7)
// myArr.pop()       //--remove last element of an array

// myArr.unshift(9)    //--add element at start of an array 
// myArr.shift()         //--remove first element start of an array

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


console.log("A ", myArr);          //--A  [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);               //--[ 2, 3 ]

console.log("B ", myArr);       //--B  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2);               //--[ 2, 3, 4 ]

console.log("c ", myArr);       //--c  [ 1, 5 ]

console.log(myArr);             
