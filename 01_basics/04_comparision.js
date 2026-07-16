//--Compare same datatype:-
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

//--Compare different datatypes:-  ------  Avoid these type of comparisons
//--JS converted string into number 
// console.log("2" > 1);      true
// console.log("02" > 1);     true


// console.log(null > 0);     false
// console.log(null == 0);    false    --it works different
// console.log(null >= 0);    true
/*
-The reason is that an equality check == and comparision >, <, >=, <= work differently.
-Comparisons convert null to a number, treating it as 0.
  That's why (3) null >= 0 is true and (1) null > 0 is false.
*/


// console.log(undefined == 0);    false
// console.log(undefined > 0);     false
// console.log(undefined < 0);     false


// ===  strict check

console.log("2" == 2);    //--true    --conversion
console.log("2" === 2);   //--false   --no conversion  --It checks data types as well

