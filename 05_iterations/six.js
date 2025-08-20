// const coding = ["js", "rb", "py", "java", "cpp"]

// const values = coding.forEach( (item) => {           
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


//#. filter:-

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (item) => item > 5)

const newNums = myNums.filter( (item) => {
     return item > 5
})     
//--when you open scope '{}' use return keyword otherwise it gives '[]' empty array

console.log(newNums);        //--[ 6, 7, 8, 9, 10 ]
