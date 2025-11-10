// const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( (item) => { 
// const values = coding.forEach( (item) => {     //--store in a variable     
//     console.log(item);                      
//        //   js          //--output
//        //   rb
//        //   py
//        //   java
//        //   cpp
//        return item    //--still undefined
// })

// console.log(values);     //--undefined
//--not work for any operations on each value because foreach loop perform operations but not return anything


//#. filter:- Numbers are easy for that
//--filter is also take callback function.
//--filter returns a value whereas foreach doesn't return a value.
//--filter only pass the value when the condition is true. So use only conditional operator.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (item) => item > 5)       //--it just return, not print

// const newNums = myNums.filter( (item) => item > 5)
// console.log(newNums);                //--[ 6, 7, 8, 9, 10 ] --output

// const newNums = myNums.filter( (item) => {
//      return item > 5
// })     
//console.log(newNums);
//--when you open scope '{}' use return keyword otherwise it gives '[]' empty array

//********outside video**************/
// const newNums = myNums.filter( (item) => {
//      console.log(newNums);             //--Cannot access 'newNums' before initialization
//     return item > 5 
// })
//************************************************************
// const newNums = myNums.filter((item) => item + 10)
// console.log(newNums);                  //--Not work
//********outside video**************/

const newNums = []

myNums.forEach((item) => {
     if (item > 5) {
          newNums.push(item)
     }
})

console.log(newNums);        //--[ 6, 7, 8, 9, 10 ]
