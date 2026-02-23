// let score = "33"; npm install -g nodemon
let score = "33dx";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score); // converting in Number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Result
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "0";
let boolenIsLoggedIn = Boolean(isLoggedIn); // converting in Boolean
// console.log(typeof boolenIsLoggedIn);
// console.log(boolenIsLoggedIn);

// Result   
// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);



// *********************** Operations ***********************


let value = 3;
let negvalue = -value;
// console.log(negvalue);

let str1 = "roshan";
let str2 = "Kushwaha";

let str3 = str1 + " " + str2 ;
console.log(str3);
 
// console.log(2 + 2);

// Wrong way strat
// console.log("2" + 2 + 2); // ye sab ko string samjhega aur value 222 print karega kyu ki jo bhi datatype pahle hota hai ye us hisab se work karta hai and ye bad practic hai
// console.log(2 + 2 + "2"); // ye starting ko + karega aur value 42 print karega kyu ki jo bhi datatype pahle hota hai ye us hisab se work karta hai and ye bad practic hai
// Wrong way End

// good practic alway use parentices() for this
// console.log(("2") + 2 + 2); 
// console.log(2 + 2 + ("2"));
// Example
// console.log( (3 + 4) * 5 % 3); // good way



let gameCounter = 3;
gameCounter++ ;
console.log(gameCounter);

let gameCounter2 = 3;
++gameCounter2 ;
console.log(gameCounter2);