//-- for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element);      //--element is not defined


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

//-- In JS array don't have ArrayIndexOutOfBoundsExceptions it gives 'undefined'.

let myArray = ["Red", "Pink", "Blue"]

console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//-- break and continue

for (let i = 0; i <= 20; i++) {
    if(i == 5)
    {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);  
}

for (let i = 0; i <= 20; i++) {
    if(i == 5)
    {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);    
}       
