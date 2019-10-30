const div = require('./divide');

module.exports.divTen = function(num) {
    return div(num, 10);
}

module.exports.divFive = function(num) {
    return div(num, 5);
}

module.exports.divOne = function(num) {
    return div(num, 1);
}
