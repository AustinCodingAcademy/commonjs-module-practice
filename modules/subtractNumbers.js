const subtract = require('./subtract');

module.exports.subtractTen = function(num) {
    return subtract(num, 10);
}

module.exports.subtractFive = function(num) {
    return subtract(num, 5);
}

module.exports.subtractOne = function(num) {
    return subtract(num, 1);
}

