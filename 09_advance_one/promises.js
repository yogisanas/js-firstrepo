//--The Promise object represents the eventual completion (or failure) of an asynchronous operation 
//         and its resulting value.

//-- How to make promise?
//--------------------------------------(1)--------------------------------------------------------
const promiseOne = new Promise(function(resolve, reject){
    //Do an asnyc task..
    // DB calls, cryptography, network
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
            reject('ERROR : JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive();