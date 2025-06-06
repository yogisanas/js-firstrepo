// const tinderUser = {}
const tinderUser = new Object()   

console.log(tinderUser);      //--{}

tinderUser.id = "123abc"
tinderUser.name = "yogii"
tinderUser.isLoggedIn = false

// console.log(tinderUser);   //--{ id: '123abc', name: 'yogii', isLoggedIn: false }


const regularUser = {
    email : "yogii@gmail.com",
    fullname : {
        userfullname: {
            firstname : "yogita",
            lastname : "sanas"
        }
    }
}

console.log(regularUser.fullname.userfullname);

// console.log(regularUser.fullname?.userfullname);  //--use ? to check if fullname is present or not 
                                                     // mostly for api


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

const obj3 = { obj1, obj2}    //--add both obj in new obj
console.log(obj3);           //--{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

