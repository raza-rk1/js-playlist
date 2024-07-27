const marvel_heroes =[ "thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes);


/*
console.log(marvel_heroes);          //  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]   // 1, 2,3 and rest are 4 element 

console.log(marvel_heroes[3][1]);    // flash 

*/


const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);                 // output of CONCAT -- [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//      PUSH perform on an existing array but CONCAT returns a new array 



//    In Place of CONCAT we use SPREAD OPERATOR  
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);     // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


 const another_array =[ 1,2,3,[4,5,6],7,[8,9,[4,5]]]
 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);



 console.log(Array.isArray("Taha"))    //  false 
 console.log(Array.isArray(1,2,3,4));   // false

 // IF  WE WANT TO CONVERT TAHA in ARRAY then
 console.log(Array.from("Taha"))         //    [ 'T', 'a', 'h', 'a' ]

   //  console.log(Array.from("1","2","3","4"));     // show error 

 // We can CONVERT object also     ******  IMP ******
 console.log(Array.from({name: "Taha"}))     // [] --> we get empty array 


 let score1 = 100
 let score2 = 200
 let score3 = 300
 console.log(Array.of(score1,score2,score3));   // we  can use of in place of from in an array 

