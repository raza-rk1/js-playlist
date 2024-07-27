const name  = "hitesh" 
const repoCount = 50

  //  console.log( name + repoCount + "value" );     --> Not a good pratise 

  console.log(`Hello my name is ${name } and my repo count is ${repoCount}`);


  const gameName =new String ('hites-hc')
  console.log(gameName);    // Other ways to declare String 

  // Below  we ar accessing keys
  console.log(gameName[0]);     // output we get as  h 

  console.log(gameName.__proto__);   // Easy way to access prototype   and we get output as   -->  {}


  console.log(gameName.length);   // 7 
  console.log(gameName.toUpperCase());   // HITESHC  but it will not change our original string 

  console.log(gameName.charAt(2));       // t  at 2nd position 

  console.log(gameName.indexOf('t'));  // t at which position  -->  2 position 

  
const newString =gameName.substring(0,4)
console.log(newString);                    //   output --> hite    (hites-hc)  , excluding 4 (0,1,2,3)

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);    // e 



const anotherString2 = gameName.slice( -8, 4 )
console.log(anotherString2);     // hite 


const newStringOne = "  hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());    //  hitesh --> remove all the space 


   
const url = "https:/hitesh.com/hitesh%20choudhary"     // Browser dont understand spaces for ex hitesh choudhary , then browser will give hitesh%20choudhary (convert this into URL cosing)
console.log(url.replace ('%20', '_'));        // give output as https:/hitesh.com/hitesh-choudhary  , %20 replace with -


console.log(url.includes ('hitesh'));    // show output as true '

console.log(url.includes ('sundar'));    // show output as  false 



// CONVERT STRING INTO ARRAY 
console.log(gameName.split('_'))   // we split bases on _ (dash)  --> [ 'hites-hc' ]



// console.log("jamiahamdard".slice(-7,7));
