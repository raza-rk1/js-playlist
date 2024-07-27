/*

function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("H");
    console.log("A");
}

//     sayMyName()       // to execute ->  sayMyName()   , and for reference -> sayMyName

// FUNSTIONS : ADD TWO NUMBERS 

function addTwoNumbers(number1 , number2){  // in  js we dont have to give number type 
    console.log(number1 + number2 );
}

addTwoNumbers(3 , "4" )   // 34      // NaN , if we  dont pass any argument 
addTwoNumbers(3 , "a" )    //3a
addTwoNumbers(3 , null )   // 3

   const result = addTwoNumbers(3,5)
console.log("Result", result )   // output is 8 but , resut value  : undefined 

*/


/*

function addTwoNumbers(number1, number2){
    let result = number1 + number2
return result 
console.log("Taha");         // after return no code will execute 
}

 const result = addTwoNumbers(3,5)
 console.log("Result:" , result );

 */


//     BY SAVING SPACE , we can declare function 

function addTwoNumbers( number1 , number2){
return number1 + number2
}
 
const result = addTwoNumbers( 3 , 4 )
  //  console.log("Result" , result );        // THIS IS HOW return value works 


   //  loginUserMessage(username == "sam"){   // for default value 
function loginUserMessage(username){
    if(username === undefined){         // (!username)                // ! not symbol->  convert true into false and false into true 
        console.log("please enter a username");
        return 
    }
    return `${username}  just logged in `
}
console.log(loginUserMessage("Taha"));       // Taha just logged in 
console.log(loginUserMessage());             // undefined logged in 


  
