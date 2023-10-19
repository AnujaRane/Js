// singleton

//  object literals
// Object.create

//  Symbol declare
const mySym = Symbol("key1");

const JsUser = {
    name: "Anuja",
    "full name": "Anuja Rane",
    [mySym]: "mykey1",
    age: 23,
    location: "Indore",
    email: "anuja@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser [mySym]);
console.log(typeof JsUser.mySym);

JsUser.email = "bulbul@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "anuja@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user!");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())