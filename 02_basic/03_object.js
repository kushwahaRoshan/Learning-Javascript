// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Roshan",
    "Full Name": "Roshan Kushwaha", 
    [mySym]: "mykey",// symbol ko ese hi likhte hai 
    age:25,
    location: "Jaipur",
    email: "roshan@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.name); //print karne ka normal tarika hai ye 
// console.log(JsUser.Full Name); // agar space dekar print karna ho to alag tarike ke karna hoga
// console.log(JsUser["Full Name"]);// agar space dekar print karna ho to ye tarike se karna hoga
// console.log(JsUser[mySym])// symbol ko ese hi acess karte hai 

JsUser.email = "roshan@chatgpt.com"
// Object.freeze(JsUser) // kisi bhi object ko freeze karne ke liye 
JsUser.email = "roshan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());