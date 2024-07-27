// SWITCH 


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match ");
        break;                                   // if we dont use break it will print all the below code except default
}

const birthmonth = "march"
switch (birthmonth) {
    case "Jan" :
        console.log("january");
        break;
    case "Feb" :
        console.log("February");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("default case match ");
        break;                                   // march ( we  are using string)
}