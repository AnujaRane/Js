// Primitive DataType

// 7 types : String. Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoogedIn = false
const outSideTemp = null
let userEmail;

/* Symbol declare */
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4868537935935959385n;
// console.log(typeof bigNumber)

// Referenced (Non - Primitive)
// 3 types : Array, Object, Function 
/* Array */
const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);

/* Object */
let myObj = {
    name: "Anuja",
    age: 23,
}
console.log(typeof muObj)

/* Function */
const myFunction = function(){
    console.log("hello World");
}

console.log(typeof myFunction)