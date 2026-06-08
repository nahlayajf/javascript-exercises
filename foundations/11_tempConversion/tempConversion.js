const convertToCelsius = function (tempF) {
  let tempInC = (tempF - 32) * 5 / 9;
  return Math.round(tempInC * 10) / 10;
}

const convertToFahrenheit = function (tempC) {
  let tempInF = (tempC * 9 / 5) + 32;
  return Math.round(tempInF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
