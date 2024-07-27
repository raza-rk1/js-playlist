 console.log( "2"  > 1);      //  JavaScript allow to compare two diff data types but TypeScript cant allow 
console.log( "02" > 1 );       // both give true output 

console.log(null > 0  );     // false 
console.log( null == 0 );     // false   , JS convert null as zero 
console.log( null >=0 );       // true    , jS convert null as zero so Zero>= 0 give output as true 


console.log( undefined ==0 );   // false 
console.log( undefined > 0  );   // false 
console.log( undefined < 0);     // false 


//  === Strict Check 
console.log("2" == 2); // same 
console.log("2" === 2 );  // not same , because its check value and their data types also  