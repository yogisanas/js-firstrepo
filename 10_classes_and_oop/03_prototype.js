// let myName = "yogita     "
// let myChannel = "chai    "

// console.log(myName.length);          //--11
// console.log(myName.trim().length);   //--6
// console.log(myName.trueLength);      //--undefined

//----------------------------------------------------------------------------------------

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//--Top level hierarchy access / add new property in object:-
//--give power to all [array, string] / it's a prototypal behaviour
Object.prototype.yogita = function(){
    console.log(`yogita is present in all object`);
}

// heroPower.yogita();     //--yogita is present in all object
myHeros.yogita();        //--yogita is present in all object


//--add property in array:-
Array.prototype.heyYogita = function(){
    console.log(`Yogita say hello`);
}

myHeros.heyYogita();      //--Yogita say hello
// heroPower.heyYogita();    //--heroPower.heyYogita is not a function

//--------------------------------------------------------------------------------------

//**** Inheritance */

const User = {
    name : "Yogii",
    email : "yogi@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

//-- Morden syntax:-
Object.setPrototypeOf(TeachingSupport, Teacher)

//----------------------------------------------------------------------------------------

let anotherUserName = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim(). length}`);
}

anotherUserName.trueLength();
"yogita".trueLength();
"hello".trueLength();