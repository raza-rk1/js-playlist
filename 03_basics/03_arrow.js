const user = {
         username : "taha" ,
         price : 999,

         welcomeMessage : function () {
            console.log (`${this.username} ,  welcome to our website `);
                  console.log(this)
         }
         
}
user.welcomeMessage()
user.username ="sam"
user. welcomeMessage()           //  taha ,  welcome to our website 
                                  //  sam ,  welcome to our website 


        //  function chai () {
        //     let username = "taha"
        //     console.log(this.username);   // INSIDE FUNCTION WE CCANT USE this like that (this.username)

        //  }                
        //  chai()        


        // OTHER WAYS TO DECLARE FUNCTION WITH THE HELP OF ARROW FUNCTION 

        const chai = ()   => {      // we can remove function keyword and replace with => 
            let username  = "taha"
            console.log(this.username);

        }
         // chai() 

/*
         //  BASIC ARROW FUNCTION 
         const addTwo = (num1, num2)=> {
            return num1 + num2
         }
         console.log(addTwo(3,4))
         */


         // IMPLICIT RETURN in ARROW FUNCTION 
         //  const addTwo = (num1, num2) =>  ( num1 + num2)   // If we wrap in curly braces we have to write return keyword and we wrap in normal parenthesis dont have to write reutrn keyword
         const addTwo = (num1, num2) =>  ({username: "taha"} )   // when we want to return object  we have to wrap in curly and also in parenthesis 
         
         console.log(addTwo(3,4))

         

         // EXAMPLE 
         const myArray =[  2,5,3,7,8 ]
        //  myArray.forEach((  => {}))
          // myArray.forEach(()  => ())
        myArray.forEach()