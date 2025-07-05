// const tinderUser = {}
const tinderUser = new Object()   

// console.log(tinderUser);      //--{}

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

// console.log(regularUser.fullname.userfullname);

// console.log(regularUser.fullname?.userfullname);  //--use ? to check if fullname is present or not 
                                                     // mostly for api


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

const obj5 = {5 : "a", 6 : "b"}

const obj3 = { obj1, obj2}    //--add both obj in new obj
// console.log(obj3);           //--{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2)  //--({}, obj1, obj2)  --all value combine in that parameter
// console.log(obj4);          //--{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1);          //--{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } --it consider obj1 as target

const allObj = Object.assign({}, obj1, obj2, obj5)
// console.log(allObj);
// console.log(obj1);

//--IMP SYNTAX:-
const obj6 = {...obj1, ...obj2}
// console.log(obj6);       //--{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  --commonly use syntax......


//-- whenever data fetch from database, it looks like this...
const users = [ 
    {
        id : 1,
        name : "yogii"
    },
    {
        id : 2,
        name : "riya"
    }
]

users[1].name
console.log(tinderUser);

console.log(Object.keys(tinderUser));     //--[ 'id', 'name', 'isLoggedIn' ]   --data type is array
console.log(Object.values(tinderUser));     //--[ '123abc', 'yogii', false ]   --data type is array
console.log(Object.entries(tinderUser));     //--[ [ 'id', '123abc' ], [ 'name', 'yogii' ], [ 'isLoggedIn', false ] ]   --data type is array

console.log(tinderUser.hasOwnProperty('isLogged'));   //--false     --check that property is available or not

//--For more methods of objects visit browser & inspect 
//--      const obj1 = {1 : "a", 2 : "b"}