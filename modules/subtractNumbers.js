const subtract = require("./subtract");


module.exports.subtractOne = function(num) {
  return subtract(num, 1);
}

module.exports.subtractTen =  function(num) {
  return subtract(num,10);
}

module.exports.subtractFive = function(num) {
  return subtract(num, 5);
}

