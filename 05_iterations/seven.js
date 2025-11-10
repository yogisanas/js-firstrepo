//#. MAP:-
//--We can use any operator in map like conditional or arithmatic.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (item) => { return item + 10})
const newNums = myNumbers.map( (item) => item + 10)
//  console.log(newNums);         --
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

const newNums3 = myNumbers
                 .map( (item) => item * 10)
                 .map( (item) => item + 1)
                 .filter( (item) => item >= 50 )    //--pass only true value

console.log(newNums3);
