// Math.py = 3.14  , make it 3 or 4 is it possible ?

console.log(Math.PI);       // we cant change the PI value and we cant overwrite
Math.PI = 5
console.log(Math.PI); 


const descripter = Object.getOwnPropertyDescriptor(Math , "PI")    // talks about hidden properties or featurs of object 
console.log(descripter);   
      
/*
output : {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }
*/

 const mynewObject = Object.create(null)   // way to declare a object 


 const chai = {       // other way to declare object 
    name: ' ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
      console.log("chai nahi bani");

    }
 }
 // console.log(chai);
 // console.log(Object.getOwnPropertyDescriptor(chai));   // output : undefined because its not a property , its an object
 console.log(Object.getOwnPropertyDescriptor(chai, "name"));  // output : ginger chai 


// we can define our properties inside object 
 Object.defineProperty(chai , "name", {
    writable : false ,
    enumerable:false
 })
 console.log(Object.getOwnPropertyDescriptor(chai, "name"));
 /* OUTPUT 
 {
  value: ' ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

for (const [key , value ] of Object.entries(chai)) {      //forof loop is good for object 
  if(typeof value !== 'function') {      // in this case our code will not break (  means code phatega nahi)
  
  console.log(`${key}  , ${value}`);
  }
}