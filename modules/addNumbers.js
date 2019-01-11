const add = require("./add");

module.exports.addTen =  function(num) {
  return add(num,10);
}

module.exports.addFive = function(num) {
  return add(num, 5);
}

module.exports.addOne = function(num) {
  return add(num, 1);
}
