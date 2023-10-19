// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Anuja",
            lastname: "Rane"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}


// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign(obj1, obj2) this is the first way to combine objects
const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);
// console.log(obj1 === obj4);

const obj5 = {...obj1, ...obj2}
// console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "s22@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "JS Tutorial",
    price: "999",
    courseInstructor: "Anuja"
}
// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor); is too long name
console.log(instructor)

// JSON
/* {
    "name": "anuja",
    "coursename": "JS Tutorial",
    "price": "free",
} */

[
    {},
    {},
    {}
]

