const marvel_heros = ["thor", "iranman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // ye ek arry ke under dusre array ko add karta hai marge nahi karta 
// console.log(marvel_heros[3][1]);
// console.log(dc_heros[1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // best way to merge array
// console.log(all_new_heros);


const another_arry = [1,2,3,[3,2,1],[4,5,[2,1]]];

const real_anthor_arry = another_arry.flat(Infinity); 
// console.log(real_anthor_arry);
 
console.log(Array.isArray("roshan"));
console.log(Array.isArray([1,2]));
console.log(Array.from("roshan"));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));// to convert array



