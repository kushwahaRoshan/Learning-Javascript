const coding = ['js', 'ruby', 'java', 'python','cpp'];

// coding.forEach( function (val) { // nomal function
//         console.log(val);
// } );

// coding.forEach( (val) => { // arrow function
//     console.log(val);
// } )

function printMe(val) {
    // console.log(val);
}
coding.forEach(printMe); 


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "casecoding style sheet",
        languageFile: "css"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
});