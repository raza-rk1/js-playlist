// if 

if(true){

}     // if true then inside code will execute otherwise it will not execute

if(false){



}    // if false then inside code will not execute 


const isUserLoggedIn = true
if(isUserLoggedIn){

}

// CPMPARISON OPERATOR
  // < , > <= (2<=2 2 is less than 2) , >= (2>=2 2 is greater than or equal to 2), == , != (3!=2), === ( triple equalto check type also 2 ==="2") , !==


  if (2=="2"){
    console.log("executed");
  }

  // FOR TYPE CHECKING WE USE STRICT EQUAL TO

  if(2 ==="2"){
    console.log("executed");
  }

  if (2 !=3){
    console.log("executed");
  }


  /*
  const temperature = 20
  if  (temperature > 50 ){
    console.log("less than 50");
  }  else {
    console.log("temperature is greater than  50");

  }
  */


  /*
  // SCOPE 
  const score = 200 

  if (score > 100){
         var power = "fly"  // const power = "fly"
    console.log(`User power: ${power}`);
  }

  console.log(`User power: ${power}`);    // power is not defined because of scope and it wll show power is not defined , but when we declare with var it will work 

  */


  const balance = 1000
  if(balance > 500)console.log("test"),
  console.log("test2");      // UNREADABLE CODE : Not  a good practise 

  /*

  // NESTING 
  const newbalance = 1000 
  if (newbalance < 500) {
    console.log("less than 750");

  }  else if ( newbalance < 750){
    console.log("less than 750");

  }   else if ( newbalance < 900){
    console.log("less than 750");


  }   else {
    console.log("less than 1200");     // less than 1200

  }

  */

  const userLoggedin = true 
  const debitCard = true 
  const loggedINFromGoogle = false 
  const loggedInFromEmail  = true 

  if (userLoggedin && debitCard && 2==2){
     console.log("Allow to buy course");
  }                                                  // In && every condition execute to be true 

  if(loggedINFromGoogle || loggedInFromEmail){
    console.log("User logged in");
       
  }                                                    // User loggged in 