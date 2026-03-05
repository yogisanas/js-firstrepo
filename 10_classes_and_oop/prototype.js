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
//--give power to all [array, string]
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