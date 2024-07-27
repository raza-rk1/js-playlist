// NESTED OBJECT ACCESSING 


/*
const course = {
    coursename: "js in hindi" ,
    price:"999",
    courseInstructor:"Taha",

    nestedObj: {
        name: "Taha",
        func: function () {
            console.log("I am a fun");
        }
    }
}

console.log(Object.values(course)[3].name);

   //   console.log(Object.keys(course));  // values , entries 

   */

   // HOW IS HOW WE DO DESTRUCTORinG IN OBJECT 
   const course = {
    coursename: "js in hindi" ,
    price:"999",
    courseInstructor:"Taha",
   }
     
   const {constInstructor : instructor } = course   // now we call as courseInstructor to instructor only 
   console.log(courseInstruotor);                   // Taha


// REACT DESTRUCTORING 
   const navbar =({company})=>{


   }

   navbar(company = "Taha")



      //    APIs CONCEPT 
         
      // Now API values comes in JSON format earlier used to come in XML format which is complicated 

    //   {
    //     name:"Taha "                          // JSON FORMAT , both keys and values are in string format 
    //     coursename: "JS IN HINDI",
    //     price: "free"
    //   }

 // Sometimes we get APIs in ARRAY format also rather than OBJECT format 

 [
    {},
    {},
    {}
 ]