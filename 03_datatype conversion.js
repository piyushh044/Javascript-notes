let score = "100";

console.log(typeof score); // string


let val = Number(score);

console.log(typeof val); // number


let score2 = "100abc";

let val2 = Number(score2);

console.log(val2); // NaN
// NaN stands for Not a Number, it indicates that the conversion failed and the result is not a valid number.


// "33" -> 33
// "33abc" -> NaN
// "abc33" -> NaN
// "abc" -> NaN
// "33.5" -> 33.5
// true -> 1
// false -> 0
//null -> 0
//undefined -> NaN


// parseInt() and parseFloat() functions are used to convert strings to numbers, but they work differently than Number().

let score3 = "100abc";

let val3 = parseInt(score3);

console.log(val3); // 100

let score4 = "33.5abc";

let val4 = parseFloat(score4);

console.log(val4); // 33.5

// parseInt() and parseFloat() will parse the string until they encounter a non-numeric character, while Number() will return NaN if the entire string is not a valid number.           