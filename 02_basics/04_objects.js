// const tinderUser = {}
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "yogii"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


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
const obj2 = {2 : "a", 4 : "b"}

const obj3 = { obj1, obj2}
console.log(obj3);

