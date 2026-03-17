const user = {
    username:"roshan",
    price:999,
    welcomemessage: function () {        
        console.log(`${this.username}, welcome to website`); // this current contect ko refer karta hai
    } 
}
// user.welcomemessage();
// console.log(this);


const chai =  () => {
    let username = "hitesh"
    console.log(this.username);  // arrow function me this nahi hota hai to ye window object ko refer karega aur window object me username nahi hai isliye undefined aayega
}
chai()

// const addTwoNum = (num1 ,num2 ) =>{
//     return num1 + num2
// }
// console.log(addTwoNum(3,5));

const addTwoNum = (num1 , num2) => (num1 + num2);  //second tarika se arrw fuction likh sakte hai react me bahut use hota hai 

// console.log(addTwoNum(3,5));
const addTwo = (num1, num2) => ({username: "hitesh"}) // is tarike se ese object bhi return kara sakte hai
console.log(addTwo(3,5));
