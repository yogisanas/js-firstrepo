// var c = 300      //--now the value of c is 30 because of override
let a = 300      //--global variable

if(true){
   let a = 10     //--local variable
   const b = 20
   var c = 30    //--c = 30

   console.log(a);   //--10
}

// console.log(a);    //-- a is not defined
// console.log(b);    //--b is not defined
// console.log(c);     //--30

console.log(a);     //--300


