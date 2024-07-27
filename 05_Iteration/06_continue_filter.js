 /*
 
 const coding  =[ "js", "ruby", "python", "java ", "cpp"]

const values = coding.forEach( (item) => {
     //  console.log(item);
    return item
})
console.log(values);    // forEach doesnot return any value 

*/

const myNums =[1,2,3,4,5,6,7,8,]
 // const newNums = myNums.filter((num) => num > 4 )   // Inside filter we get a  callback function and inside them each value will be passed and we have to give some condition based on our requirement   
  // console.log(newNums);                                  // [ 5, 6, 7, 8 ]


  //const newNums = myNums.filter( (num) => {
     return num > 4 
   // })
  // console.log(newNums);             // []    beacuse of scope , we have to write return keyword in filter , otherwise we  have to write in single line                       



  /*

  // OTHER WAY 
const newNums = []
myNums.forEach(  (num) => {
    if (num > 4) {
        newNums.push(num)
    }

})
console.log(newNums);

*/

// FILTER DATA FROM DATABASE 
let  userBooks = books.filter( (bk)=> bk.author==="History")  // here we use let  not const bc we use multiple times userBooks 
userBooks = books.filter( (bk)=> { 
    return  bk.publish >= 1995 && bk.author === "History"})     // show empty array becuase we use SCOPE here and with with scope we also have to write array and if dont use scope declare it n single line 
console.log(userBooks);
