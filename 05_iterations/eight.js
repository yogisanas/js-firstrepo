//-- PART-30

//#-- *use variable must, return value*
//#-- otherwise it will give wrong value

//#--Without an initial value, reduce() uses the first array element as the initial accumulator and 
//      starts processing from the second element.

//--Be careful: calling reduce() on an empty array without an initial value throws a TypeError.

//--the accumulator (acc) stores in reduce()—it can store a sum, a count, an object, or even a string.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal);     --6



const shoppintCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    }
]


const priceToPay = shoppintCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);


//#. Can reduce() return an object instead of a number?
//-- Yes. It can return an array, object, string, number, or another value.

const nums = [1, 2, 3, 4];

const result = nums.reduce((acc, n) => {
    acc[n] = n * n;
    return acc;
}, {});

console.log(result);

// {
//     1: 1,
//     2: 4,
//     3: 9,
//     4: 16
// }

//--acc[n] = n * n = creates a property in the object and assigns it the square of n.
//-- use as a key in object.