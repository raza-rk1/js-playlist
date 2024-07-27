/*  PRIMITIVE DATA TYPES : All the primitive data types are CallbyValue 
  
String , Number , Boolean , null means  ( temperature is not zero its empty ) , undefined means value is not known , Symbol means ( It represents a unique identifier and can be used in various ways) , BigInt means ( include some scientific value or big value).

// JS is Dynamically type lang or Statically type language? 
  Ans : we have to tell the variable type only for the increase their safety but in Js their is no need to tell the variable type so JS is a Dynamically type language.

   For EXAMPLE : const score= 100 
                 cosnt score = false  , In JS we dont define language 
                 const scorevalue = 100.3 
                 const isLoggedIn = false 
                 const outsideTemp = null means empty 
                 let userEmail;  // output undefined or we can write as let userEmail: undefined 



                 const id = Symbol('1243')
                 const anotherId = Symbol('123')   // Result we get from id or anotherId is  not same 

                 TypeScript EXMP : const dcore : nukber = 100
                                    or 

JavaScript is a Dynamically Typed Language. This means that the data types of variables can change during the program execution. JS is also capable of handling different types of data, such as strings, numbers, objects, functions, and more.



//NON PRIMITIVE DATA TYPE  OR (REFERENCE TYPE ) : 

Arrays , Objects , functions 



/*    WHAT IS CALL BY VALUE AND CALL BY REFERENCE  :  While calling a function, we pass values of variables to it. Such functions are known as “Call By Values”. While calling a function, instead of passing the values of variables, we pass address of variables(location of variables) to the function known as “Call By References.
                                OR 

CBV passes a copy of the value of the argument to the called function, while CBR passes a reference to the original variable.     */