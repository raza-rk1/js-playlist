// FOR LOOP 
/*
for (let i = 0; i <= 10; i++) {
    const element = i; 
    
    if (element == 5){
        console.log("5 is best number");
    }
    console.log(element)
}

  // console.log(element);   // element is not define

  */




  // INNER LOOP 
 for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
         //console.log(`Inner loop value: ${j} and inner loop ${i}`);
         console.log(i + '*' + j + '='+ i*j);     // it will print table upto 10
    }
}



let myArray = [ "flash", "batman", "superman" ];
console.log(myArray.length);    // 0 1 2 
 for (let index = 0; index < myArray.length; index++) {  // if  we give = with <= then it will show undefined
    const element = myArray[index];
    
   //  console.log(element);      
}


// BREAK AND CONTINUE 
for (let i = 1; i <= 20 ; i++) {
    
    console.log(`value of num is ${i}`);
        
    }
    