//-- PART-30
//#. MAP:- *use variable must, return array*
//--We have to use arithmatic operator, it returns all item.
//--for conditional operator it gives true false for every item.



// const val = myNumbers.map((item) => item > 5)
// console.log(val);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (item) => { return item + 10})
const newNums = myNumbers.map( (item) => item + 10)
//  console.log(newNums);
// [  --output
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]


// const newNums2 = []
// myNumbers.forEach( (item) => {
// //    item = item + 10;
//     newNums2.push(item + 10)
// })

// console.log(newNums2);



//#. CHAINING:-
//--Use 2 or 3 methods directly at a time.
//--1st chain result pass to 2nd chain.

const newNums3 = myNumbers
                 .map( (item) => item * 10)
                 .map( (item) => item + 1)
                 .filter( (item) => item >= 50 )    //--pass only true value

console.log(newNums3);


//-------------------------------------------------------------------------------------------

// myNumbers.map((item) => console.log(item+1))
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11


// const val = myNumbers.map((item) => item > 5)
// console.log(val);
// [
//   false, false, false,
//   false, false, true,
//   true,  true,  true,
//   true
// ]