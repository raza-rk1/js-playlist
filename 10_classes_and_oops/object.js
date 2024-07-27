// FUNCTION IS AN OBJECT ? : function in an object and function itslef a function
// object prototype is null 

function multipleBy5(num){
    this.num = num;
    return num * 5;
}

 // multipleBy5()
 multipleBy5.power = 2 
 console.log(multipleBy5(5));      // 25
 console.log(multipleBy5.power);    // 2
 console.log(multipleBy5.prototype);  // in output {} empty parenthesis 

 function createUser(username , score){
     this.username = username;
     this.score = score;
 }


 createUser.prototype.increment = function(){     // increment method
    this.score++
 }
 createUser.prototype.printMe = function(){     // printMe method
  console.log(`price is ${this.score}`);        
 }
 const chai =  new createUser("chai" , 25)       // add  new keyword  and print price is 25
 const tea = createUser("tea", 250)


 chai.printMe ()                        // we dont have to write prototype bcz js understand prototype behind the scene

 
