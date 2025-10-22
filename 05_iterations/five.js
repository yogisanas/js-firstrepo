//#. foreach:-
//--foreach loop is already inject in array & required function.
//--In foreach loop function is callback function.
//--In callback function no need to write function name.

const coding = ["js", "rb", "py", "java", "cpp"]    //--check console

// coding.forEach( function (item) {
//     console.log(item);
//     //   js          //--output
//     //   rb
//     //   py
//     //   java
//     //   cpp
// })


//-- Arrow function:-

// coding.forEach( (item) => {
//     console.log(item);
// })


function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)    //--NO need to write like 'printMe()' because just give reference not execute


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    //   js 0 [ 'js', 'rb', 'py', 'java', 'cpp' ]
    //   rb 1 [ 'js', 'rb', 'py', 'java', 'cpp' ]
    //   py 2 [ 'js', 'rb', 'py', 'java', 'cpp' ]
    //   java 3 [ 'js', 'rb', 'py', 'java', 'cpp' ]
    //   cpp 4 [ 'js', 'rb', 'py', 'java', 'cpp' ]
})


//--object:-
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    //   javascript       //--output
    //   java
    //   python
})