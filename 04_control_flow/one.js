//-- if
//  <, >, <=, >=, ==, !=, ===, !==(strict checking)

// const isUserLoggedIn = true
// const temperature = 41

// if(temperature < 50){
//     console.log("Less than 50");
// }    
// else{
//     console.log("Greater thn 50");
// }


// const score = 200

// if(score >  100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);    //--User Power: fly
// }

//     console.log(`User Power: ${power}`);   //--power is not defined


// ******* SHORT HAND NOTATION *******************************************************************
//--Implicit scope

// const balance = 1000

// if(balance > 500) console.log("Test");          //--for one line

// if(balance > 500) console.log("Test"),      //--for multiple line / not good
// console.log("Test2");                


// ******* Nesting *******************************************************************

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 700) {
//     console.log("Less than 700");
// }
// else if(balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }

// ******* EX. *******************************************************************

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}