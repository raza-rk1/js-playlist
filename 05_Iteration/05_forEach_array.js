// FOR EACH LOOP IN ARRAY   , forEach -> loop parameter 

const programming = [ "JS", "C++", "Ruby", "Python", "Java" ]
programming.forEach(function(value) {
    console.log(value);
});

coding.forEach( (item)=> {
    console.log(item);

})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe);   // only give reference , printing work will be done automatically


coding.forEach((item, index , array)=> {    // forEach -> loop parameter :item , index , array 
    console.log(item, index, array);
})



const myCoding = [    // OBJECT INSIDE AN ARRAY 
    {
        languageName :"JavaScript",
        langaugeFIleName :"js"
    },
    {
        languageName :"Java",        // object 
        langaugeFIleName :"java"
    },
    {
        languageName :"Python",
        langaugeFIleName :"Py"
    }
]
myCoding.forEach((item)=> {   
    console.log(item.languageName);   // javascript 
})                                    // java 
                                      // python 