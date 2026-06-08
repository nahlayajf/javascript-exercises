const convertToCelsius = function (tempF) {
  let tempInCel = (tempF - 32) * 5 / 9;
  return Math.round(tempInCel * 10) / 10;
}

const convertToFahrenheit = function (tempC) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
