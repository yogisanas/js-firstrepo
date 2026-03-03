const user = {
    username : "yogita",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details from database");
    }
}

console.log(user.username);
console.log(user.getUserDetails());

