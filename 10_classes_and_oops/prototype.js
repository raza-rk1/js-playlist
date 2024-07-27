
 /*

let myName = "Taha        "
let myChannel = " chai       "
 // console.log(myName.trim().length);  but not work when we take together above statement 

 console.log(myname.trueLength);

 */



 /*   



 let myHeroes = ["thor" , "spiderman"]

 let heroPower = {
     thor : "hammer" , 
     spiderman : "sling",

     getSpiderPower: function() {
        console.log(`spidy power is ${this.getSpiderPower}`);
     }
 }

 Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`);
 }

 Array.prototype.heyHitesh = function() {
console.log(`Hitesh says hello`);
 }
 myHeroes.hitesh()
 myHeroes.heyHitesh()
 //  heroPower.heyHitesh()
//  heroPower.hitesh()


//           INHERITENCE 

const user = {
    name: "Taha",
    age: 25
}

const teacher = {
    makeVideo : true 
}
const TeachingSupport={
    isAvailable: false 
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true, 
    __proto__: TeachingSupport
}
   // noTeacher.__proto__ =  User                   // Old Approach 


// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


*/


// HITESH CODE 
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()