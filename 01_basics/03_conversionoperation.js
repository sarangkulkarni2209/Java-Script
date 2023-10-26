let score = "123abc";
console.log(typeof score);
let value = Number(score);
console.log(typeof value);
console.log(value);

// "33"=> 33
// "33abc"=> NaN (not a number)
// true=> 1; false => 0

let pass = 1;
let booleanPass = Boolean(pass);
console.log(booleanPass);

// 1=>true; 0=>false;
// ""=>false;
// "string"=>true;