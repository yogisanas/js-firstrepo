const name = "yogii"
const repoCount = 20

// console.log(name + repoCount + " Value");    //--concatination
//*****instead*****
// -String Interpolation  --readable
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// console.log(`My name is ${name.toUpperCase()}`);

// -declare using object   --key value pair
const gameName = new String('yogita-sns')   //--on console to get all string methods

// console.log(gameName[0]);          //--y
// console.log(gameName.__proto__);   //--{}  this obj is not empty   --console proto

// console.log(gameName.length);        --property
// console.log(gameName.toUpperCase());  --doesn't change original value
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)  //--does't include last number, ignore negative value starts from 0
console.log(newString);    //--yogi

const anotherString = gameName.slice(-8,4)  //--negative value only in slice, remaining ignore, start at 0
console.log(anotherString);   //--gi

const newStringOne = "  yogita   "
console.log(newStringOne);          //--  yogita 
console.log(newStringOne.trim());   //--yogita     --can use start & end  for space

//--browser doesn't know spaces it convert into %20  in URN-code
const url = "https://yogita.com/yogita%20sanas"

console.log(url.replace('%20', '-'))   //--https://yogita.com/yogita-sanas

console.log(url.includes('hii'));   //--false
console.log(url.includes('yo'));    //--true

console.log(gameName.split('-'));   //--[ 'yogita', 'sns' ]
console.log(gameName.split(' '));   //--based on space

console.log(gameName.bold());

