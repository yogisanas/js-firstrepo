const name = "yogii"
const repoCount = 20

// console.log(name + repoCount + " Value");

// -String Interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('yogita-sns')   //--on console to get all string methods

// console.log(gameName[0]);
// console.log(gameName.__proto__);   //-{}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)  //--does't include last number, ignore negative value starts from 0
console.log(newString);

const anotherString = gameName.slice(-8,4)  //--negative value only in slice
console.log(anotherString);

const newStringOne = "  yogita   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yogita.com/yogita%20sanas"

console.log(url.replace('%20', '-'))

console.log(url.includes('hii'));

console.log(gameName.split('-'));

console.log(gameName.bold());

