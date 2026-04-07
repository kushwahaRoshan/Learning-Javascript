//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}


const greeting = "hello world!";
for (const greet of greeting) {
    // console.log(greeting);
    
}


// Map

const map = new Map()
map.set('In' , "India")
map.set("USA", "United State of America" )
map.set("FRA", "France")
map.set('In' , "India") //ye print nahi hoga kyu ki map uniqe wale ke liye jaana jaata hi same ko print nahi karta

// console.log(map);


for (const [key, value] of map) {
    console.log(key , ':-' , value );
    
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // object ke liye forof loop kaam nahi karta hai
//     console.log(key, ':-', value);
    
// }