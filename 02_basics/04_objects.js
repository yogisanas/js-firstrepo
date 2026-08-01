// const tinderUser = {}    --Non-singleton
const tinderUser = new Object()    //--Singleton

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

//-- Merge Object --
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

const obj5 = {5 : "a", 6 : "b"}

const obj3 = { obj1, obj2}    //--add both obj in new obj
// console.log(obj3);           //--{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2)  //--({}, obj1, obj2)  --all value combine in that parameter
// console.log(obj4);          //--{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1);          //--{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } --it consider obj1 as target
//-- {} - optional parameter
//-- const obj4 = Object.assign(target, source)

const allObj = Object.assign({}, obj1, obj2, obj5)  //--prefer
console.log(allObj);    //--{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj1);      //--{ '1': 'a', '2': 'b' }

//--IMP SYNTAX:-
const obj6 = {...obj1, ...obj2}     //--spread operator
// console.log(obj6);       //--{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  --commonly use syntax......


//-- whenever data fetch from database, it looks like this...array of object
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

users[1].name    //--riya

// console.log(tinderUser);    //--{ id: '123abc', name: 'yogii', isLoggedIn: false }

// console.log(Object.keys(tinderUser));     //--[ 'id', 'name', 'isLoggedIn' ]   --data type is array
// console.log(Object.values(tinderUser));     //--[ '123abc', 'yogii', false ]   --data type is array
// console.log(Object.entries(tinderUser));     //--[ [ 'id', '123abc' ], [ 'name', 'yogii' ], [ 'isLoggedIn', false ] ]   --data type is array

// console.log(tinderUser.hasOwnProperty('isLogged'));   //--false     --check that property is available or not

//--For more methods of objects visit browser & inspect 
//--      const obj1 = {1 : "a", 2 : "b"}



//---------Object de-structure----------

const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "yogita"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor);   //--yogita
console.log(instructor);         //--yogita


//---React---------------- de-structure (props.company)

// const navbar = ({company}) => {

// }

// navbar(company = "yogita")


//----api------------------- 

//--json response:- object response / json structure

// {
//     "name" : "yogita",
//     "coursename" : "js",
//     "price" : "free"
// }

//--array response:-

[
    {},
    {},
    {}
]