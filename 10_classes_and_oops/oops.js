// Object Literal   : basic unit like in java classes , sameway in js we have object literal 
 const user =  {
      username : 'Taha',
      loginCoun : 8,
      signedIn  : true, 

      getUserDetails : function(){
         // console.log("got user details from database ");
         //  console.log(`username: ${this.username}`);  // this means we are talking about the current context 
         console.log(this);   // give the above detail which is our current context 
      }
}


// console.log(user.username)
// console.log(user.signedIn);
// console.log(user.getUserDetails());       // method()
// console.log(this);      // when we print in global context then it will give output as {}  

/*

const promiseOne = new Promise()     // This new keyword is basically a constructor function , constructor function allows us to create a multiple instances from single object 
const date =  new Date()

*/


// BELOW ARE ARE MAKING A  FUNCTION 

function User(username , loginCount , isLoggedIN){     // function will run one time only and only have one global execution context 
   this.username = username;       // left hand side value is our variable and right side value which we are passing
   this.loginCount = loginCount;     // we can create this.loginCount and inject loginCount 
   this.isLoggedIN = isLoggedIN;   


   // METHOD 
   this.greetings = function(){
    console.log(`welcome${this.username}`);
   }

   return this 

}          

const userOne = User("Taha", 12 , true)
const userTwo = User("chaiaurcode", 12 , false )     // after adding this then in console we get this value in (console.log (userOne) )    // means userTwo will overwrite the value  that why we are using (new keyword)
console.log(userOne);     // console.log(userOne.isLoggedIN);
 // console.log(userTwo);

       //  IMP : WHEN WE USE NEW KAYWORD THEN AN EMPTY OBJECT IS CREATED WHICH IS KNOWN AS INSTACE 2. CONSTRUCTOR FUNCTION IS CALLED WITH THE HELP OF NEW KEYWORD , they will pack all the arguments inside it and give it to us 
        //  3. In this 3rd step  , whatever the arguments we had written will inject in THIS KEYWORD 
        // In 4 th step we get the things inside the function


        console.log(userOne.constructor); // constructor property is a reference of own details 

        
        // INSTACE OF