// Find:-
//  This is a common follow-up interview question: find() returns the first matching element, 
//     whereas filter() returns all matching elements.

//#-- *use variable must, return value*

const nums = [3, 7, 12, 15, 20];

const val = nums.find((item) => item > 10)

console.log(val);



//  nums.find((item) => console.log(item > 10))
// false
// false
// true
// true
// true