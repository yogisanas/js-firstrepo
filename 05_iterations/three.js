//#. for of:-

//-- ["", "", ""]     --strings in array
//-- [{}, {}, {}]     --objects in array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


//#. Maps:-  -- object
//--unique value, insertion order, iterable

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map); 
//--Map(3) {             //--output
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

for (const [key, value] of map) {
    // console.log(key);
// [ 'IN', 'India' ]                 //--output
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

//    console.log(key, ':-', value);
// IN :- India                      //--output
// USA :- United States of America
// Fr :- France
}


//#. Objects:-

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    //    console.log(key, ':-', value);      //--myObject is not iterable
}