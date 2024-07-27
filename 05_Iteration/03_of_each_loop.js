//  FOR OF 

["", "", "", "", "", "", "", ""]  // String inside an Array 

[{}, {}, {}]    // Object inside an Array

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {   // iterator = i , here object  says where we have to use loop 
    console.log(num);
}

const greetings = "hello world"
for(const greet of greetings){
      // console.log(`Each char is ${greet}`);
}


// Maps  : It is known for unique values . MAP ISITERABLE BUT not OBJECT IS
const map = new  Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('FR', "France")

//  console.log(map);


for (const [key, value ] of map) {    // for off loop 
    console.log(key , ':-' , value);       //   IN :- India
                                           // USA :- United State Of America
                                            // FR :- France
}

/*

// for of loop on Object 
const myObject = {
    'game1': 'NFS',
    'game2' : 'Spiderman'
}
for (const [key,value] of myObject){
    console.log(key , ':-' , value);     // myObject is not iterable 
}
*/