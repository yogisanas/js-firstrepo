//--to know properties
//--'Math' is a module and 'pi' is a property
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")  
console.log(descriptor);   
//   {
//   value: 3.141592653589793,
//   writable: false,           //--can't override 'pi' value
//   enumerable: false,
//   configurable: false
//   }

//--this is called as universal constant
// console.log(Math.PI);   //--3.14
// Math.PI = 5
// console.log(Math.PI);   //--3.14

//-------------------------------------------------------------------------------------

// const myNewObject = Object.create(null)   //--create object with factory func.
//--'chai' is object and 'name/price/isAvailable' is property
const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nahi bani");
    }
}

console.log(chai);   //--{ name: 'ginger', price: 250, isAvailable: true }
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
//  {
//   value: 'ginger',
//   writable: true,
//   enumerable: true,
//   configurable: true
//  }

Object.defineProperty(chai, 'name', {
    writable: false,
    // enumerable: false    //--iterate
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
         console.log(`${key} : ${value}`);
    }
}