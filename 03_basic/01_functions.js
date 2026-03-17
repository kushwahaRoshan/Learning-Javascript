function AddTwoNumbers(number1 ,number2  ) {
    const result =  number1 + number2
    return result
}   
const result = AddTwoNumbers(3,4);
// console.log(result);


function loginUserMessage(username) {
    return `${username} is just logged in`
}  
// console.log(loginUserMessage("Roshan")); // jab username ka naam likha ho tab 



function loginUserMessage(username) {
    if (username === undefined) {
        console.log( 'Please enter a username');
        return
    }
    return `${username} is just logged in`
}  
// console.log(loginUserMessage()); // jab username ka naam nahi likha ho tab 


function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200,400,500,1000,1500)); // function ki value(argument) ko unlimited print karne ke liye



const user = {
    username: "Roshan",
    Price: 200
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
}
handleObject(user)


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));


