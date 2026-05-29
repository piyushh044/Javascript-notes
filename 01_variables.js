// Var,Let,Const

const accountId=1234;
const accountName="John Doe";
const accountBalance=1000.50;
const isActive=true;

console.log("Account ID:", accountId);
console.log("Account Name:", accountName);
console.log("Account Balance:", accountBalance);
console.log("Is Active:", isActive);    


let newAccountId=5678;
console.log("New Account ID:", newAccountId);

newAccountId=9012;
console.log("Updated New Account ID:", newAccountId);

const PI=3.14159;
console.log("Value of PI:", PI);

// PI=3.14; // This will cause an error because PI is a constant


var oldAccountId=4321;
console.log("Old Account ID:", oldAccountId);

oldAccountId=8765;
console.log("Updated Old Account ID:", oldAccountId);   

// var is function-scoped and can be redeclared and updated, while let and const are block-scoped.
// It's generally recommended to use let and const for better code readability and to avoid unintended side effects.
// In summary, use const for values that should not change, let for variables that may change, and avoid using var in modern JavaScript development.

