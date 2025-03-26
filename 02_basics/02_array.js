const colour = ["pink", "red", "blue"]
const fruit = ["apple", "mango", "orange"]

// colour.push(fruit)      //--It modifies existing array

// console.log(colour);        //--[ 'pink', 'red', 'blue', [ 'apple', 'mango', 'orange' ] ]
// console.log(colour[3][1]);    //--It takes 2nd array as a single element.

// const newArr = colour.concat(fruit)   //--It gives new array
// console.log(newArr);      //--[ 'pink', 'red', 'blue', 'apple', 'mango', 'orange' ]  

// const all_new_arr = [...colour, ...fruit]    //--here we can add 1 more array
// console.log(all_new_arr);        //--[ 'pink', 'red', 'blue', 'apple', 'mango', 'orange' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("yogita"));    //--false
console.log(Array.from("yogita"));      //--[ 'y', 'o', 'g', 'i', 't', 'a' ]
console.log(Array.from({name: "yogita"}));   //--[]  -gets confused between keys & values 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   //--[ 100, 200, 300 ]
