//*** Immediately Invoked Function Expressions (IIFE) **************************
//--Two reasons that we need IIFE.
//--1. Don't want global pollution.
//--2. Immediately invoked function.

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

