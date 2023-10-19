// functions

function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("J");
    console.log("A");
}

// sayMyName()

/* function addTwoNo(num1, num2) {
    console.log(num1 + num2)
} */

function addTwoNo(num1, num2) {
    let result = num1 + num2
    // return result 1st way
    return num1 + num2 //another way to return
    console.log("Anuja"); //its not execute because we are define return 
}

// addTwoNo(3, "4")
// addTwoNo(3, null)
const result = addTwoNo(3, 4)
//console.log("Result: ", result); //undefined in result output

function loginUserMessage(username) {
    if(username === undefined){  //you also use this type of code:- if(!username)
        console.log("Please enter a username!");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("anuja"))
console.log(loginUserMessage()) //undefined output when we not declare value in it
