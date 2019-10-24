const add = require("./add");

module.exports.addOne = function(num) {
  return add(num, 1);
}

module.exports.addTen =  function(num) {
  return add(num,10);
}

module.exports.addFive = function(num) {
  return add(num, 5);
}
