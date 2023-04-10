const convertToCelsius = function (temp) {
  const convertedTemp = (temp - 32) * (5 / 9);
  return convertedTemp == 0 ? convertedTemp : round(convertedTemp, 1);
};

const convertToFahrenheit = function (temp) {
  const convertedTemp = (temp * (9 / 5) + 32).toFixed(1);
  return convertedTemp == 0 ? convertedTemp : round(convertedTemp, 1);
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
