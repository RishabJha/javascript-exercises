const add = function (value1, value2) {
  return value1 + value2
};

const subtract = function (value1, value2) {
  return value1 - value2;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current, 1)
};

const power = function (value1, value2) {
  return value1 ** value2
};

const factorial = function (value) {
  let product = 1
  if (value < 2) {
    return 1
  }
  for (let i = value; i > 1; i--) {
    product *= i
  }
  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
