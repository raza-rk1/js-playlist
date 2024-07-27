// OBJECT BASED GETTER AND SETTER 


const User = {
    _email : "h@hc.com",     // (_ underscore)  shows that we are defining private property
    _password : "abc",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value.toUpperCase()
    }
  
}

const tea = Object.create(User)           // factory function
console.log(tea.email);