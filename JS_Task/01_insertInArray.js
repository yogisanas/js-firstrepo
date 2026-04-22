//#. Insert digit 3 in sort manner--

// const arr = [1, 2, 4, 5, 6];

// arr.push(3);
// arr.sort((a, b) => a - b);

// console.log(arr); 


const arr = [1, 2, 4, 5, 6];

const num = 3

const index = arr.findIndex(x => x > num)

// console.log(index);

if(index === -1) {
    arr.push(num)
} else {
    arr.splice(index, 0, num)
}

console.log(arr);

