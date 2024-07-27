// TRUTHY OR FALSY VALUE 

const userEmail = "taha@khan.ai"    // here we are assuming that their is true value 

// const userEmail = ""   // false 
//  const userEmail = []   // true 
if(userEmail) { 
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}                                              // GOt user email 


// FALSY VALUE  
  // false , 0 , -0 , BigInt 0n , null , undefined , Nan  ,"" , rest all values are TRUTHY Values 

// TRUTHY VALUES 
// "0" , 'false', " " , [], {} -object , function(){}  -> empty function 



// TO CHECK ARRAY 
if (userEmail.length == 0){
    console.log("Array is empty");

}

// TO CHECK OBJECT 
const emptyObj = {}
if (Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
}

// NULLISH COALESCING OPERATOR (??) : null undefined 

let val1;
// val1 = 5  ??  10 
console.log(val1);     // 5 

// val1 = null ?? 10      // 10   if the value is null then assign  or the other value , it will check safety 
 // val1 = undefined ?? 15    // 15

 val1 = null  ?? 10 ?? 10   // 10 

 
 // TERNARY OPERATOR
 condition ? true : false

 const iceTeaPrice = 100 
 iceTeaPrice >= 100 ? console.log("ice tea price is greater than 10") : console.log("more than 100");  // more than 100