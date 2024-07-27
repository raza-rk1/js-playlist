const score = 400
console.log(score);                     // 400


const balance = new Number (100)
console.log(balance);                     // [ Number : 100   ] because here we are using using new Number 


console.log(balance.toString());   // 100 , but below we are checking typeOf then we will get 
console.log(balance.toString().lenght);  // 3 because 100 is of 3 characters 


console.log(balance.toFixed(2));   // 100.00 , we take precision value when we are creating ecommmerce application
console.log(balance.toFixed(1));     //100.0

const otherNumber= 23.8966
console.log(otherNumber.toPrecision(3));      // 23.9    

const otherNumbers = 123.8966
console.log(otherNumbers.toPrecision(3));       // 124    round off 

const otherNumberss= 1123.8966
console.log(otherNumberss.toPrecision(3));      //  1.12e+3   (three precision value rest it will give in exponential form) 
 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));    // 1,000,000  ( by default US standards )  -->  for indian we use ('en-IN')  , output = 10,00,000


//     **********     MATHS     ***********   
console.log(Math);
console.log(Math.abs(-4));  // Absolute means -ve change into +ve only    4 

console.log(Math.round(4.6));           // 5   most used 


console.log(Math.ceil(4.2));    //  5  
console.log(Math.floor(4.9));     // 4   


console.log(Math.min(2,3,4,5,9));  // Used to find min element in an array   --> 2 
console.log(Math.max(2,3,4,5,9));    // used  to find max  element in an array  --> 9


// ********   Math.random  

console.log(Math.random());   // Values always comes in between 0 and 1    --> 0.9618095757811314

// IF WE ARE CREATING DICE GAME 

console.log((Math.random()*10 ) + 1 );     // Everytime values get change 
console.log(Math.floor(Math.random()*10 ) + 1 );   // wrap up with math.Floor   



const min =10 
const max= 20 
console.log(Math.floor(Math.random() *(max-min + 1)));   // give output as 8 , 6 , 1