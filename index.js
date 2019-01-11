const add  = require("./modules/add");
const subtract = require("./modules/subtract");
const multiply= require("./modules/multiply");
const divide= require("./modules/divide");
const {addTen, addFive, addOne} = require("./modules/addNumbers");
const {subtractOne, subtractFive, subtractTen}= require("./modules/subtractNumbers");

const number1 = 393;
const number2 = 238;

let answer = add(number1,number2);
console.log("Adding numbers",number1,number2,answer);

answer = subtract(number1,number2);
console.log(answer);

answer = multiply(number1,number2);
console.log(answer);

answer = divide(number1,number2);
console.log(answer);

answer = addTen(number1);
console.log(answer);

answer = addFive(number1);
console.log(answer);

answer = addOne(number1);
console.log(answer);

answer = subtractOne(number1);
console.log(answer);

answer = subtractFive(number1);
console.log(answer);

answer = subtractTen(number1);
console.log(answer);
