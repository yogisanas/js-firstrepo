//-- 1 Jan 1970

//--Date is a object
//--Temporal api for date  -- global object like Math in future

let myDate = new Date()
// console.log(myDate);     //--2026-07-23T22:27:58.825Z   --date object, not readable

// console.log(myDate.toString());    //--Thu Jul 23 2026 22:30:42 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());   //--Thu Jul 23 2026
// console.log(myDate.toISOString());     //--2026-07-23T22:32:14.252Z
// console.log(myDate.toJSON());          //--2026-07-23T22:32:40.035Z
// console.log(myDate.toLocaleDateString());    //--7/23/2026
// console.log(myDate.toLocaleString());        //--7/23/2026, 10:33:35 PM

// console.log(typeof myDate);    //--object

//--declared specific date
let myCreatedDate = new Date(2025, 0 , 24)      //--months starts from 0 in js
// console.log(myCreatedDate.toLocaleDateString());    //--1/24/2025

let myCreatedDate2 = new Date(2025, 0 , 24, 5, 8)      
// console.log(myCreatedDate2.toLocaleString());     //--1/24/2025, 5:08:00 AM

let myCreatedDate3 = new Date("01-23-2025")            //--mm-dd-yy  --In india follow this
// console.log(myCreatedDate3.toLocaleDateString());   //--1/23/2025

let myCreatedDate4 = new Date("2025-01-14")      //--yy-mm-dd
// console.log(myCreatedDate3.toLocaleString());    //--1/23/2025, 12:00:00 AM


let myTimeStamp = Date.now()    //--exact time   -game, poles(fastest)

// console.log(myTimeStamp);              //--1784925526782     --milliseconds
// console.log(myCreatedDate3.getTime());  //--1737590400000    --compare date into milliseconds
// console.log(Math.floor(Date.now()/1000));  //--1784925526    --convert milliseconds to seconds

let newDate = new Date()
// console.log(newDate);                 //--2026-07-24T20:57:35.835Z
// console.log(newDate.getMonth());      //--6
// console.log(newDate.getMonth() + 1);  //--7
// console.log(newDate.getDay());        //--5

// `${newDate.getDate()} and the time `

newDate.toLocaleString('default', {
    weekday: "long"
})