
function sayMyName(){
    console.log("Y");
    console.log("O");
    console.log("G");
    console.log("I");
    console.log("T");
    console.log("A");
}

// sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// addTwoNumbers()        //--NaN
// addTwoNumbers(10, 10)  //--20
// addTwoNumbers(10, "10")  //--1010
// addTwoNumbers(10, "a")  //--10a
// addTwoNumbers(10, null)  //--10

const result = addTwoNumbers(10, 10)
console.log("Result: ", result);      //--Result:  undefined
//--cannot store result in variable because that function is not return anything..


function subTwoNumbers(num1, num2){
    let result = num1 - num2
    // console.log("yogii");   
    return result
    // return num1 + num2         //--for saving memory
}

const result2 = subTwoNumbers(20, 10)
console.log("Result: ", result2);      //--10


function loginUserMessage(username){            //--(username = "yogii")  --default value/override value
    if(username === undefined){                    //--if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("yogita"));   //--yogita just logged in
console.log(loginUserMessage());           //--undefined just logged in
