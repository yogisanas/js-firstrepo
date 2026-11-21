// reverse
const arr = [1,2,3]
arr.reverse()
console.log(arr);


// sort
let arr1 = [40, 10, 30, 20];
arr1.sort((a, b) => a - b);
console.log(arr1); // [10, 20, 30, 40]

arr1.sort((a, b) => b - a);


// remove duplicate
let arr2 = [1, 2, 2, 3, 3, 4];

let result = [...new Set(arr2)];

console.log(result); // [1, 2, 3, 4]


// nested
let arr3 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(arr3[0][1]); // 2


// What is the difference between some() and every()?
// - some() returns true if at least one element satisfies the condition.
// - every() returns true if all elements satisfy the condition.
let arr4 = [10, 20, 30, 40];

console.log(arr4.some(num => num > 30)); 
// true

console.log(arr4.every(num => num > 5)); 
// true