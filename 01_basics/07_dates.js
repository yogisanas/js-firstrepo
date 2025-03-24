
let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0 , 24)      //--months starts from 0 in js
// console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate2 = new Date(2025, 0 , 24, 5, 8)      
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-23-2025")      
// console.log(myCreatedDate3.toLocaleDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());

console.log(Math.floor(Date.now()/1000));
