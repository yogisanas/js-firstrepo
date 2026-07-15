//-Constants:-
const accountId = 144

// accountId = 200   //--not allowed

// console.log(accountId);


//-Variables:-
let accountEmail = "yogita@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;           //--undefined   --for future initialization


accountEmail = "ys@gmail.com"
accountPassword = "212121"
accountCity = "Pune"


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
-Prefer not to use var
-because of issue in block scope and functional scope
-{ scope }
*/
