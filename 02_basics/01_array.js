// //ARRAY 
// const myArr=[ 0,1,2,3,4,5,6,7]
// console.log(myArr[0]);            // we want to know the indexing     // 0
// console.log(myArr[2]);           // 2 ( indexing start with 0 )


// const myHeroes= ["shaktiman" , "naagraj"]  

// //OTHER WAY TO DECLARE ARRAY '
// const myArr2 = new Array (1,2,3,4,50)

// // ARRAY METHODS

// myArr.push(6)
// console.log(myArr);       // add 6 in the last 

// myArr.pop()
// console.log(myArr);       // remove last element from an array 


// // myArr.unshift(9)
// // console.log(myArr);       --> 9 will add in the starting of an array 

// myArr.shift()
// console.log(myArr);      // oRIG ARR = 0,1,2,3,4,5,6,,7
//                         //  After per shift = 1,2,3,4,5,6,7


// console.log(myArr.includes(9));  // false 

// console.log(myArr.indexOf(7));  // 6  


// console.log(myArr);



// const newArr = myArr.join()
// console.log(newArr);             // 1,2,3,4,5,6,6 --> Print it in array form butwill change the type of string 
// console.log(typeof newArr);     // String




// //     SLICE AND SPLICE 

//            // Slice returns a copy of section of an array 

//      console.log("A" , myArr);
     
//      const myn1 =myArr.slice(1 ,3)    // it incude 1 and 2 exclude 3 
//      console.log(myn1);
//      console.log("" , myArr);

     // splice

     const numbs =[ 9, 8,5,9,3,2,1]

     const nArr = numbs.splice(1,5);

     console.table([nArr,  numbs]);      // [8, 5, 9, 3, 2] [9, 1]
