// ************************ This ****************************************
//--context --> values hold by variables

const user = {                //--current context   --inside scope
    username: "yogita",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()    //--yogita , welcome to website
// user.username = "sam"   //--change context
// user.welcomeMessage()    //--sam , welcome to website

//-------------- Output--------------------------
// yogita , welcome to website
// {
//   username: 'yogita',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// console.log(this);    //--{}   --because of node environment


// ************************* Arrow Function *************************************

// function chai(){
//     let username = "yogita"
//     console.log(this);             //--object
//     console.log(this.username);      //--undefined
// }

// chai()


// const chai = function(){
//     let username = "yogita"
//     console.log(this.username);     //--undefined
// }

// *****************************************************************************************

// () => {}       //--syntax of arrow function

const chai = () => {
    let username = "yogita"
    console.log(this.username);     //--undefined
    console.log(this);            //--{}   --not work in arrow function
}

// chai()


// ----Basic arrow function-------------------------------------------------------------

// console.log(addTwo(2, 2));    //--Cannot access 'addTwo' before initialization
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 2));    //--4


//----Implicit return--------------------------------------------------------------------
//--Implicit return means they can understand no need to write return keyword.
//--Explicit return means return keyword is required.
//--{} --return keyword is required.
//--() --no need to write return keyword.

// const addTwo = (num1, num2) =>  num1 + num2         //--2

// const addTwo = (num1, num2) =>  ( num1 + num2 )       //--4

// const addTwo = (num1, num2) =>  {username: "yogita"}    //--undefined

const addTwo = (num1, num2) =>  ({username: "yogita"})    //--{ username: 'yogita' }

console.log(addTwo(2, 2));    //--4

//--Ex.------
// const myArray = [1, 2, 3, 4, 5]

// myArray.forEach(function() {})

// myArray.forEach(() => {})