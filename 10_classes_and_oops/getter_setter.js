class User{
    constructor( email, password){
        this.email = email;
        this.password = password
    }


    // FOR EMAIL
    get email(){
        return this._email.toUpperCase()   // to stop the race between construcot and getter we use _ , if we dont add then show error  stack get full 
    }
    set email(value){
         this._email = value.toUpperCase()               // we never return setter 
    }



    // FOR PASSWORD 
      get password (){                      //  we want to see or get  the values outside the class the we use get to know this 
                return this._password.toUpperCase()
                  //     return `${this._password}hitesh`               // and we want to set the values inside class, then we use set 
      }
      set password(value){
                    this._password = value
      }
}
// suppose I dont want to give my password access to anyone then we can give them error we use getter and setter
//  getter and setter is bydefault present in every class 
const hitesh = new User("hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);