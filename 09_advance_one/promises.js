//--The Promise object represents the eventual completion (or failure) of an asynchronous operation 
//         and its resulting value.

//-- How to make promise?
//--------------------------------------(1)--------------------------------------------------------
const promiseOne = new Promise(function(resolve, reject){
    //Do an asnyc task..
    // DB calls, cryptography, network        //--this takes time that's why use await
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
});

//--How to consumed promise?
//-- .then is directly connected to resolve

promiseOne.then(function(){
    console.log("Promise consumed");
})
// Async task is complete
// Promise consumed

//--------------------------------(2)-----------------------------------------------------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})
// Async Task 2
// Async 2 resolved

//-------------------------------------(3)----------------------------------------------------------
//--can pass object, array, function in resolve()

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Yogita", email : "yogii@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);                 //--{ username: 'Yogita', email: 'yogii@gmail.com' }
})

//---------------------------------------(4)---------------------------------------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username : "yogita", password : "123"})
        } else {
            reject('ERROR : Something went wrong..')
        }
    }, 1000)
})

//--chaining

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
}).then( (username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//-----------------------------------------------(5)--------------------------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username : "javascript", password : "123"})
        } else {
            reject('ERROR : JS went wrong')         //--reject means error
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive();

//----------------------------------------------------------------------------------------------------

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))


//----------------------------------------------------------------------------------------------------


const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const p2 = new Promise((_, reject) => {
    setTimeout(() => reject("Promise 2 rejected"), 1500);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 is resolved"), 2000);
});


Promise.all([p1, p2, p3])
.then((res) => {
    console.log("Result: ", res);
})
.catch((err) => {
    console.log("Error: ", err);
})


// output:-
//  p1 -> resolved
//  p2 -> rejected
//  p3 -> resolved (ignored)

// What does Promise.all() do?

// Promise.all() takes an array of promises and returns a single promise. It resolves only when all 
// input promises resolve, returning an array of their results in the same order. If any one promise 
// rejects, it immediately rejects with that error, and the remaining results are ignored, even though 
// those promises continue executing in the background.