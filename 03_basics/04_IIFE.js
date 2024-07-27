// IMMEDIATELY INVOKED FUNCTION EXPRESSSIONS  (IIFE)

(function chai(){                               // Named IIFI
    console.log('DB CONNECTED');

})();                  
        // WE CAN WRITE ABOVE FUN IN ARRAY FUN FORM
                (function aurcode() {
            console.log('DB CONNECTED TWO');

        })();

        // OR 
        ( ()   => {
            console.log('DB CONNECTED THREE');
        } ) ();
  
        ( (name)   => {                             // Unnamed IIFE and Paramterised IIFE and when we write Two IIFE , we use ; 
            console.log(`DB CONNECTED THREE ${name}`);   // varible declaration
        } ) ('taha')

    // () , we can use parenthesis then it will make  ablog and write code 
    //   chai()
 
  //   ()  ()  : first parenthesis is for where we write function definiation and the other is for execution call 