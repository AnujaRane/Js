const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 not allowed because of constant

accountEmail = "hc@hc.com"
accountPassword = "212433"
accountCity = "Indore"
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Note:- Perfer not to use var because of issue in block and functional scope
*/

// console.log(accountId);