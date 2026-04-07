const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = myNumbers.map((item) => {return item + 10} ); //jab {} ka use karenge tab return keyword lagana hi padega
// console.log(newNumbers);



const myNewNumbers = myNumbers   // is ko kehte hai chaining  and is ko ek line me bhi likh sakta tha result same hi aata
        .map((item) => item * 10 )
        .map((item) => item + 1 )
        .filter((item) => item >= 40 )
console.log(myNewNumbers);

