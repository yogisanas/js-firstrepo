// var c = 300      //--now the value of c is 30 because of override
let a = 300      //--global variable / global scope

if(true){
   let a = 10     //--local variable / block scope
   const b = 20
   var c = 30    //--c = 30

   // console.log(a);   //--10
}

// console.log(a);    //-- a is not defined
// console.log(b);    //--b is not defined
// console.log(c);     //--30

// console.log(a);     //--300

//--IMP - inspect scope & node scope are different

//--------------------------------------------------------------------------------------------------

function one(){
   const username = "yogita"

   function two(){
      const website = "youtube"
      console.log(username);      //--yogita
   }
   // console.log(website);      //--website is not defined
   
   two()
}

// one()        //--yogita   --method one is calling method two 


if(true){
   const username = "yogita"
   if (username === "yogita") {
      const website = " youtube"
      // console.log(username + website);    //--yogita youtube
   }
   // console.log(website);      //--website is not defined
}

// console.log(username);       //--username is not defined



// ************************ Interesting / hoisting *******************************************

console.log(addOne(5));     //--6

function addOne(num){
   return num + 1
}

addOne(5)

//---------------------

addTwo(5)          //--Cannot access 'addTwo' before initialization
const addTwo = function(num){         //--can call expression
   return num + 2
}

addTwo(5)