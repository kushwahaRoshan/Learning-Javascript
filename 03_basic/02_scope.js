//var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "roshan"
    function two() {
        const website = "myportfolio.com";
        // console.log(username);
    }
    two();
}
one();

// Function likhne ke tarike 1st normal tarika 
function addOne(num) {
    return num + 1
}
addOne(2);// isko function ke pahle exicute kar sakte hai

// Function likhne ke tarike 2nd variable me store karke likhne ka tarika

const addtwo = function(num) {
    return num + 2
}
addtwo(); // isko functionke pahle exicute nahi kar sakte hai 
