
const add = (a, b) => a + b;

const PI = 3.14;

const square = x => x * x;

/// use module.exports to let other files access to 
/// this file
/// what is accessible can be specified

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;





