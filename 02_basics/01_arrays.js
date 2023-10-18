// array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[2]);

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods
// myArr.push(6)
// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
myArr.shift(9)

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(2));

/* const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)

console.log(myArr); */

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myn2);