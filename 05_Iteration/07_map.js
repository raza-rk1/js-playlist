const myNums =[1,2,3,4,5,6,7,8,9, 10]

// const newNums = myNums.map( (num) => num + 10)
// const newNums = myNums.map( (num) => { return num + 10})   // we use return if we are using scope  {}

// we can do above things with forEach also 


// CHAINING OPERATIONS 
const newNums = myNums
                  .map( (num) => num * 10)         // first 10 will multiply then add +1 
                  .map((num) => num + 1)
                  .filter((num) => num  >= 40)        //    [ 41, 51,  61, 71,
                                                        //      81, 91, 101     ]
console.log(newNums);              



