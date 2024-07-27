/* 1.  SINGLETON  --> is the way to to declare objects  When the object created with constructor then it's singleton 
       Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally. 

     Object.create --> ways to create object are also known as constructor method

    */


// 2.  OBJECT LITERALS - are the ways to declare object 
//    In object their is key and values 


const mySym =Symbol("key1")  


const JsUser = {
   [mySym ]:"mykey1",   
   name: "Taha",     // here name is behave as a string by the system  and in place of name we can write (  0: "Taha")
   "full name": "Taha Khan",     //  we cant access this with the helpf of (dot.)
   age: 18,
   location: "New Delhi",
   email: "khantaha2112@gmail.com",
   isLoggedIn: false,
   LastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.age);            // to access object but its not a  good practise 
console.log(JsUser["email"]);       // here we take email , age as in String type ie "age"  and when we take email only it will show : email is not defined 
console.log(JsUser["full name"]);    // Taha Khan   --> known as( Square Notation )
    //  console.log(JsUser.full name );   ---> we cant access full name with  (dot) 


    console.log(JsUser.mySym);            // mykey1 but data type is not use  as a symbol
    console.log(typeof JsUser.mySym);      // typeof (String)

    console.log(typeof JsUser[mySym]);    // Right way to access Symbol
  


    JsUser.email = "khantaha@chatgpt.com"    // to CHANGE values we use = and then new object name 
  //   Object.freeze(JsUser)                     // to FREEZE  object 


      // WE  WANT TO IMPLEMENT FUNCTION JsUser 
    JsUser.greeting = function(){
      console.log("Hello JS User ")

    }
     console.log(JsUser.greeting());   // Hello JS User 

     // HERE WE WANT TO REFERENCE THE OBJECT NAME 
     JsUser.greetingTwo = function(){
      console.log(`Hello JS User  , ${this.name}`);   // we are targeting object with the help of (this.name)
    }
    console.log(JsUser.greetingTwo());   // output --> Hello JS User  , Taha
   

/* T  O ACCESS ARRAY PROPERTY
myArr =["T","A"]
myArray[1]

*/