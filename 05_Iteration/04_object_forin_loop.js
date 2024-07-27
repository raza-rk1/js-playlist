const myObject = {
    js: 'javascript',
    cp : 'c++',
    rb  : 'ruby',
    py  : 'python'
}

for (const key in myObject) {
   //  console.log(myObject[key]);   // we get both key and object 
    console.log(`${key} : ${myObject[key]}`);   // we get only key and object with backtik

}



// for in loop for ARRAYS 
const programming = [ "JS", "C++", "Ruby", "Python", "Java" ]
for (const key in programming) {
    console.log(programming[key]);
}



// FORIN LOOP IN MAP     // Map is not iterable in forIn loop
const map = new  Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('FR', "France")

for (const key in map) {
    console.log(key);
}
