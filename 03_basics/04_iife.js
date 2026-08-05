//*** Immediately Invoked Function Expressions (IIFE) **************************
//--Two reasons that we need IIFE.
//--1. Don't want global pollution. / global variable don't enter in function - local scope
//--2. Immediately invoked function. / Database connection
//--3. 1st() - code / Implicit scope , 2nd() - execution call

//--Named IIFE------------------
(function chai(){
    console.log("DB CONNECTED");
})();                              
// chai()

//--to end 1st invoked function & to start 2nd invoked function use (;)

//--Unnamed / Simple IIFE------------
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('yogita')



// IIFE stands for Immediately Invoked Function Expression. 
// It is a function that is defined and executed immediately. 
// It is mainly used to create a private scope and avoid polluting the global scope.

