const promiseOne = new Promise(function(resolve , reject) {
      // Do an async task 
      // Database Calls  , Cryptography related task , network call 
      setTimeout(function()  {
        console.log('Async Task is completed');    // here promise is created and below we will consume it 
        resolve()     // here resolve connect with .then
} , 1000)
})

// in console first promise task is completed then it will print Promise consumed 

promiseOne.then(function(){                    // .then is a direct relation with resolve 
    console.log('Promise Consumed');
})   




// second promise

new Promise (function(resolve , reject ){     // it not necessary to store promise  in variable 
    setTimeout(function(){
    console.log("Async task 2 ");
    resolve()
    } , 1000)

})    .then(function(){
    console.log("async task 2 resolved");

})


// third promise 

const promiseThree = new Promise(function(resolve, reject){
          setTimeout(function(){
              console.log("Async task 3 ");
              resolve({username : "Chai" , email : "chaii@example.com"})                       // inside reolve most of the time we see object is passed but we can pass array function also
          }, 1000)
      })
      promiseThree.then(function(user){
        console.log(user);      // jo bhi parameter ham resolve me pass karenge wo hame yahan mil jaega
      })



      // fourth promise 
      const promiseFour = new Promise(function(resolve, reject){
           setTimeout(function(){
             let error =false      //  or true  (console : Something went wrong)
             if(!error){
                resolve({username: "taha", password: "123456"})     // inside reolve most of the time we see object is passed but we can pass array function also
             } else {
                reject("ERROR : Something went wrong ")
             }
           } , 1000)

      })
         const username = promiseFour
      .then((user) => {
        console.log(user);
        return user.username
      })
      .then((username) => {              // this is called chaining means the value return from above .then , same value will come in the new chain (MOST IMP WHEN WE WILL CONNECT DATABASE )
        console.log(username);
          
      })
      .catch(function(error){
        console.log(error);
      })
      .finally(function(){
        console.log("The promise is completed");
      })
       
      

    // five promise 
    const PromiseFive = new Promise(function(resolve, reject){   // here we can use arrow function also 
      setTimeout(function(){
        let error = true      // if we use false here then it works perfect 
        if(!error){
          resolve({username: "javascript", password: "123456"})
        } else {
          reject("ERROR : JS went wrong ")
        }
                          
      }, 1000)
    })

    async function consumepromiseFive(){    // ASYNC WAIT ( It is mostly used when we are doing database connection)
    try{
      const response =  await PromiseFive;
      console.log(response);
    } catch (error) {          // Async await cannot handle error directly , so we have to wrap it in try catch block and we handle it directly and except that when the promise resolve then the  values will come 
      console.log(error);      // using try and catch gracefully handle the error 
    }
  }

    consumepromiseFive();




    // BEHIND THE SCENE 
    
    async function getAllUsers(){
      try {
      const response = await fetch ('https://jsonplaceholder.typicode.com/users');  // fetch need an URL 
       const data =   await response.json()     // JSON because data coming from is in string format 
       console.log(data);
      } catch (error) {          // Async await cannot handle error directly, so we have to wrap it
        console.log( "E" , error);
      }
    }

    getAllUsers();     // code is okay but it will take time  (response.json  will take time to convert) , So we have to add await before it 
 

    



    // Above code in .then and .catch format below 

   fetch('https://jsonplaceholder.typicode.com/users')  
   .then((response)=>{                                    // we have return reponse.json() method and now we use one more .then to handle 
     return response.json()
 
   })
   .then((data) => console.log(data))
    .catch((error) => console.log(error));   // here we dont have to call 