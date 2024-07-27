// REDUCE WORKS when we are doing shopping 

// accumulator : empty value provided to us , first it will take the initial value and then it will take sum of accumulator  + initialValue 

const myNums =[ 1, 2,3 ]

const myTotal = myNums.reduce( function (accumulator, currentValue) {
    console.log(`accumulator  : ${accumulator}, current : ${currentValue}`);
     return accumulator + currentValue

}, 0 );

 // const myTotal = myNums.reduce (acc, curr) => acc + curr, 0)       // other way of writing above code without using scope 


console.log(myTotal);

/* OUTPUT ABOVE CODE 
accumulator  : 0, current : 1
accumulator  : 1, current : 2
accumulator  : 3, current : 3
6
*/


const shoppingCart = [ 
    {
        itemNamw : "Js course ",
        price : 299
    },
    {
        itemNamw : "py course ",
        price : 399
    },
    {
        itemNamw : "MobileDev course ",
        price : 299
    },
    {
        itemNamw : "Js course ",
        price : 299
    }
]

 const priceToPay = shoppingCart.reduce((acc, item) => acc +  item.price, 0 )
 console.log(priceToPay);                       // 1296
