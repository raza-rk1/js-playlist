 let value= 3  
 let negValue =-value 
   console.log(negValue);

   console.log(2+ 2);
   console.log(2%3);       //  2 modulo 3 = 2 
   console.log(2**3);     //  2  to the power  3= 8 

   // Add String 
 let  str1 = "Taha "
 let  str2 = "Khan"
  let str3= str1 + str2
  console.log(str3);

 
  console.log( "1 "  +  2 );  // 12 
  console.log( 1 +  "2");      // 12  
  console.log( " 1 " +  2  + 2 );    // 122  
  console.log(  1  +  2  + " 2 " );   // 32    We assume itas  Rule or its a  type of guideline bcz all are derived from ECMA script link 

  console.log(  3 +  4  * 5 % 3  );    //Not  a good pratise 


  console.log(  (3 +  4 ) * 5 % 3  );    //Right  way to declare with braces 

  console.log( +true );   // because it give answer in boolean ie true means 1 and increment is not done 

  console.log(true+);   // not expected show error 
  console.log( + "");    // 0 

  let num1, num2, num3 
  num1  = num2 = num3 = 2  + 2   // not good practise 

  let gameCounter= 100 
  gameCounter++;
  console.log(gameCounter);  // Output 101 
            OR 
  let gameCounter= 100 
  ++gameCounter;
  console.log(gameCounter); // output 101 

  //     IMP : Prefix and Postfix ( js mdn )

  //    link to study  :   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
  
