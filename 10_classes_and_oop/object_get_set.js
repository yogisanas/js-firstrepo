const User = {
    _email: 'y@ys.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);    //--Y@YS.COM
console.log(tea._email);   //--y@ys.com

