//--foreach, map, filter, find, indexOf

var arr = [1, 2, 3, 4]

// arr.forEach(function(val){
//     console.log(val + " Hello");   
// })

//--map - It returns a new array with memory according to mapped array.
//      - If we want to create a new array by given array then use map.

var newarr = arr.map(function(val){
    return 13;       //--return val * 3;
})

//console.log(newarr);


//--filter - It gives new array with filtered data.
//         - It can be smaller or bigger than original array.
