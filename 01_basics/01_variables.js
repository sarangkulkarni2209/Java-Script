const accountId = 123445;
let accountEmail = "sarang@google.com";
var accountPassword = "2345";
accountCity = "Pune";
let accountSate;

//accountId = 2// not allowed
accountEmail = "rohan@google.com";
accountPassword = "555";
accountCity = "Nagpur";
console.log(accountId);

/*
perfer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountSate]);