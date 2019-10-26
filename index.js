const add  = require("./modules/add");
const subtract = require("./modules/subtract");
const multiply= require("./modules/multiply");
const divide= require("./modules/divide");
const {addTen, addFive, addOne} = require("./modules/addNumbers");
const {subtractTen, subtractFive, subtractOne}= require("./modules/subtractNumbers");

const number1 = 393;
const number2 = 238;

let answer = add(number1,number2);
console.log("Adding numbers",number1, "+", number2,"=",answer);

answer = subtract(number1,number2);
console.log("Subtracting numbers", number1, "-", number2,"=",answer);

answer = multiply(number1,number2);
console.log("Mulitplying", number1, "*", number2, "=", answer);

answer = divide(number1,number2);
console.log("Dividing", number1, "%", number2, "=", answer);

answer = addTen(number1, 10);
console.log(number1, "+", 10, "=", answer);

answer = addFive(number1);
console.log(number1, "+", 5, "=", answer);

answer = addOne(number1);
console.log(number1, "+", 1, "=", answer);

answer = subtractOne(number1);
console.log(number1, "-", 1, "=",answer);

answer = subtractFive(number1);
console.log(number1, "-", 5, "=", answer);

answer = subtractTen(number1);
console.log(number1, "-", 10, "=", answer);
