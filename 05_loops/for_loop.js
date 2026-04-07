// for


// for (let i = 1; i < 10; i++) {
//     const element = i;
//     if (element === 5) {
//         console.log("5 number print hoga abhi");
//     }   
//     console.log(element);
// }



// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop print ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`inner loop print ${j} and inner loop value ${i}`);
//         console.log(i + "*" + j + " = " + i*j);   
//     }
// }


// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break  // ye yaha par break kar deta hai matlab is ke baad ka code ko print nahi karega   
//     }
//    console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue   // ye sirf 5 ko dubara print nahi karega baaki to sab prnt karega
    }
   console.log(`Value of i is ${index}`);
}