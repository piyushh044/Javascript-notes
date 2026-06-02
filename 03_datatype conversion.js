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


