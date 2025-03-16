// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
-The reason is that an equality check == and comparision >, <, >=, <= work differently.
-Comparision convert null to a number, treating it as 0.
  That's why (3)-null >= 0 is true and (1) one is false.
*/


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


// ===

console.log("2" == 2);
console.log("2" === 2);   //--It checks data types as well

