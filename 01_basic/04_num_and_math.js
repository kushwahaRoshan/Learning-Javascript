const score = 400;
// console.log(score); // Is tarike se sirf 400 esa number hi milega

const balance = new Number(100); // is tarike se [Number: 100] esa print kar ke milega
// console.log(balance);
// is ko string me bhi convert kar sakte hai

// console.log(balance.toString().length); // lenght pata karne ke liye .lenght 
// console.log(balance.toFixed(2)); // value ke baad . me kitne number chahiye us ke liye Ex. 100.00


/******************* Maths ******************/
// console.log(Math);
// console.log(Math.abs(-4)); // -minus wali value ko plus me laane ke liye
// console.log(Math.round(4.5));// value ko round off karne ke liye  
// console.log(Math.ceil(4.2));// sabse uper ki value laane ke liye Ex. 5
// console.log(Math.floor(4.9));// sabse niche ki value laane ke liye Ex. 4
// console.log(Math.min(4,3,5,1)); // sabse chhoti value pata karne ke liye Ex.1 
// console.log(Math.max(4,3,5,1)); // sabse badi value pata karne ke liye Ex.5 
// console.log(Math.random()); // random number laane ke liye 

// console.log(Math.round((Math.random()*10) + 1));  // koi bhi random number ko round off me print karne ke liye 

/* ab ek function bante hai is ke liye*/ 

const min = 1000;
const max = 2000;

// console.log(Math.round(Math.random() * (max -  min + 1)) + min);


console.log(Math.round(Math.random()*10 + 1) );
