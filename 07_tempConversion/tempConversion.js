const convertToCelsius = function (value) {
  let ans = (value - 32) * 5 / 9
  return Math.round(ans * 10) / 10
};

const convertToFahrenheit = function (value) {
  let ans = (9 / 5) * value + 32
  return Math.round(ans * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
