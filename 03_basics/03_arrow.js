//--context --> values hold by variables

const user = {                //--current context   --inside scope
    username: "yogita",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()    //--yogita , welcome to website
user.username = "sam"   //--change context
user.welcomeMessage()    //--sam , welcome to website

//-------------- Output--------------------------
// yogita , welcome to website
// {
//   username: 'yogita',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

console.log(this);    //--{}   --because of node environment
