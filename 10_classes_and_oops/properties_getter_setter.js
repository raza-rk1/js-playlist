// GETTER AND SETTER DEFINE WITH THE HELP OF PROPERTIES
 // aslo knows as function based syntac , sameway we can create OBJECT based syntax 


function User(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
    get : function(){
        return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value.toUpperCase()
        }
   
    } ) 

}




const chai = new User("chai@chai.com", "chai")
console.log(chai.email);