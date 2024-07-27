

// SINGLETON : Object  OR DECLARE Object with the help of CONSTRUCTOR 

const tinderUser = new Object()    // SINGLEton Object 
 // other way to declare object :   const tinderUser ={}      --> NON SINGLETON Oject 

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIN = false 

console.log(tinderUser);       //  output --> { id: '123abc', name: 'Sam', isLoggedIN: false }


const regularUser ={
    email: "some@gmail.com",
    fullname : {                               // fullname is self an object
        userfullname : {
            frstname : "Taha",
        lastname : "Khan"
    }
}
}

console.log(regularUser.fullname.userfullname.firstname);    // all the nesting objects are accessible this way 


// WE CAN COMBINE OBJECTS LIKE WE COMBINE AN ARRAY EARLIER 

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3:"A" , 4: "B"}


//const obj3 = {obj1 , obj2}
  // console.log(obj3);              //output ->  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'A', '4': 'B' } }


  /*    const obj3=Object.assign({}, obj1, obj2 )
console.log(obj3);                    // { '1': 'a', '2': 'b', '3': 'A', '4': 'B' }  --> (   {} to show all the values combine in console)


*/
// to assign object with the help of SPREAD OPERATOR
// EASY AND MOSTLY USED 

const obj3 = { ...obj1, ...obj2} 
console.log(obj3);                      // { '1': 'a', '2': 'b', '3': 'A', '4': 'B' }


/*      VALUES COMING FROM DATABASE --> IT WILL COME IN ARRAY OF OBJECTS FORM like USER is coming 

const Users = [
    {
    id: 1,
    email2 : "h@gmail.com"

}
]
Users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries (tinderUser)); // print array inside an array --> every key value is in the  array 


*/ 
// IF THE VALUES  EXIST OR NOT THEN   
 console.log(tinderUser.hasOwnProperty('isLoggedIN'));      //  true 

 console.log(tinderUser.hasOwnProperty('isLogged'));       // false 


 