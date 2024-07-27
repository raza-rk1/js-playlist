// CART SYSTEM IN JS 
 /*

function calculateCartPrice(...num1){    
    return num1
    }
    console.log(calculateCartPrice(200, 400, 500 , 2000))  //  [ 200, 400, 500 ]

*/
    
function calculateCartPrice(val1, val2, ...num1){    
    return num1
    }
    // console.log(calculateCartPrice(200, 400, 500 , 2000))  


    const user  = {
        username :  "Taha", 
        price : 199
    }
    function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    }

    //   handleObject(user)  //   username is Taha and price is 199

    handleObject({
        username: "sam",   // this is how we can pass object directly 
        price : 399

    })  

    //  pass an ARRAY 


const myNewArray =[200, 300, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]                                   // 1 value , 2 value 
}
console.log(returnSecondValue(myNewArray));   // 300 
console.log(returnSecondValue([200, 400, 500, 1000]));  // 400


