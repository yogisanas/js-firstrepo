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

// for (const greet of greetings) {
//     if(greet == "a" || greet == " ")
//         {
//             continue;
//         }    
//             console.log(greet);
// }

 
//#. Maps:-  -- object
//--Maps is a data type & it's same as array
//--key-value pair, unique value(no duplicate allow), insertion order, iterable
//--There are many methods in maps like set()

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")         //--no duplicate allow

// console.log(map);     //--It gives in key-value form
//--Map(3) {             //--output
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

//----Loop on map---------
for (const key of map) {        //--It gives in array form.
    // console.log(key);
// [ 'IN', 'India' ]                 //--output
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]
}

for (const [key, value] of map) {     //--de-structure of array
    // console.log(key);
    //    IN              //--output
    //    USA
    //    Fr

//    console.log(key, ':-', value);
// IN :- India                      //--output
// USA :- United States of America
// Fr :- France
}


//#. Objects:-
//--There is another way to iterate object

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     //    console.log(key, ':-', value);      //--myObject is not iterable
// }