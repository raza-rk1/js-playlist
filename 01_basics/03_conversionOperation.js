let score1 = "Taha "  // it will also not converted in number  and give output as NaN

let score = "33abc" //  true --> in boolean case it will give output as 1 , false case give 0
//  undefined --> in undefined case  we get NaN          
 //null  --> in null case it will give zero,  
 
 
 console.log(typeof score );
 console.log(typeof(score));      // other ways to get typeof 

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);   // "33abc"  actually not a pure number but it get convert to number in JS  but actually when we  see the value we get NaN in output 
 
//     NaN (short for "Not-a-Number") is a special value in JavaScript Number objects that represents "missing, undefined, or indeterminate values.


       // NOTES 
// "33" => 33
//"33abc" => NaN
// true => 1, false => 0


// let isLoggedIn =1
// let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);   //  output =1 


   /*      let isLoggedIn =""
          let booleanIsLoggedIn = Boolean(isLoggedIn)
        console.log(booleanIsLoggedIn);   //  output = false      */

let isLoggedIn ="Taha"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);        //  output = true 


// 1= true ,  0  => false in case of boolean 
//empty string "  " => false , "Taha " => true 


let someNumber = 33 
let stringNumber = String(someNumber)
console.log(stringNumber);    // output = 33  , 33 is showng number here but  actually it's a string
console.log(typeof stringNumber)
