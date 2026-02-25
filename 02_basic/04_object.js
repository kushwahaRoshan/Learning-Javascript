// const instaUser = new Object() // is ko singleton bolte hai
// console.log(instaUser);

const instaUser = {}
// console.log(instaUser);

instaUser.id = "ab123";
instaUser.username = "roshan";
instaUser.isLoggedIn = false;

// console.log(instaUser.isLoggedIn);
// console.log(instaUser);


const regularUser = {
    name : "roshu",
    email: "some@gmail.com",
    fullName:{
        userFullname:{
            firstname:"roshan",
            Lastname:"kushwaha",
            "Lovely name": "roshu"
        }
    }
}

// console.log(regularUser.fullName.userFullname["Lovely name"]);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]

users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser)); //only keys ko print karne ke liye 
// console.log(Object.values(instaUser)); //only value ko print karne ke liye 
// console.log(Object.entries(instaUser)); //keys and value dono ko print karne ke liye 

// console.log(instaUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "js in hindi",
    Fees: "free",
    courseInstructor: "Hitesh choudhary"
}

// console.log(course.courseInstructor);



// DeStructuring
const {courseInstructor : Instructor} = course;
console.log(Instructor);


