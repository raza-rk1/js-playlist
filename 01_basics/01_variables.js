// We  are declaring const below 

const accountId = 123445  
let accountEmail="khantaha2112@gmail.com"  // there  are two ways to declare variable 1. let and the other is var 
var accountPassWord= "12344"              //  we dont use var 

accountCity ="Jaipur"  // we  can declare var in  this way aslo , but its not a goood practise 

let accountState;   // Js recognize this as undefine

/*
prefer not to use var , because of issue in block scope and in functional scope   
 */

//  accountId = 2  //  in const chnages cannot be allowed 

accountEmail = "hc2hc.com"
accountPassword = "21221"
accountCity = " Bengaluru"
console.log(accountId);
console.table ([ accountEmail, accountPassword, accountId , accountCity])
// console.table([a, b ,c  d])  --> In this way we can print  multiple things in table form 
