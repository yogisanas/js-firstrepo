
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

// const result = addTwoNumbers(10, 10)    //--20
// console.log("Result: ", result);      //--Result:  undefined
//--cannot store result in variable because that function is not return anything..


function subTwoNumbers(num1, num2){
    let result = num1 - num2
    // console.log("yogii");   
    return result
    // return num1 + num2         //--for saving memory
}

const result2 = subTwoNumbers(20, 10) 
// console.log("Result: ", result2);      //--10


function loginUserMessage(username){            //--(username = "yogii")  --default value/override value
    if(username === undefined){                    //--if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("yogita"));   //--yogita just logged in
// console.log(loginUserMessage());           //--undefined just logged in

//-----------------------------------------------------------------------------------------------------


function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2));      //--2


function calculateAllCartPrice(...num2){      //--rest operator --combine everything
    return num2
}

console.log(calculateAllCartPrice(100, 200, 300, 5000));    //--[ 100, 200, 300, 5000 ]

// function calculateAllCartPrice(val1, val2, ...num2){     
//     return num2
// }

// console.log(calculateAllCartPrice(100, 200, 300, 5000));    //--[ 300, 5000 ]


//-------How to pass object in function and use it---------------------------

const user = {
    username: "yogita",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}

// handleObject(user)     //--Username is yogita and price is 199

handleObject({          //--Username is sam and price is 399
    username: "sam",
    price: 399
})


//-------------Array--------------------------------------------------------------

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));    //--200

console.log(returnSecondValue([100, 200, 300, 400]));   //--200
